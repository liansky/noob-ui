<template>
  <div
    :class="prefixCls"
    :style="{
      backgroundColor: bgColor,
      color: bgColor === '#fff' ? '#2d2f46' : '#fff'
    }"
  >
    <div :class="`${prefixCls}-left`" @click="navBack" v-if="!backBtnHide">
      <button><icon type="icon-left"></icon></button>
    </div>
    <div :class="`${prefixCls}-center`">
      <slot>{{title}}</slot>
    </div>
    <div :class="`${prefixCls}-right`" @click="rightBtnFnHandle">
      <button type="button">{{rightBtnText}}</button>
    </div>
  </div>
</template>

<script>

import Icon from '../icon/icon.vue'

export default {
  name: 'nav-bar',

  data () {
    return {
      prefixCls: 'noob-nav-bar'
    }
  },

  props: {
    bgColor: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default: document.title
    },
    rightBtnText: String,
    backBtnFn: Function,
    backBtnHide: {
      type: Boolean,
      default: false
    },
    borderShow: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Icon
  },

  methods: {
    navBack () {
      this.backBtnFn && this.backBtnFn()
      this.closeWebView()
    },
    closeWebView () {
      try {
        Navigation.popWindow()
      } catch (e) {
        window.history.go(-1)
      }
    },
    rightBtnFnHandle (evt) {
      this.$emit('rightBtnFn', evt)
    }
  }
}

</script>
