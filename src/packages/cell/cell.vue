<template>
  <li :class="prefixClass" @click.stop.prevent="clickHandle">
    <a :href="!link ? 'javascript:void(0)' : link" :class="feedback ? 'link' : 'un-feedback'">
      <div :class="prefixClass + '-box'">
        <label :class="prefixClass + '-label'">
          <slot name="icon"></slot>
          <span v-if="label">{{label}}</span>
        </label>

        <div :class="prefixClass + '-main'">
          <slot></slot>
        </div>

        <div :class="prefixClass + '-arrow'" v-if="rightIcon">
          <slot name="arrow">
            <icon type="icon-right"></icon>
          </slot>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import Icon from '../icon/icon.vue'
export default {
  name: '',
  data () {
    return {
      prefixClass: 'noob-cell'
    }
  },
  props: {
    label: String,
    link: String,
    rightIcon: {
      type: Boolean,
      default: true
    },
    feedback: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Icon
  },
  methods: {
    clickHandle (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
