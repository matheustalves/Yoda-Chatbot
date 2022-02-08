<template>
  <div
    class="bg-green-600 rounded-lg border-2 border-gray-900 p-5 h-full flex flex-col"
  >
    <div class="flex-grow overflow-auto p-3 content-between">
      <MessageItem
        v-for="{ id, content, from, list } in messages"
        :key="id"
        :ref="messages"
        :content="content"
        :from="from"
        :list="list"
      />
      <p v-if="loading" class="text-sm">Yoda is typing...</p>
      <div ref="bottom"></div>
    </div>

    <form
      class="text-center flex items-center justify-center mt-5"
      @submit.prevent="handleNewMessage"
    >
      <input
        v-model="messageInput"
        class="p-2 rounded mr-1 text-black flex-grow"
        placeholder="say something to yoda"
        :disabled="loading"
        @keypress.enter.prevent="handleNewMessage"
      />
      <button
        type="submit"
        class="ml-1 p-2 bg-gray-900 shadow rounded hover:bg-gray-800"
      >
        ▷
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageInput: '',
      userMessage: '',
      nextId: 0,
      nextFrom: 'user',
      messages: [],
      noResults: false,
      bigMessage: false,
      loading: false,
    }
  },
  mounted() {
    if (localStorage.getItem('messages')) {
      try {
        this.messages = JSON.parse(localStorage.getItem('messages'))
      } catch (e) {
        localStorage.removeItem('messages')
      }
      this.$nextTick(() => {
        this.$refs.bottom.scrollIntoView({ behavior: 'smooth' })
      })
    }
  },
  methods: {
    async handleNewMessage() {
      if (this.messageInput !== '') {
        this.bigMessage = false

        this.saveMessage(this.messageInput, [])

        this.userMessage = this.messageInput
        this.messageInput = ''

        this.loading = true
        if (this.userMessage.includes('force')) {
          this.bigMessage = true
          this.noResults = false
          await this.getSwapiResponse('force')
        } else {
          await this.getYodaResponse(this.userMessage)
        }
        this.loading = false
      }
    },
    saveMessage(message, list) {
      this.messages.push({
        id: this.nextId++,
        content: message,
        from: this.nextFrom,
        list,
      })

      this.$nextTick(() => {
        this.$refs.bottom.scrollIntoView({ behavior: 'smooth' })
      })

      const parsed = JSON.stringify(this.messages)
      localStorage.setItem('messages', parsed)

      this.nextFrom = this.nextFrom === 'user' ? 'yoda' : 'user'
    },
    async getSwapiResponse(type) {
      let body = null
      let message = null
      let attribute1 = null
      let attribute2 = null
      let attribute3 = null
      if (type === 'force') {
        body = {
          query: `
            query {
              allFilms{
                films{
                  title
                }
              }
            }
          `,
        }
        message = 'The force is in these movies:'
        attribute1 = 'allFilms'
        attribute2 = 'films'
        attribute3 = 'title'
      } else {
        body = {
          query: `
            query {
              allPeople(first: 6){
                people{
                  name
                }
              }
            }
          `,
        }
        message =
          "I haven't found any results, but here is a list of some Star Wars characters:"
        attribute1 = 'allPeople'
        attribute2 = 'people'
        attribute3 = 'name'
      }
      await fetch('https://inbenta-graphql-swapi-prod.herokuapp.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((result) => {
          const list = []
          for (const item of result.data[attribute1][attribute2]) {
            list.push(item[attribute3])
          }
          this.saveMessage(message, list)
        })
    },
    async getYodaResponse(userMessage) {
      await fetch('http://localhost/api/', {
        headers: {
          'Content-Type': 'application/json',
          userMessage,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.answers[0].flags.includes('no-results')) {
            if (!this.noResults) {
              this.saveMessage(result.answers[0].message, [])
              this.noResults = true
            } else {
              this.bigMessage = true
              this.getSwapiResponse('characters')
              this.noResults = false
            }
          } else {
            this.saveMessage(result.answers[0].message, [])
            this.noResults = false
          }
        })
    },
  },
}
</script>
