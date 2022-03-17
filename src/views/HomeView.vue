<template>
  <div class="home-view">
    <transition>
      <div v-if="loading" key="loading">
        <loading-component />
      </div>
      <div class="content" v-else key="element">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" :to="{ name: 'cursos' }">
            Cursos
          </router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li
                v-for="(avaliacao, index) in api.avaliacoes"
                :key="avaliacao.nome + index"
              >
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/aprender.png" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import LoadingComponent from "../components/LoadingComponent.vue";

export default {
  components: { LoadingComponent },
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("home");
  },
};
</script>

<style scoped>
.btn-cursos {
  padding: 15px 30px;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: 10px;
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
