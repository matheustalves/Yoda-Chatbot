<template>
  <div class="my-2">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
