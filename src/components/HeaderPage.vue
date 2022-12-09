<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light navbar_container">
      <div class="container container-lg">
        <a
          class="navbar-brand"
          href="#"
        >The Keynote</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse justify-content-end"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Pages</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Program</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Tickets</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Speakers</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Papers</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Blog</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Shortcodes</a>
            </li>
          </ul>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
    </nav>
    <div class="title_header_container">
      <div class="container-lg text-center py-5">
        <h3>Conference on</h3>
        <h1>Social Networks</h1>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <p>23 - 26 May 2019</p>
          </li>
          <li class="nav-item">
            /
          </li>
          <li class="nav-item">
            <p>Sans Francisco</p>
          </li>
          <li class="nav-item">
            /
          </li>
          <li class="nav-item">
            <p>8 Speakers</p>
          </li>
        </ul>
        <button
          type="button"
          class="btn btn-primary"
        >
          Register Online
        </button>
      </div>
    </div>
    <div class="header_info_container">
      <div class="container-lg text-start py-5">
        <div class="row row-cols-3 justify-content-center">
          <div class="col">
            <h4>Who we are</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
              recusandae veniam fuga veritatis cumque magnam.
            </p>
            <a
              href="#"
              class="link-primary"
            >Learn More</a>
          </div>
          <div class="col">
            <h4>Who we do</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
              recusandae veniam fuga veritatis cumque magnam.
            </p>
            <a
              href="#"
              class="link-primary"
            >Learn More</a>
          </div>
          <div class="col">
            <h4>Why us?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
              recusandae veniam fuga veritatis cumque magnam.
            </p>
            <a
              href="#"
              class="link-primary"
            >Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss" scoped>
header {
  text-transform: uppercase;
}
.navbar-brand{
  font-size: 1.5rem;
  font-weight: bold;
}
.navbar_container .nav-item .nav-link:hover {
  color: #F62B0A;
}
.navbar_container .nav-item:hover {
  border-bottom: 3px solid #f62b0a;
}
.title_header_container{
  background-image: url(../assets/img/slider-1-bg.jpg);
  color: white;
}
.title_header_container h3 {
  font-size: 3rem;
}
.title_header_container h1 {
  font-weight: bold;
  font-size: 5rem;
}
.header_info_container p {
  text-transform: none;
}
.header_info_container a {
  text-decoration: none;
  text-transform: none;
  font-style: italic;
}
.header_info_container h4:before {
  content: "\f091";
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
  color: lightgrey;
  font-size: 1.5rem;
}
.header_info_container :nth-child(2) h4:before {
  content: "\f0e7";
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
  color: lightgrey;
  font-size: 1.5rem;
}
.header_info_container :nth-child(3) h4:before {
  content: "\3f";
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
  color: lightgrey;
  font-size: 1.5rem;
}
</style>
