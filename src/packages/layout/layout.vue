<template>
  <div :class="prefixCls">
    <header
      :class="`${prefixCls}-header`"
      :style="{
        backgroundColor: headerBg,
        color: headerBg === '#fff' ? '#2d2f46' : '#fff'
      }"
      ref="header"
    >
      <div :style="{height: `${placeholderHeight}px`}"></div>
      <slot name="header"></slot>
    </header>
    <section
      :class="`${prefixCls}-content`"
      :style="{
        paddingTop: `${contentTop}px`,
        paddingBottom: `${contentBottom}px`,
        backgroundColor: contentBg,
      }"
      ref="section"
    >
      <slot/>
    </section>
    <footer
      :class="`${prefixCls}-footer`"
      :style="{
        backgroundColor: footerBg
      }"
      ref="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import { isIOS, isAppEnv, isIphoneX } from '../../utils'

export default {
  name: 'layout',

  data () {
    return {
      prefixClsFlex: 'noob-layout-flex',
      prefixClsAuto: 'noob-layout-auto',
      contentTop: 0,
      contentBottom: 0
    }
  },

  props: {
    headerBg: {
      type: String,
      default: '#fff'
    },
    contentBg: {
      type: String,
      default: '#f6f7f8'
    },
    footerBg: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    dpr: () => document.documentElement.dataset.dpr,

    placeholderHeight () {
      if (isIOS && isAppEnv) {
        return (isIphoneX ? 44 : 20) * this.dpr
      }
      return 0
    },
    prefixCls () {
      return isIOS ? this.prefixClsFlex : this.prefixClsAuto
    }
  },

  mounted () {
    this.$nextTick(() => {
      if (!isIOS) {
        this.contentTop = this.$refs.header.offsetHeight || 0
        this.contentBottom = this.$refs.footer.offsetHeight || 0
      }
    })
  }
}
</script>
