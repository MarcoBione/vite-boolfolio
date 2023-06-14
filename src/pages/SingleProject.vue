<template>
    <div v-if="projects">
        <h1>{{ projects.name }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    name: 'SingleProject',

    data() {
        return {
            project: null,
            apiBaseUrl: 'http://127.0.0.1:8000/api/',

        }
    },

    methods: {
        getProject() {
            axios.get(`${this.apiBaseUrl}projects/${this.$route.params.id}` /*, { params: { page: projectsApiPage } }*/).then((res) => {
                this.projects = res.data.results.data;
                console.log('res: ', res);
                console.log('id:', this.$route.params.id);
            })
        }
    },

    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped></style>