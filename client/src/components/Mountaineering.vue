<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h3>Mountaineering</h3>
        <hr>
        <h4>Items to be added to here</h4>
        <ul>
          <li>Pictures of mountains achieved</li>
          <li>Fitness blog</li>
          <li>Seven Summit goal</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Engineering",
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

