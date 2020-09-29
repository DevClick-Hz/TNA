<template>
  <div class="boxes">
    <art :list="topHeadLines" ></art>
  </div>
</template>

<script>
import art from '../components/art'
export default {
  name: 'Home',
  components: { art },
  data () {
    return {
      topHeadLines: []
    }
  },
  mounted () {
    const key = 'nVo5aHYck2uqa8As5Sf0X9AMXRGtDCh1'
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`, { method: 'get' })
      .then(data => {
        return data.json()
      }).then(response => {
        console.log(response.results)
        this.topHeadLines = response.results
      })
  }
}
</script>
