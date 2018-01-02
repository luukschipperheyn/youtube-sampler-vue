<template lang="html">
  <div class="sample-slot">
    <div class="">
      <youtube :video-id="videoId" ref="youtube" @playing="playing" width="300" height="300"></youtube>
    </div>
    <button @click="play">play</button>
    <input placeholder="youtube id" v-model="videoId">
    <youtube-search></youtube-search>
    <input type="number" step="0.1" v-model="startTime">
    <input type="number" v-model="sampleLength">
  </div>
</template>

<script>
import YoutubeSearch from './YoutubeSearch'
export default {
  data () {
    return {}
  },
  components: {
    'youtube-search': YoutubeSearch
  },
  props: ['videoId', 'startTime', 'sampleLength', 'keyboardKey'],
  methods: {
    play () {
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
        this.play()
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
