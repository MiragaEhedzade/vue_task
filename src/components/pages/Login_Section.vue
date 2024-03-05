<template>

<div class="login_container">
  <div class="box"> 
    <div class="login-box">
        <div class="login-box-header">
        <div class="login-box-body"> 
          <p class="login-title">Sistemə daxili istifadəçilər tərəfindən giriş</p>
          <input type="text" v-model="email" placeholder="Enter email">
          <input type="password" v-model="password" placeholder="Enter password">
          <input class="buttonEnter" type="submit" @click="login" id="btnOK" name="btnOK" value="Daxil ol">
          <!-- <button @click="login">Login</button> -->
        </div>  
  </div>
  </div>
</div>
</div>


</template>

<script>
//import axios from 'axios'
export default{
    name:'Login_Section',
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods: { 
      async login() { 
        await this.$store.dispatch('loadUsers');
        // Call authentication action from Vuex store
        const response = this.$store.dispatch('login', { username: this.email, password: this.password })
        response.then(() => { 
          // Redirect to the home page or any desired route
          this.$router.push('/home');
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
      },
  }
}
</script>
<style>

.login-box{
    width: 532px;
    margin: auto;
    -webkit-box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    -moz-box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    border-collapse: collapse;
    border-radius: 10px!important;
    background-color: #fff;
    /* overflow: hidden; */
    text-align: center;
}

.login-box-header{
    background-color: rgb(53 56 80);
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.login-box-footer{
    font-size: 13px;
    color: #0094d9;
    letter-spacing: 1.5px;
    background: white;
    padding: 7px 10px 0px;
    vertical-align: bottom;
    display: inline-block;
    font-weight: bold;
}

.login-box-body{
    padding: 20px 33px;
}

.login-title{
    font-size: 15px;
    margin: 20px 0 40px;
    color: rgb(53 56 80);
}


#login_page .header {
    text-align: center;
    background-color: #fff!important;
    -webkit-box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.14);
    box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.14);
    height: 80px;
    box-sizing: border-box;
    padding: 13px;
}


.login-footer{
    height: 20px;
    background: transparent;
    text-align: right;
}

.login_container {
    height: calc(65vh -  124px);
    height: -moz-calc(65vh -  122px);
    height: -webkit-calc(65vh -  122px);
    margin: 7px;
    display: table;
    width: calc(100% -  14px);
    width: -webkit-calc(100% -  14px);
    width: -moz-calc(100% -  14px);
}


.login_container input{
    height: 32px;
    border-width: 0 0 1px!important;
    text-align: left;
    border-radius: 0!important;
    width: calc(100% - 66px);
    font-size: 14px!important;
    box-sizing: border-box;
    margin: 25px 33px;
    color: #7E7E7E;
    padding-left: 5px;
}

input.buttonEnter {
    background-clip: padding-box !important;
    background-color: rgb(53 56 80)!important;
    border-radius: 5px!important;
    border-width: 0px!important;
    color: #fff!important;
    height: 50px;
    width: 143px!important;
    margin: 20px 0 5px !important;
    text-align: center;
    cursor: pointer;
}
.container {
    height: calc(100vh - 78px);
    height: -webkit-calc(100vh - 78px);
    height: -moz-calc(100vh - 78px);
    margin: 0;
}
.box {
    display: table-cell;
    vertical-align: middle;
}




 
    

    /* .login-box {
    width: 532px;
    margin: auto;
    -webkit-box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    -moz-box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    box-shadow: 0px 2px 22px 0px rgba(152,152,152,0.5);
    border-collapse: collapse;
    border-radius: 10px!important;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
} */
/* div{
  display: block;
} */
/* .resgistr input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.resgistr button{
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
} */

</style>