<template>
  <div>
    <nav>
      <ul>
        <a
          style="text-decoration: none"
          href="http://www.url.com"
          target="_blank"
        >
          <h3>Fun Reviews</h3>
        </a>
      </ul>
      <ul>
        <li><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li><nuxt-link to="/reviews">Reviews</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/search">Search</nuxt-link>
        </li>
      </ul>
    </nav>
    <hr />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
}
nav h3 {
  padding: 0;
  margin: 0;
  font-size: 25px;
  text-transform: uppercase;
  color: #fff;
}
ul {
  display: flex;
  justify-content: right;
  padding: 0 !important;
  list-style: none;
}
nav ul {
  padding: 0;
  margin: 0;
}
li {
  margin-left: 20px;
}

.review {
  display: flex;
  flex-direction: column;
}
.header {
  height: 200px;
  background-color: #eb99a1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h1 {
  font-size: 50px;
  padding: 0;
  margin: 0;
  color: black;
}
.search input {
  width: 100%;
  padding: 10px;
}

@media (min-width: 1900px) {
  body {
    max-width: 950px !important;
  }
}

/* -----
SVG Icons - svgicons.sparkk.fr
----- */

.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>
