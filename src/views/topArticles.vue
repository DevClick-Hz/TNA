<template>
<div class="boxes">
   <art :list="topArticles"></art>
</div>
</template>
<script>
import art from '../components/art'
export default {
  name: 'topArticles',
  components: { art },
  data () {
    return {
      topArticles: []
    }
  },
  mounted () {
    const key = 'nVo5aHYck2uqa8As5Sf0X9AMXRGtDCh1'
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`, { method: 'get' })
      .then(data => {
        return data.json()
      }).then(response => {
        console.log(response)
        this.topArticles = response.results
      })
  }
}
</script>
