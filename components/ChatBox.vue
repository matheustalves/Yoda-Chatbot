<template>
  <div
    class="bg-green-600 rounded-lg border-2 border-gray-900 p-5 h-full flex flex-col"
  >
    <div class="flex-grow overflow-auto p-3">
      <MessageItem
        v-for="{ id, content, from } in messages"
        :key="id"
        :content="content"
        :from="from"
      />
      <p v-if="$fetchState.pending" class="text-sm">Yoda is typing...</p>
      <div ref="bottom" class="mt-10 p-2"></div>
    </div>

    <form
      class="text-center flex items-center justify-center mt-5"
      @submit.prevent="$fetch"
    >
      <input
        v-model="messageText"
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
      messageText: '',
      nextId: 0,
      nextFrom: 'user',
      messages: [],
    }
  },
  async fetch() {
    if (this.messageText !== '') {
      this.saveMessage(this.messageText)

      await fetch('http://localhost/api/', {
        headers: {
          'Content-Type': 'application/json',
          userMessage: this.messageText,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          this.saveMessage(result)
          this.messageText = ''
        })
    }
  },
  methods: {
    saveMessage(message) {
      this.messages.push({
        id: this.nextId++,
        content: message,
        from: this.nextFrom,
      })
      this.nextFrom = this.nextFrom === 'user' ? 'yoda' : 'user'

      this.$refs.bottom.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
