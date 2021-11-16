<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    console.log("wow");
    const citiesRef = this.$fire.firestore.collection("Reviews");
    const snapshot = await citiesRef.get();
    snapshot.forEach((doc) => {
      this.data.push(doc.data());
    });
  },
  methods: {},
};
</script>
