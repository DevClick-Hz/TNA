<template>
<div class="boxes">
<art :list="topStories"></art>
</div>
</template>
<script>
import art from '../components/art'
export default {
  name: 'Home',
  components: { art },
  data () {
    return {
      topStories: []
    }
  },
  mounted () {
    const key = 'nVo5aHYck2uqa8As5Sf0X9AMXRGtDCh1'
    fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${key}`, { method: 'get' })
      .then(data => {
        return data.json()
      }).then(response => {
        console.log(response)
        this.topStories = response.results
      })
  }
}
</script>
