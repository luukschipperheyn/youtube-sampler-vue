<template lang="html">
  <div class="">
    <div
      v-for="(sample, index) in samples"
      :key="index"
      class="">
      <span
        v-for="n in beats"
        class="">{{n}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      beats: 8
    }
  },
  props: ['samples'],
  created () {
    console.log(this.samples)
  }
}
</script>

<style lang="css">
</style>
