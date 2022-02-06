<template>
  <div
    class="bg-green-600 rounded border-2 border-gray-900 p-5 h-full flex flex-col"
  >
    <div class="flex-grow overflow-auto p-3">
      <MessageItem
        v-for="{ id, content, from } in messages"
        :key="id"
        :content="content"
        :from="from"
      />
      <div ref="bottom" class="mt-10"></div>
    </div>

    <form
      class="text-center flex items-center justify-center mt-5"
      @submit.prevent="sendMessage"
    >
      <input
        v-model="messageText"
        class="p-2 rounded mr-1 text-black flex-grow"
        @keypress.enter.prevent="sendMessage"
      />
      <button
        type="submit"
        class="ml-1 p-2 bg-gray-900 rounded hover:text-gray-800"
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
  methods: {
    sendMessage() {
      this.messages.push({
        id: this.nextId++,
        content: this.messageText,
        from: this.nextFrom,
      })
      this.messageText = ''
      this.nextFrom = this.nextFrom === 'user' ? 'yoda' : 'user'

      this.$refs.bottom.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
