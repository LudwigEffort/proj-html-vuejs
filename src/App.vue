<template>
  <div>
    <HeaderPage />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import './assets/scss/my_colors.scss';
@import "~bootstrap/scss/bootstrap";
:root .btn-primary {
  --bs-btn-color: white;
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
