<template lang="html">
  <div class="">
    <input type="text" name="" value=""
    @keyup="onInput">
    <div class="results-container">
      <ul>
        <li v-for="result in results">
          {{result.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import search from 'youtube-search'
export default {
  data () {
    return {
      results: []
    }
  },
  methods: {
    onInput (e) {
      var opts = {
        maxResults: 10,
        key: 'AIzaSyDNiEUjhrdFkr8B6awa_ZxUwUswX2nGdK8',
        type: 'video'
      }
      search(e.target.value, opts, (err, results) => {
        if (err) return console.log(err)
        this.results = results
      })
    }
  }
}
</script>

<style lang="css">
</style>
