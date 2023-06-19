<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="address" class="form-label text-white-50">Email address</label>
                <input type="email" name="email" v-model="email" class="form-control" id="address"
                    aria-describedby="emailHelp">
                <div id="address" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="body" class="form-label text-white-50">Title</label>
                <input type="text" name="body" v-model="body" class="form-control" id="body">
            </div>
            <div class="mb-3">
                <label class="form-check-label text-white-50" for="exampleCheck1">Add text</label>
                <textarea type="text" class="form-check-input " id="exampleCheck1"></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    name: 'ContactMe',

    data() {
        return {
            address: "",
            name: "",
            body: "",
        }
    },
    methods: {
        sendForm() {
            const data = {
                address: this.address,
                name: this.name,
                body: this.body
            };
            axios.post(`${store.apiUrl}/contacts`, data).then((res) => {
                console.log(res.data);
            });
        }
    }

}
</script>

<style lang="scss" scoped></style>