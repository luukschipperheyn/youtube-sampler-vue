<template lang="html">
  <div class="sample-slot">
    <div class="">
      <youtube :video-id="videoId" ref="youtube" @playing="playing" width="300" height="300"></youtube>
    </div>
    <button @click="playVideo">play</button>
    <input placeholder="youtube id" v-model="videoId">
    <input type="number" step="0.1" v-model="startTime">
    <input type="number" v-model="sampleLength">
  </div>
</template>

<script>
export default {
  data () {
    return {
      sampleLength: 1000,
      startTime: 0.0
    }
  },
  props: ['keyboardKey', 'videoId'],
  methods: {
    playVideo () {
      this.rewind()
      this.player.playVideo()
    },
    pauseVideo () {
      this.player.pauseVideo()
      this.pauseTask = null
    },
    playing () {
      this.setPauseTask()
    },
    setPauseTask () {
      if (this.pauseTask) {
        clearTimeout(this.pauseTask)
      }
      this.pauseTask = setTimeout(this.pauseVideo, this.sampleLength)
    },
    rewind () {
      this.player.seekTo(parseFloat(this.startTime))
    },
    keyPressed (key) {
      if (key === this.keyboardKey) {
        this.playVideo()
      }
    }
  },
  created () {
    document.addEventListener('keydown', (event) => {
      const key = event.key
      this.keyPressed(key)
    })
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  watch: {
    startTime: function (val) {
      this.player.seekTo(parseFloat(val))
    }
  }
}
</script>

<style lang="css" scoped>
  .sample-slot{
    margin-bottom: 24px;
    display: inline-block;
    width: 300px;
  }
</style>
