<template> 
  <v-app>
    <v-main>
      <div class="mainSection">
        <router-view/> 
      </div>
    </v-main>
  </v-app> 
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
#Content {
    display: flex;
    height: 100vh;
}
.mainSection{
  display: flex;
}
</style>
