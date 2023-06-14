<template>
    <div>
        <h1>Project list</h1>

        <div>
            <div class="container border border-2">
                <div class="row">
                    <div class="col d-flex justify-content-between">

                        <div class="card" v-for="project in projects">

                            <img :src="project.image" class="card-img-top" :alt="project.name">

                            <div class="card-body">
                                <h5 class="card-title">{{ project.name }}</h5>
                                <p class="card-text">{{ project.description }}</p>
                                <!-- <a href="#" class="btn btn-primary">info</a> -->
                                <p>
                                    <router-link :to="{ name: 'singleproject', params: { id: project.id } }"
                                        class="nav-link btn btn-primary">info</router-link>
                                </p>

                            </div>

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
    name: 'ProjectsList',

    data() {
        return {
            projects: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api/',
            endPointProjects: 'projects',
        }

    },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.endPointProjects/*, { params: { page: projectsApiPage } }*/).then((res) => {
                this.projects = res.data.results.data;
                console.log('projects : ', this.projects);
                //console.log(res.data.results.data);
            })
        }
    },

    mounted() {
        this.getProjects();
    }
}
</script>

<style lang="scss" scoped></style>