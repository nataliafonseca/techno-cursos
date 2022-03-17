<template>
  <div class="cursos-view">
    <transition>
      <div v-if="loading" key="loading">
        <loading-component />
      </div>
      <div class="content" v-else key="element">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("cursos");
  },
};
</script>

<style scoped>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
