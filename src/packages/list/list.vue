<template>
  <ul :class="prefixClass">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      prefixClass: 'noob-list'
    }
  }
}
</script>
