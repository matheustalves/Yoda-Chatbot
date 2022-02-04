<template>
  <div class="min-h-screen bg-green-900 text-white p-10">
    <main class="container mx-auto max-w-xl">
      <h1 class="text-3xl font-bold text-center">Yoda Chatbot</h1>
      <ChatBox />
    </main>
    <footer class="mt-6 text-center mx-auto">
      <div>
        developed by 🙋‍♂️
        <a
          href="https://matx.dev"
          class="font-bold text-cyan-500 hover:text-cyan-200 hover:underline"
        >
          matheus teixeira
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
