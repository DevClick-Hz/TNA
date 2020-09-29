<template>
  <div id="head-nav">
    <div class="navbar">
      <div class="logo">
        <h1><i class="fas fa-globe fa-lg"></i>TNA</h1>
        <h3>Top NYT Articles</h3>
      </div>
    </div>
    <div :class="makeItStick()" id="menu">
      <router-link to="/">News</router-link> |
      <router-link to="/topArticles">Top Articles</router-link> |
      <router-link to="/topStories">Top Stories</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      active: false
    }
  },
  methods: {
    makeItStick () {
      if (!this.active) {
        return 'menu'
      } else {
        return 'isSticky'
      }
    }
  },
  mounted () {
    const navOffSet = document.querySelector('#menu').offsetTop
    window.document.onscroll = () => {
      if (window.scrollY > navOffSet) {
        this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$prime-color: rgb(0, 0, 0);
$sec-color: yellow;
$third-color: white;

//--------------------navbar--------------------->>
#head-nav {
  & .navbar {
    background-color: $prime-color;
    padding: 0 2rem 1rem 2rem;
  }
  & .logo {
    background-color: $sec-color;
    padding: 0.5rem;
    width: 200px;
  }
  & .menu {
    padding: 0.5rem 2rem;
    background-color: $prime-color;
    color: $third-color;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0.04rem 0;
    box-shadow: none;
    transition: 0.7s;
  }
  a {
    font-weight: bold;
    color: $third-color;
    text-decoration: none;
    &.router-link-exact-active {
      border-bottom: 1px solid $sec-color;
    }
  }
  h1,
  h2,
  h3 {
    margin: 0.25rem;
    padding: 0.25rem;
  }
  .isSticky{
     position: fixed;
     top: 0;
     width: 100%;
     color: $third-color;
     background-color: $prime-color;
     padding: 1rem 2rem;
     box-shadow: 0 3px 10px rgb(95, 95, 95);
     margin: 0.04rem 0;
     display: flex;
     flex-wrap: wrap;
     gap: 1.5rem;
     transition: 0.7s;
  }
  @media screen and (min-width: 320px) and (max-width: 480px){
    .logo{
      width: 170px;
    }
    .menu{
      justify-content: center;
    }
   .isSticky{
      gap: 0.5rem;
      padding: 8px 2px;
      justify-content: center;
    }
  }
}
</style>
