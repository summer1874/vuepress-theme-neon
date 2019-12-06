<template>
  <div id="vuepress-theme-neon">
    <TheHeader />

    <TheMain />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader.vue'
import TheMain from '@theme/components/TheMain.vue'
import TheFooter from '@theme/components/TheFooter.vue'

export default {
  name: 'ThemeNeon',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
}
</script>

<style lang="stylus" src="@theme/styles/index.styl" />
