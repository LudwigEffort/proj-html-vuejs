<template>
  <main>
    <div class="countdown_container">
      <div class="container container-lg text-center py-5">
        <div class="row row-cols-auto justify-content-center gx-5">
          <div class="col">
            <div class="countdown_card">
              <h4>3399</h4>
              <p>Days</p>
            </div>
          </div>
          <div class="col">
            <div class="countdown_card">
              <h4>17</h4>
              <p>Days</p>
            </div>
          </div>
          <div class="col">
            <div class="countdown_card">
              <h4>28</h4>
              <p>Days</p>
            </div>
          </div>
          <div class="col">
            <div class="countdown_card">
              <h4>17</h4>
              <p>Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.countdown_container {
  background-image: url(../assets/img/coutdown-bg1.jpg);
}
.countdown_card {
  background-color: black;
  color: white;
  border: 2px solid red;
  padding: 1rem 2rem;
}
</style>
