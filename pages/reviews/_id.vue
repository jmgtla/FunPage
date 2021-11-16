<template>
  <div>

    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, redirect }) {
    try {
      
    console.log(route)
    const page = await $content(route.params.id).fetch();
    return {
      page,
    };
    } catch (e) {
      redirect('/reviews')  
    }
  },
};
</script>

<style scoped>
h3 {
  margin-top: 0!important;
}
.rating {
  text-align: center;
  color: #eb99a1;
  font-size: 50px;
}
</style>
