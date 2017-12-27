<template lang="html">
  <div class="">
    <sample-slot 
      v-for="(sample, i) in samples" 
      :key="i" 
      keyboardKey="sample.keyboardKey" 
      videoId="sample.videoId">
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
          videoId: 'NYWANrXNbMU'
        },
        {
          keyboardKey: 'w',
          videoId: 'aeujZtBvMFY'
        }
      ]
    }
  },
  components: {
    'sample-slot': SampleSlot,
    'sequencer': Sequencer
  },
  created () {
  }
}
</script>

<style lang="css">
</style>
