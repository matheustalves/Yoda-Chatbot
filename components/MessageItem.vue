<template>
  <div
    class="flex align-middle my-2 text-justify"
    :class="from === 'user' ? 'flex-row-reverse' : ''"
  >
    <img
      class="h-10 w-10"
      :alt="from + '-avatar'"
      :src="
        from === 'user'
          ? require('../static/user.svg')
          : require('../static/yoda.png')
      "
    />

    <div
      class="rounded p-3 text-sm mx-2"
      :class="from === 'user' ? 'bg-green-900' : 'bg-green-300 text-black'"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    from: {
      type: String,
      default: 'user',
    },
  },
}
</script>
