<template>
  <div
    class="h-screen bg-green-900 text-white p-10 flex flex-col justify-between"
  >
    <header class="flex-none">
      <h1 class="text-3xl font-bold text-center">Yoda Chatbot</h1>
    </header>

    <main
      class="container mx-auto shadow-2xl max-w-3xl my-10 flex-grow overflow-hidden"
    >
      <ChatBox />
    </main>

    <footer class="text-center mx-auto flex-none">
      developed by 🙋‍♂️
      <a href="https://matx.dev" class="font-bold hover:underline">
        matheus teixeira
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
