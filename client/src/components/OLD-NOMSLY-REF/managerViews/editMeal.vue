<template>
<div>
  <nomslyNav />
  <div class="container">

    <div class="row">
      <div v-if="currentMeal != null" class="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
        <h1><input style="text-align: center;" v-model="currentMeal.name" placeholder="Meal Name"></h1>
        <h2><textarea style="text-align: center;" v-model="currentMeal.description" placeholder="Description of meal"></textarea></h2>
        <h2><textarea style="text-align: center;" v-model="currentMeal.contents" placeholder="Contents of Meal (Seprated by commas)"></textarea></h2>
        <h3><input style="text-align: center;" v-model="currentMeal.imageLink" placeholder="Link to image"></h3>
        <a @click="updateMeal(currentMeal)" class="btn btn-primary">Update</a>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
        <hr>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import nomslyNav from "../nomslyNav.vue";
import LineChart2 from "../LineChart2.js";

export default {
  name: "editAccount",
  data() {
    return {
      apiURL: "",
      currentMeal: null,
      mealNumber: 0
    };
  },
  methods: {
    getMeal: function() {
      this.$http
        .get(this.apiURL + "/getMeal?mealId=" + this.mealNumber)
        .then(function(response) {
          console.log("Current Meal");
          console.log(response.body.meal);
          this.currentMeal = response.body.meal;
        });
    },
    updateMeal: function(inputMeal) {
      console.log(inputMeal.name);
      this.$http
        .post(this.apiURL + "/updateMeal", { meal: inputMeal })
        .then(function(response) {
          console.log(response);
          this.$router.push("/manager")
        });
    },
  },
  created: function() {
    this.producion = process.env.NODE_ENV;
    if (process.env.NODE_ENV === "development") {
      this.apiURL = "http://localhost:3000";
    }
    this.mealNumber = this.$route.params.mealNumber;

    this.getMeal();
  },
  components: {
    nomslyNav,
    LineChart2
  }
};
</script>
