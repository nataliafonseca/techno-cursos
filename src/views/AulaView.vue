<template>
  <div class="aula-view">
    <transition>
      <div v-if="loading" key="loading">
        <loading-component />
      </div>
      <div v-else key="element">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "AulaView",
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchData(`aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`aula/${to.params.aula}`);
    next();
  },
};
</script>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
