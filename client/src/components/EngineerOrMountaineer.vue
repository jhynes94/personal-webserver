<template>
    <div>
        <div class="col-lg-12">
            <!-- SPACER ROW -->
            <div class="row">
            <div class="col-lg-12" style="margin-bottom: 25px">
                <h1>Hello Rich</h1>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EngineerOrMountaineer",
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
.btn-default {
  color: #fff;
  border: 2px solid;
  border-color: grey;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-bottom: 30px;
}
.btn-default:hover {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   -webkit-transform: scale3d(1.2, 1.2, 1.2);
    transform: scale3d(5);
}

.btn-default:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

