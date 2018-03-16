<template>
  <div>
    
    <div class="col-lg-12">
      <div class="row">
          <h3>Engineering</h3>
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

