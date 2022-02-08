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
      <p v-if="$fetchState.pending" class="text-sm">Yoda is typing...</p>
      <div ref="bottom" :class="bigMessage ? 'mt-48' : 'mt-20'"></div>
    </div>

    <form
      class="text-center flex items-center justify-center mt-5"
      @submit.prevent="$fetch"
    >
      <input
        v-model="messageInput"
        class="p-2 rounded mr-1 text-black flex-grow"
        placeholder="say something"
        @keypress.enter.prevent="$fetch"
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
      nextId: 0,
      nextFrom: 'user',
      messages: [],
      noResults: false,
      bigMessage: false,
    }
  },
  async fetch() {
    if (this.messageInput !== '') {
      this.bigMessage = false
      this.saveMessage(this.messageInput, [])
      const userMessage = this.messageInput
      this.messageInput = ''

      if (userMessage.includes('force')) {
        this.bigMessage = true
        await this.getForceResponse()
      } else {
        await this.getYodaResponse(userMessage)
      }
    }
  },
  methods: {
    saveMessage(message, list) {
      this.messages.push({
        id: this.nextId++,
        content: message,
        from: this.nextFrom,
        list,
      })
      this.nextFrom = this.nextFrom === 'user' ? 'yoda' : 'user'

      this.$refs.bottom.scrollIntoView({ behavior: 'smooth' })
    },
    async getForceResponse() {
      await fetch('https://inbenta-graphql-swapi-prod.herokuapp.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              allFilms{
                films{
                  title
                }
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const message = 'The force is in this movies:'
          const list = []
          for (const movie of result.data.allFilms.films) {
            list.push(movie.title)
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
              this.getCharacters()
              this.noResults = false
            }
          } else {
            this.saveMessage(result.answers[0].message, [])
          }
        })
    },
    async getCharacters() {
      await fetch('https://inbenta-graphql-swapi-prod.herokuapp.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              allPeople(first: 6){
                people{
                  name
                }
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const message =
            "I haven't found any results, but here is a list of some Star Wars characters:"
          const list = []
          for (const character of result.data.allPeople.people) {
            list.push(character.name)
          }
          this.saveMessage(message, list)
        })
    },
  },
}
</script>
