<template lang="html">
  <div class="">
    <sample-slot 
      v-for="(sample, i) in samples" 
      :key="i"
      ref="sample-slots"
      :keyboardKey="sample.keyboardKey"
      :videoId="sample.videoId"
      :sampleLength="sample.sampleLength"
      :startTime="sample.startTime">
    </sample-slot>
    <sequencer
      :samples="samples">
    </sequencer>
  </div>
</template>

<script>
import SampleSlot from './SampleSlot'
import Sequencer from './Sequencer'
export default {
  data () {
    return {
      samples: [
        {
          keyboardKey: 'q',
          videoId: 'iG9sl2TS-ks',
          sampleLength: 320,
          startTime: 87
        },
        {
          keyboardKey: 'w',
          videoId: 'AklM3syOvsk',
          sampleLength: 349,
          startTime: 36.5
        },
        {
          keyboardKey: 'e',
          videoId: 'AklM3syOvsk',
          sampleLength: 349,
          startTime: 36.5
        },
        {
          keyboardKey: 'r',
          videoId: 'AklM3syOvsk',
          sampleLength: 349,
          startTime: 36.5
        }
      ]
    }
  },
  components: {
    'sample-slot': SampleSlot,
    'sequencer': Sequencer
  },
  created () {
    this.$bus.$on('play-sample', this.playSample.bind(this))
  },
  methods: {
    playSample (sampleIndex) {
      this.$refs['sample-slots'][sampleIndex].play()
    }
  }
}
</script>

<style lang="css">
</style>
