<template>
  <div
    class="container bg-green-600 rounded border-2 border-gray-900 p-5 mt-10"
  >
    <div id="message-container">
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :content="message.content"
      />
    </div>
    <form action="" class="text-center flex items-center justify-center mt-5">
      <input
        type="text"
        class="p-2 rounded mr-1 text-black flex-grow"
        @:keyup.enter="submit"
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
      messages: [
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello' },
        { id: 3, content: 'hyd?' },
        { id: 4, content: 'fine.' },
      ],
    }
  },
}
</script>
