<template>
 <div id="nav">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
         <div class="navbar-header">
            <a class="navbar-brand">Nomsly Manager v0.1</a>
            <router-link class="navbar-brand" to="/"><a>View Default Account</a></router-link>
            <router-link class="navbar-brand" to="/manager"><a>Manager</a></router-link>
         </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nomslyNav"
};
</script>