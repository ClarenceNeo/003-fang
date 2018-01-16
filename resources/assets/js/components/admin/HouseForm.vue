<template>
    <div class="container">
        <div class="row">
            <h2>form</h2>
            <!-- <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>{{house.id}}</h4>
                    </div>
                    <div class="panel-body">
                      <div class="bs-callout bs-callout-danger">
                        <p>{{ house.title }}</p>
                      </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.post('/api/house/read', { id: this.$route.params.id } ).then(r => {
              this.house = r.data.data;
            })
        },
        data(){
          return {
            house: {}
          }
        }
    }
</script>
