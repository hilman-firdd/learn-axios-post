<template>
    <div v-if="!commets.length">
        <div class="d-blok justify-content-center">
            <div class="alert alert-danger">
                <h4 class="text-danger">No Data!</h4>
            </div>
        </div>
    </div>
    <div class="container mt-5" v-else>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>user</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ details.userId }}</td>
                                <td>{{ details.id }}</td>
                                <td>{{ details.title }}</td>
                                <td>{{ details.body }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <table class="table table-bordered" :data="commets">
                        <thead>
                            <tr>
                                <td>user</td>
                                <td>id</td>
                                <td>title</td>
                                <td>body</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="commet in commets" :key="commet">
                                <td>{{ commet.id }}</td>
                                <td>{{ commet.name }}</td>
                                <td>{{ commet.email }}</td>
                                <td>{{ commet.body }}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: ["detail"],
    data() {
        return {
            isEmpty: true,
            details: [],
            commets: []
        }
    },
    methods: {
        getDetail() {
           axios.get(`https://jsonplaceholder.typicode.com/posts/${this.detail}`)
                .then((response) => {
                    this.details = response.data;
                })
        },
        getComments() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.detail}/comments`)
                .then((response) => {
                    this.commets = response.data;
                })
        }
    },
    created() {
        this.getDetail();
        this.getComments();
    }
} 
</script>