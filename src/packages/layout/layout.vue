<template>
  <div :class="prefixCls">
    <header :class="`${prefixCls}-header`">
      <slot name="header">
        <div>头部</div>
      </slot>
    </header>
    <section :class="`${prefixCls}-content`">
      <slot></slot>
    </section>
    <footer :class="`${prefixCls}-footer`">
      <slot name="footer">底部</slot>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'layout',

  data () {
    return {
      prefixCls: 'noob-layout'
    }
  },

  props: {},

  computed: {},

  components: {},


  watch: {},

  beforeCreate () {
  },

  created () {
  },

  mounted () {

  },

  destroyed () {

  },

  methods: {}
}
</script>
