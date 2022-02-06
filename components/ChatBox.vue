<template>
  <div
    class="container bg-green-600 rounded border-2 border-gray-900 p-5 mt-10"
  >
    <div id="message-container">
      <MessageItem
        v-for="{ id, content, from } in messages"
        :key="id"
        :content="content"
        :from="from"
      />
    </div>
    <form
      class="text-center flex items-center justify-center mt-5"
      @submit="sendMessage"
    >
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
        { id: 1, content: 'hello', from: 'user' },
        { id: 2, content: 'hello', from: 'yoda' },
        { id: 3, content: 'hyd?', from: 'user' },
        {
          id: 4,
          content:
            'Fusce velit nunc, mollis eu enim et, vestibulum euismod nibh. Maecenas vulputate ligula massa, nec pellentesque enim vehicula ut. Integer ac mollis ipsum. Vestibulum ac nibh ac purus molestie luctus nec quis purus. Mauris nec erat lectus. Curabitur placerat, elit porttitor suscipit placerat, dui massa eleifend mauris, nec rutrum arcu neque et ipsum. Quisque efficitur feugiat metus pretium volutpat. Praesent nibh justo, maximus ut mollis in, sodales in ligula. Fusce molestie lectus in fringilla elementum. Etiam tellus magna, condimentum non ex eget, lobortis ultricies odio. Vestibulum ligula nisl, venenatis non mauris a, scelerisque gravida ex. Pellentesque nisi velit, euismod ac ligula nec, pharetra malesuada orci. Pellentesque consectetur mi quis velit efficitur commodo ac quis nisl. Integer ut felis eget turpis mattis scelerisque. Suspendisse porta sapien interdum enim molestie tincidunt. Nullam vel elit non ante egestas egestas. Integer cursus mi ac posuere accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eu commodo sapien, non posuere leo. Nullam quis diam at elit porttitor tempor. Cras a nunc in massa tincidunt commodo. Pellentesque quis urna ornare, aliquam diam laoreet, lobortis ex. Vivamus diam diam, iaculis consequat justo sed, pellentesque commodo mi. Suspendisse placerat accumsan erat sed semper. Aenean volutpat ac ipsum varius rutrum. Ut quis accumsan dui, nec dictum nunc. Nullam condimentum quam ac nisl mattis, ac bibendum ex aliquet.',
          from: 'yoda',
        },
      ],
    }
  },
}
</script>
