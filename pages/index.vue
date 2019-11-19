<template>
  <!--<header-wrapper></header-wrapper>-->
  <div class="main-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <cards-component v-for="i in 6" :key="i"></cards-component>
          </div>
        </div>
        <div class="col-md-2">
          <div class="row">
            <div class="col-12" v-for="i in 3" :key="i">
              <div class="promo">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<section class="container">-->
    <!--<div>-->
      <!--<app-logo/>-->
      <!--<h1 class="title">-->
        <!--ibec_systems-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->
    <!--</div>-->
  <!--</section>-->
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CardsComponent from '~/components/CardsComponent.vue'

export default {
  components: {
    AppLogo,
    CardsComponent
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

