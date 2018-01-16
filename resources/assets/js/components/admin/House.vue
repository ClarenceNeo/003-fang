<template>
    <div class="container">
      <table class="table table-striped table-hover ">
        <thead>
        <tr>
          <th>id</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in houses">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>
            <button><router-link :to="{ name: 'house-form', params: { id: item.id }}">更新</router-link></button>
            <button @click="deleteItem(item.id)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/house/read').then(r => {
              this.houses = r.data.data;
            })
        },
        data(){
          return {
            houses: []
          }
        },
        methods: {
          deleteItem(id){
            console.log(id);
          }
        }
    }
</script>
