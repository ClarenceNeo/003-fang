<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">房源</div>
                    <div class="panel-body">
                      <div v-for="row in houses" :key="row.id" class="bs-callout bs-callout-danger">
                        <h4><router-link :to="{ name: 'house', params: { id: row.id }}">{{row.id}}</router-link></h4>
                        <p>{{ row.title }}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
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
