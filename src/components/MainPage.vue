<template>
  <main>
    <!-- First part (countdown) -->
    <div class="countdown_container">
      <div class="container container-lg text-center py-5">
        <div class="row row-cols-auto justify-content-center gx-3 countdown">
          <div class="col">
            <div
              class="countdown_card"
              style="opacity: 80%;"
            >
              <h3>3399</h3>
              <p>Days</p>
            </div>
          </div>
          <div class="col">
            <div
              class="countdown_card"
              style="opacity: 70%;"
            >
              <h3>17</h3>
              <p>Hours</p>
            </div>
          </div>
          <div class="col">
            <div
              class="countdown_card"
              style="opacity: 60%;"
            >
              <h3>28</h3>
              <p>Mins</p>
            </div>
          </div>
          <div class="col">
            <div
              class="countdown_card"
              style="opacity: 50%;"
            >
              <h3>17</h3>
              <p>Secs</p>
            </div>
          </div>
        </div>
        <!-- Form by boolflix -->
        <div class="row row-cols-auto justify-content-center email_form">
          <div class="col col-12">
            <h5>Subscibe for updates</h5>
          </div>
          <div class="col">
            <form
              class="d-flex"
              role="search"
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Please fill your email"
                aria-label="Search"
              >
              <button class="btn btn-primary">
                subscribe
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
            <div class="input-group">
              <label
                htmlFor="email"
              >Ok</label>
              <input
                id="email"
                name="email"
                type="text"
                class="form-control"
                placeholder="Please fill your email"
              >
            </div>
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
    <!-- Second part (speakers) -->
    <div class="speakers_container">
      <div class="container container-lg text-center py-5">
        <div class="row row-cols-auto justify-content-between speakers_title_container">
          <div class="col">
            <h2>Speakers</h2>
          </div>
          <div class="col">
            <button class="btn btn-primary">
              &lt;
            </button><button class="btn btn-primary">
              &gt;
            </button>
          </div>
        </div>
        <div class="row row-cols-4">
          <div class="col">
            <div class="speaker_card">
              <img
                class="img-fluid speaker_img"
                src="../assets/img/speaker-6.jpg"
                alt=""
              >
              <h4>Patrick Spencer</h4>
              <p>S&P Analyzer</p>
              <!-- <div class="img_hover">
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
              </div> -->
            </div>
          </div>
          <div class="col">
            <div class="speaker_card">
              <img
                class="img-fluid"
                src="../assets/img/speaker-5.jpg"
                alt=""
              >
              <h4>Janet Jones</h4>
              <p>Newyork Post's GM</p>
            </div>
          </div>
          <div class="col">
            <div class="speaker_card">
              <img
                class="img-fluid"
                src="../assets/img/speaker-4.jpg"
                alt=""
              >
              <h4>Michael Dover</h4>
              <p>Starbuck's CEO</p>
            </div>
          </div>
          <div class="col">
            <div class="speaker_card">
              <img
                class="img-fluid"
                src="../assets/img/speaker-3.jpg"
                alt=""
              >
              <h4>Angelina Holy</h4>
              <p>Maxii's Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Third part (program) -->
    <div class="program_container">
      <div class="container container-lg py-5">
        <!-- Title -->
        <div class="text-center program_title">
          <div class="row align-items-center">
            <div class="col-3 text-start">
              <h1>Program</h1>
            </div>
            <div class="col-6 text-start">
              <p>
                This conference run throught all 4 day from 23 - 26 May 2016.
                <br>Whe also provide free lunch and coffee break in each day.
              </p>
            </div>
            <div class="col-3 text-end">
              <a
                href="#"
                class="link-primary"
              >View Full Program</a>
            </div>
          </div>
        </div>
        <!-- Table -->
        <div class="program_table">
          <div class="program_bar">
            <div class="row text-start">
              <div class="col-2 program_day">
                <div>
                  <h5>Day 1</h5>
                  <p>22 May 2016</p>
                </div>
              </div>
              <div class="col-2 border-start border-dark program_day">
                <div>
                  <h5>Day 2</h5>
                  <p>23 May 2016</p>
                </div>
              </div>
              <div class="col-2 border-start border-dark program_day">
                <div>
                  <h5>Day 3</h5>
                  <p>24 May 2016</p>
                </div>
              </div>
              <div class="col-2 border-start border-dark program_day">
                <div>
                  <h5>Day 4</h5>
                  <p>25 May 2016</p>
                </div>
              </div>
              <div class="col-2 border-start border-end border-dark program_day">
                <div>
                  <h5>Day 5</h5>
                  <p>26 May 2016</p>
                </div>
              </div>
              <div class="col-2 border-start border-end border-dark program_day" />
            </div>
          </div>
          <div class="program_content">
            <div class="row p-5">
              <div class="col-3">
                <ul>
                  <li><font-awesome-icon icon="fa-regular fa-clock" /><p>09:00 - 10:30</p></li>
                  <li><font-awesome-icon icon="fa-solid fa-location-arrow" /><p>London</p></li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-user" />
                    <a
                      href="#"
                      class="link-primary"
                    >View Full Program</a>
                  </li>
                </ul>
              </div>
              <div class="col-9">
                <div>
                  <h2>Welcoming and introduction</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore mollitia nemo debitis laboriosam facere voluptas.
                    Voluptate cupiditate eos est vitae facilis culpa illum ipsam sint!
                  </p>
                  <img
                    class="img-fluid"
                    src="../assets/img/speaker-8-150x150.jpg"
                    alt=""
                    style="width: 50px"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fourth part (map) -->
    <div class="map_container" />
    <!-- Fifth part (location) -->
    <div class="location_container">
      <div class="container container-lg text-center p-5">
        <div class="row row-cols-auto justify-content-center">
          <div class="col-12">
            <h1>Location</h1>
            <h2>GD Building, Grand Conferece Room</h2>
            <h6>11 GD Building, River Mail, new yourk, USA 8879</h6>
            <p>Check For Accommodatiosn Here</p>
          </div>
          <div class="col">
            <div class="contacts">
              <span><font-awesome-icon icon="fa-solid fa-phone" /><p>+1-112-222-3344</p></span>
              <span><font-awesome-icon icon="fa-solid fa-envelope" /><p>contact@thekeynotetheme.com</p></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sixth part (recent news) -->
    <div class="container container-lg text-center p-5 recent_news_container">
      <div class="row row-cols-auto align-items-center justify-content-between recent_news_title">
        <div class="col">
          <h3>Recent News</h3>
        </div>
        <div class="col">
          <a
            href="#"
            class="link-primary"
          >Read All News</a>
        </div>
      </div>
      <div class="row row-cols-3">
        <div class="col text-start">
          <img
            class="img-fluid"
            src="../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg"
            alt=""
          >
          <p>03 Dec 2013 / 0 Comments</p>
          <h4>Sedial Eiusmod Tempor</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Magni quisquam molestias maxime dolore dolorem voluptatem!
          </p>
          <a
            href="#"
            class="link-primary"
          >Read More</a>
        </div>
        <div class="col text-start">
          <img
            class="img-fluid"
            src="../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t.jpg"
            alt=""
          >
          <p>03 Dec 2013 / 2 Comments</p>
          <h4>Donec Luctus Imperdiet</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Magni quisquam molestias maxime dolore dolorem voluptatem!
          </p>
          <a
            href="#"
            class="link-primary"
          >Read More</a>
        </div>
        <div class="col text-start">
          <img
            class="img-fluid"
            src="../assets/img/photodune-8522811-speaker-at-business-conference-and-present.jpg"
            alt=""
          >
          <p>03 Dec 2013 / 2 Comments</p>
          <h4>Magna pars studiorum</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Magni quisquam molestias maxime dolore dolorem voluptatem!
          </p>
          <a
            href="#"
            class="link-primary"
          >Read More</a>
        </div>
      </div>
    </div>
    <!-- Seventh part (tickets) -->
    <div class="tickets_container">
      <div class="container container-lg text-center p-5">
        <h1>Tickets</h1>
        <div class="row row-cols-3 justify-content-center">
          <!-- First card -->
          <div class="col">
            <div class="card_container">
              <div class="card_header px-5 py-3">
                <h4>One Day Pass</h4>
                <h5>Free</h5>
              </div>
              <div class="card_text px-5 py-3">
                <ul>
                  <li>One Day Access</li>
                  <li>Coffee Break</li>
                  <li>Lunch (International Buffet)</li>
                  <li>Document Sheets</li>
                  <li>50$ Voucher For Next Event</li>
                </ul>
              </div>
              <div class="card_button px-5 py-3">
                <h5>Book Now</h5>
              </div>
            </div>
          </div>
          <!-- Second card -->
          <div class="col">
            <div class="card_container">
              <div class="card_header px-5 py-3">
                <h4>Four Day Pass</h4>
                <h5>750.00 $</h5>
              </div>
              <div class="card_text px-5 py-3">
                <ul>
                  <li>One Day Access</li>
                  <li>Coffee Break</li>
                  <li>Lunch (International Buffet)</li>
                  <li>Document Sheets</li>
                  <li>50$ Voucher For Next Event</li>
                </ul>
              </div>
              <div class="card_button px-5 py-3">
                <h5>Book Now</h5>
              </div>
            </div>
          </div>
          <!-- Third card -->
          <div class="col">
            <div class="card_container">
              <div class="card_header px-5 py-3">
                <h4>Two Day Pass</h4>
                <h5>580.00 $</h5>
              </div>
              <div class="card_text px-5 py-3">
                <ul>
                  <li>One Day Access</li>
                  <li>Coffee Break</li>
                  <li>Lunch (International Buffet)</li>
                  <li>Document Sheets</li>
                  <li>50$ Voucher For Next Event</li>
                </ul>
              </div>
              <div class="card_button px-5 py-3">
                <h5>Book Now</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Eighth part (presentation) -->
    <div class="presentation_container">
      <div class="container container-lg p-4">
        <div class="row row-cols-auto">
          <div class="col-7 p-3">
            <div>
              <h2>Presentation</h2>
              <img
                class="img-fluid py-3"
                src="../assets/img/461365506_640.jpg"
                alt=""
              >
            </div>
          </div>
          <div class="col-5 p-3">
            <h2>Twitter feed</h2>
            <div class="presentation_text py-3">
              <ul>
                <li>
                  Stand out and be vibrant with some of the best bright and bold tempaltes on
                  <a
                    href="#"
                    class="link-primary"
                  >@Envato</a>
                  Elements And add a splash of c...
                  <a
                    href="#"
                    class="link-primary"
                  >https://t.co/jFrsnEJK7</a>.
                  <br> <span>3 days ago.</span>
                </li>
                <li>
                  Do you need to deliver the perfect presentation or creative pitch?
                  Sure, your ideas and plan need to be on-oint, b...
                  <a
                    href="#"
                    class="link-primary"
                  >https://t.co/nCmvsJVDpW</a>.
                  <br> <span>9 days ago.</span>
                </li>
                <li>
                  Out yourself a pice of the BFCM sales pie with a solid marketin plan.
                  Here are 5 ways to optimize your content fo...
                  <a
                    href="#"
                    class="link-primary"
                  >https://t.co/UZfKHshEOT</a>.
                  <br> <span>11 days ago.</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col" />
        </div>
      </div>
    </div>
    <!-- Nineth part (sponsors) -->
    <div class="sponsors_container">
      <div class="container container-lg text-center p-5">
        <h1>Sponsors</h1>
        <p>
          Maecenas faucibus mollis interdum. Nullam id dolor
          <br> id nibh ultricies vehicula ut id elit.
        </p>
        <div class="row row-cols-6">
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-1.jpg"
              alt=""
            >
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-2.jpg"
              alt=""
            >
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-3.jpg"
              alt=""
            >
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-4.jpg"
              alt=""
            >
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-5.jpg"
              alt=""
            >
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src="../assets/img/banner-6.jpg"
              alt=""
            >
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
  text-transform: uppercase;
}
.countdown_card h3 {
  font-weight: bold;
}
.countdown {
  margin-bottom: 1.5rem;
}
.email_form h5 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.email_form input {
  border-radius: 0;
}
.email_form button {
  border-radius: 0;
  border-bottom: 3px solid #A72510;
}
.speakers_container {
  background-color: #F3F3F3;
}
.speakers_container h2 {
  text-transform: uppercase;
  font-weight: bold;
}
.speakers_container button {
  margin-left: 5px;
}
.speakers_title_container {
  margin-bottom: 1.5rem;
}
.speaker_img {
  position: relative;
}
.img_hover {
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 20;
}
.speakers_container .speaker_img:hover {
  cursor: pointer;
  filter: blur(2px);
}
.speaker_card img {
  border-radius: 5px;
  margin-bottom: 1rem;
}
.speaker_card h4 {
  text-transform: uppercase;
  font-weight: bold;
}
.speaker_card p {
  font-style: italic;
}
.program_title {
  margin-bottom: 1.5rem;
}
.program_title p {
  font-size: 14px;
}
.program_title a {
  text-decoration: none;
  font-style: italic;
}
.program_day  {
  background-color: #F62B0A;
  color: white;
}
.program_day {
  padding: 1rem 1.15rem;
}
.program_day:hover {
  background-color: #A72510;
  cursor: pointer;
}
.program_content .row {
  background-color: #F3F3F3;
}
.program_content ul {
  list-style: none;
  text-transform: uppercase;
}
.program_content ul p {
  display: inline;
  margin-left: 10px;
}
.program_content ul a {
  text-decoration: none;
  display: inline;
  margin-left: 10px;
}
.program_content h2 {
  text-transform: uppercase;
}
.map_container {
  height: 500px;
  background-image: url(../assets/img/maps_screenshot.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.location_container {
  color: white;
  background-image: url(../assets/img/location-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.location_container h1 {
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}
.location_container h2 {
  font-weight: bold;
  font-size: 2rem;
}
.location_container h6 {
  margin-bottom: 1.5rem;
}
.location_container h6:before {
  content: "\f124";
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -2.3em;
  width: 2.3em;
  color: white;
}
.location_container p {
  color: #F62B0A;
  margin-bottom: 2.5rem;
}
.contacts {
  max-width: fit-content;
  border-top: 2px solid white;
}
.contacts span {
  margin: 0 1rem;
}
.contacts p {
  color: white;
  display: inline;
  margin-left: 10px;
}
.recent_news_title {
  margin-bottom: 1.5rem;
}
.recent_news_title h3 {
  text-transform: uppercase;
  font-weight: bold;
}
.recent_news_container a {
  text-decoration: none;
  font-style: italic;
}
.recent_news_container h4 {
  text-transform: uppercase;
  font-weight: bold;
}
.tickets_container {
  background-image: url(../assets/img/ticket-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tickets_container h1 {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.card_container {
  background-color: white;
}
.card_header {
  background-color: lightgrey;
}
.card_header h4 {
  text-transform: uppercase;
  font-weight: bold;
}
.card_header h5 {
  text-transform: uppercase;
  font-weight: bold;
  color: #F62B0A;
}
.card_button {
  background-color: #F62B0A;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}
.card_button h5 {
  font-weight: bold;
}
.card_text ul {
  list-style: none;
}
.presentation_container h2 {
  text-transform: uppercase;
  font-weight: bold;
}
.presentation_text ul {
  list-style: none;
}
.presentation_text li {
  margin-bottom: 1.5rem;
}
.presentation_text li:before {
  content: "\f099";
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
  color: #47BDEE;
  font-size: 1.5rem;
}
.presentation_text li span {
  font-style: italic;
}
.sponsors_container {
  background-color: #F3F3F3;
}
.sponsors_container h1 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;
}
.sponsors_container p {
  margin-bottom: 1.5rem;
}
</style>
