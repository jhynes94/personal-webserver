<template>
  <div>
    
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-12" style="">
          <h1>Computer Engineer</h1>          
          <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-4"> 
              <router-link class="btn btn-default" :to="'/Engineering'">
                Enter Here
              </router-link>
          </div>
        </div>
      </div>
    </div>



    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-12" style="">
          <h1>Mountaineer</h1> 
              <router-link class="btn btn-default" :to="'/Mountaineering'">
                Enter Here
              </router-link>
        </div>
      </div>
    </div>


    
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  data() {
    return {
      producion: "No data",
    };
  },
  methods: {
  },
  created: function() {
    this.producion = process.env.NODE_ENV;
    if (this.producion === "development") {
      this.apiURL = "http://localhost:3000";
    }

  }
};
</script>

<style scoped>
</style>

