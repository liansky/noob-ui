<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
const prefixCls = 'noob-icon'

export default {
  name: 'icon',

  props: {
    type: String,
    size: [Number, String],
    color: String
  },

  computed: {
    classes () {
      return `${prefixCls} ${this.type}`
    },

    styles () {
      const style = {}

      if (this.size) {
        let remStr = typeof this.size === 'string' && this.size.indexOf('rem') > -1
        style['fontSize'] = remStr ? this.size : `${this.size}px`
      }

      if (this.color) {
        style.color = this.color
      }

      return style
    }
  }
}

</script>
