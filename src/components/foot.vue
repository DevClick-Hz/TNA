<template>
    <div>
        <footer>
          <div class="logo">
           <h1><i class="fas fa-globe fa-md"></i>TNA</h1>
          </div>
          <h4>TNA 2020</h4>
          <div class="social">
              <i class="fab fa-youtube"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-f"></i>
              <i class="fas fa-rss"></i>
          </div>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
$prime-color: rgb(0, 0, 0);
$sec-color: yellow;
$third-color: white;
footer{
   background-color: $prime-color;
   margin: 0;
   padding: 1rem 2rem;
   display: flex;
   justify-content: space-around;
   align-items: center;
   color: $third-color;
   .logo{
       background-color: $sec-color;
       padding: 0.7rem 0.5rem;
       h1{
           margin: 0;
           color: $prime-color;
       }
   }
   .social{
       .fab{
           margin: 0 10px;
       }
   }
}
</style>
