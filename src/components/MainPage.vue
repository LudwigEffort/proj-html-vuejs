<template>
  <main>
    <!-- First part -->
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
              <p>Hours</p>
            </div>
          </div>
          <div class="col">
            <div class="countdown_card">
              <h4>28</h4>
              <p>Mins</p>
            </div>
          </div>
          <div class="col">
            <div class="countdown_card">
              <h4>17</h4>
              <p>Secs</p>
            </div>
          </div>
        </div>
        <!-- Form by boolflix -->
        <div class="row row-cols-auto justify-content-center">
          <div class="col col-12">
            <h3>Subscibe for updates</h3>
          </div>
          <div class="col">
            <form
              class="d-flex"
              role="search"
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              >
              <button class="btn btn-primary">
                test
              </button>
            </form>
          </div>
        </div>
        <!-- Form by Bootsrap -->
        <!-- <form class="row row-cols-lg-auto g-5 align-items-center justify-content-center">
          <div class="col col-lg-12">
            <h3>Subscirbe for updates</h3>
          </div>
          <div class="col">
            <label
              for="email"
            >
              <div class="input-group">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  placeholder="Please fill your email"
                >
              </div>
            </label>
          </div>

          <div class="col">
            <button
              type="submit"
              class="btn btn-primary"
            >
              Subscribe
            </button>
          </div>
        </form> -->
      </div>
    </div>
    <!-- Second part -->
    <div class="speakers_container">
      <div class="container container-lg text-center py-5">
        <div class="row row-cols-auto">
          <div class="col">
            <h2>Speakers</h2>
          </div>
          <div class="col">
            <button class="btn btn-primary">
              Left
            </button><button class="btn btn-primary">
              Right
            </button>
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.countdown_card {
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 1rem 2rem;
}
</style>
