<template>

<div class="card">
  <div class="card-body">
    <table class="table table-bordered" :data="data">
      <thead>
        <tr>
          <th>userID</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas" :key="data">
          <td>{{ data.userId }}</td>
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.body }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="detail(data.id)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HomeComponent',
  data() {
    return {
      datas: [],
    }
  },  
  methods: {
    detail(row) {
      this.$router.push({
        name: "detail",
        params:{detail:row}
      })
    },
    getItem() {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.datas = response.data;
          console.log(response);
      })
    }
  },
  created() {
    this.getItem();
  }
}
</script>