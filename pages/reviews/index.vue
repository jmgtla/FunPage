<template>
  <div>
    <p>layout: <span @click='normal = true'>normal</span> <span @click='normal = false'>simple</span></p>
    <div class="review">
      <nuxt-link to="/reviews/test" class="link">
        <div class="title">
          <div class="thumb" v-if='normal'>
            <img src="/astolfo.jpg" alt="" />
          </div>
          <h4>Newest Reviews</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum doslor sit amet.
          </p>
        </div>
      </nuxt-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      normal: true 
    };
  }
};
</script>

<style scoped>
.review {
  padding: 24px;
  border: 1px solid #eb99a14d;
  margin-top: 20px;
  transition: 0.3s;
}
.review:hover {
  border: 1px solid #eb99a1;
  transition: 0.3s;
}
.link {
  color: #fff !important;
}
.link:hover {
  border-bottom: none;
}
.review p {
  margin-bottom: 0;
}
.review h3,
h4 {
  margin-top: 0;
}
</style>
