<template>
  <div class="wrapper">
    <div id="loader"></div>
    <div class="container">
      <div class="cards">
        <div class="card" v-for="(item, index) in list" :key="index">
          <div class="card-text">
            <h3>{{ item.title }}</h3>
            <div class="details">
              <h5>{{ item.byline }}</h5>
              <h5>Source: {{ item.source }}</h5>
              <h5>Updated: {{ item.updated }}</h5>
              <a :href="item.url" target="_blank">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import foot from '../components/foot'
export default {
  name: 'art',
  props: {
    list: Array
  },
  components: { foot },
  mounted () {
    setTimeout(showPage, 1200)

    function showPage () {
      document.getElementById('loader').style.display = 'none'
      document.querySelector('.container').style.display = 'block'
    }
  }
}
</script>
<style lang="scss" scoped>
$prime-color: rgb(0, 0, 0);
$sec-color: yellow;
$third-color: white;
.container {
  display: none;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  padding: 2rem;
  justify-content: center;
  gap: 3rem;
  .card {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    font-size: 0.9rem;
    img {
      height: 127px;
      width: 190px;
    }
    .card-text {
      padding: 0.5rem;
      margin: 0;
      h3,
      h5,
      p,
      a {
        margin: 0.7rem;
      }
    }
  }
}
#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #e9e9e9;
  border-radius: 50%;
  border-top: 16px solid yellow;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s;
}

@-webkit-keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

//---------------------------------Media section---------------------------------------->
@media screen and (min-width: 320px) and (max-width: 480px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
