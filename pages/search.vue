<template>
  <div>
    <div class="search">
      <h5>Search</h5>
      <input
        v-on:keyup.enter="search"
        type="text"
        v-model="searchValue"
        value=""
        name=""
        id=""
      />
      <div
        v-for="result in results"
        :key="result.id"
      >
        <h3>{{result.Review}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import MiniSearch from "minisearch";
export default {
  mounted() {},
  data() {
    return {
      searchValue: null,
      results: [],
    };
  },
  methods: {
    async search() {
      const citiesRef = this.$fire.firestore.collection("Reviews");
      const snapshot = await citiesRef.get();
      var docs = [];
      var index = 0;
      snapshot.forEach((doc) => {
        docs.push(doc.data());
        docs[index].id = index;
        index += 1;
      });

      let miniSearch = new MiniSearch({
        fields: ["Review"], // fields to index for full-text search
        storeFields: ["Review"], // fields to return with search results
      });

      // Index all documents
      miniSearch.addAll(docs);

      // Search with default options
      let results = miniSearch.search(this.searchValue);
      console.log(results);
      if (results) {
        this.results = results;
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped></style>
