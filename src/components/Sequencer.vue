<template lang="html">
  <div class="">
    <div class="">
      <button @click="play">play</button>
      <button @click="pause">pause</button>
    </div>
    <div
      v-for="(sample, index) in samples"
      :key="index"
      class="">
      <span
        v-for="n in numberOfBeats"
        v-bind:class="beatClass(n-1, index)"
        @click="onBeatClicked(n-1, index)">{{n}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bpm: 120,
      numberOfBeats: 16,
      playhead: {
        position: 0
      },
      beats: []
    }
  },
  props: ['samples'],
  created () {
    this.samples.forEach((sample, index) => {
      console.log(sample)
      this.beats.push(new Array(this.numberOfBeats).fill(false))
    })
  },
  methods: {
    play () {
      this.pause()
      this.startPlayTask()
    },
    pause () {
      if (this.playTask) {
        window.clearInterval(this.playTask)
      }
    },
    startPlayTask () {
      this.playTask =
          window.setInterval(this.playNextBeat.bind(this), this.beatInterval)
    },
    playNextBeat () {
      this.incrementPlayheadPosition()
      this.beats.forEach((beats, sampleIndex) => {
        if (beats[this.playhead.position]) {
          this.$bus.$emit('play-sample', sampleIndex)
        }
      })
    },
    incrementPlayheadPosition () {
      if (++this.playhead.position >= this.numberOfBeats) {
        this.playhead.position = 0
      }
    },
    beatClass (n, sampleIndex) {
      return {
        playing: this.playhead.position === n,
        active: this.beatIsActive(this.beats, n, sampleIndex),
        beat: true
      }
    },
    beatIsActive (beats, n, sampleIndex) {
      if (!beats.length) return false
      return beats[sampleIndex][n]
    },
    onBeatClicked (n, sampleIndex) {
      if (!this.beats.length) return false
      this.beats[sampleIndex][n] = !this.beats[sampleIndex][n]
    }
  },
  computed: {
    beatInterval () {
      return 60 / this.bpm * 1000 / 4
    }
  },
  watch: {
    samples (a, b) {
      console.log(a, b)
    }
  }
}
</script>

<style lang="css" scoped>
  .beat {
    border: 1px solid black;
    padding: 8px;
    display: inline-block;
    cursor: pointer;
  }
  .beat.active {
    background: grey;
    color: white;
  }
  .beat.playing {
    background: black;
    color: white;
  }
</style>
