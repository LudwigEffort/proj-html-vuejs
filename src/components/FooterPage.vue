<template>
  <footer>
    <div class="footer_container">
      <div class="container container-lg p-5">
        <div class="row row-cols-4">
          <div class="col">
            <h6>About US</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur autem iste, quis corporis minima quibusdam?
            </p>
            <div class="social_icons">
              <font-awesome-icon
                icon="fa-brands fa-square-facebook"
                size="2xl"
                pull="left"
              />
              <font-awesome-icon
                icon="fa-brands fa-square-twitter"
                size="2xl"
                pull="left"
              />
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                size="2xl"
                pull="left"
              />
              <font-awesome-icon
                icon="fa-brands fa-square-google-plus"
                size="2xl"
                pull="left"
              />
              <font-awesome-icon
                icon="fa-brands fa-square-pinterest"
                size="2xl"
                pull="left"
              />
              <font-awesome-icon
                icon="fa-brands fa-square-reddit"
                size="2xl"
              />
            </div>
          </div>
          <div class="col">
            <h6>Recent news</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div class="col">
            <h6>Get your seat!</h6>
            <p>
              Book for your seat before it's too rate.
              <br> We provide variety of ticekt option.
            </p>
            <button class="btn btn-primary">
              Check out tickets!
            </button>
          </div>
          <div class="col">
            <h6>Gallery from last year</h6>
            <div class="row row-cols-4 g-2">
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-8523683-speaker-at-business-convention-and-present.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-8522811-speaker-at-business-conference-and-present (1).jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/card04-150x150.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-6745585-modern-creative-workspace-m-150x150.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/6426608875_186070f8ca_o-150x150.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/card01-150x150.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/13349065283_64d09b067c_o-150x150.jpg"
                  alt=""
                >
              </div>
              <div class="col">
                <img
                  class="img-fluid"
                  src="../assets/img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_container">
      <div class="container container-lg py-2">
        <div class="row row-cols-auto justify-content-between">
          <div class="col">
            Copyright GoodLayers, All Right Reserved
          </div>
          <div class="col">
            About Us | Accommodation | Call for paper | Contact Us
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>

<style lang="scss" scoped>
footer {
  color: white;
}
.footer_container {
  background-color: #212121;
}
.footer_container h6 {
  text-transform: uppercase;
  font-weight: bold;
}
.footer_container button {
  border-radius: 0;
  border-bottom: 2px solid #A72510;
}
.copyright_container {
  background-color: #161616;
}
</style>
