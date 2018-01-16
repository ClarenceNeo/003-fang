<template>
    <div class="container">
      <h2>User</h2>
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
          <td><button>更新</button><button>删除</button></td>
          <!-- <td><router-link :to="'house/'+item.id+'/profile'">点击</router-link></td> -->
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
        }
    }
</script>
