<template>
  <div class="contato-view">
    <transition>
      <div v-if="loading" key="loading">
        <loading-component />
      </div>
      <div v-else key="element">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li>
            <b>E-mail:</b>
            {{ api.contato.email }}
          </li>
          <li>
            <b>Telefone:</b>
            {{ api.contato.telefone }}
          </li>
          <li>
            <b>Endereço:</b>
            {{ api.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "ContatoView",
  mixins: [fetchData],
  created() {
    this.fetchData("contato");
  },
};
</script>
