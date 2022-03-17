export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    fetchData(path) {
      this.api = null;
      this.loading = true;
      fetch(`http://localhost:3000/${path}`)
        .then(response => response.json())
        .then(json => {
          // o setTimeout é utilizado apenas para simular o tempo
          // de carregamento e visualizar o loading
          setTimeout(() => {
            this.api = json;
            this.loading = false;
          }, 1000);
        });
    },
  },
};
