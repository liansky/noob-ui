<template>
  <layout headerBg="#fff">
    <nav-bar slot="header" :backBtnHide="true"/>

    <list>
      <cell label="Layout"></cell>
      <cell label="NavBar"></cell>
      <cell label="Icon"></cell>
      <cell label="Button"></cell>
      <cell label="Loading"></cell>
      <cell label="List"></cell>
      <cell label="Cell"></cell>
    </list>

    <list>
      <cell label="MessageBox"></cell>
      <cell label="Toast"></cell>
    </list>

  </layout>
</template>

<script>
  import Icon from "../../src/packages/icon/icon.vue";

  export default {
    components: {Icon},
    name: 'home',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
