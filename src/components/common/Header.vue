<template>
  <div class="topHeader">
    <v-btn @click="logout">
      <v-icon icon="mdi-logout" />
    </v-btn>
  </div>
</template>
<script> 
export default {
  name: "HeaderVue",
  methods: {
    logout(){
        const response = this.$store.dispatch('logout')
        response.then(() => { 
          // Redirect to the home page or any desired route
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
    }
  },
};
</script>
<style>
.rightBox {
  width: calc(100% - 15%);
  height: 100%;
  overflow: auto;
}
.rightBox .topHeader {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-bottom: 2px solid #00000011;
  padding: 10px;
  gap: 15px;
}
button {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  color: #fff;
  background-color: rgb(53 56 80);
  border: 2px solid transparent;
  font-size: 18px;
  transition: 0.4s all;
}
</style>
