<template>
<div class="sideBar">
    <div class="linkBox">
        <router-link to="/home" class="pageBtn" active-class="activePage" exact>Users</router-link>
        <router-link to="/about" class="pageBtn" active-class="activePage" exact>Products</router-link> 
    </div>
</div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default{
    name:'SideBar',
    components: {
        RouterLink, 
    }

}
</script>
<style scoped>
.sideBar{
    background-color: rgb(53 56 80);
    height: 100vh;
    overflow: hidden;
    width: 15%;
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 4px -1px 20px 0px #0000003d;
}
.sideBar .linkBox {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    margin-top: 2rem;
    width: 100%;
}

.sideBar .linkBox a {
    background-color: transparent;
    width: 100%;
    padding: 5px;
    font-size: 18px;
    color: #fff;
    border-bottom: 2px solid#fff;
    transition: 0.4s all;
    cursor: pointer;
}

 .sideBar .linkBox a:hover {
    background: #fff;
    color: rgb(53 56 80);
}

.activePage {
    background-color: #fff !important;
    color: rgb(53 56 80) !important;
    text-decoration: none !important;
    color: #337ab7;
    text-decoration: none;
    background-color: transparent;
}
</style>