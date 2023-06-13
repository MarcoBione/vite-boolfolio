<template>
  <div>

    <div class="container border border-2">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    projects: [];
    apiBaseUrl: 'http://127.0.0.1:8000/api/';
    endPointProjects: 'projects';
  },

  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.endPointProjects).then((res) => {
        console.log(res);
      })
    }
  },

  mounted() {
    this.getProjects();
  }
}
</script>

<style lang="scss" scoped></style>