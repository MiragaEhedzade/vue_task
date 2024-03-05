<template> 
    <appSideBar></appSideBar>
    <div class="rightBox">
        <appHeader></appHeader>
        <appTable :menu="text" :headers="headers" :url="url"></appTable>
    </div>
</template>
<script>
import Table from '../elements/Table_Section.vue'
import SideBar from '../common/SideBar.vue'  
import Header from '../common/Header.vue' 
export default{
    name:'Home_vue',
    methods:{
        logout(){
            this.$router.push('/login');
        }
    },
    components: {
        appTable: Table,
        appSideBar: SideBar,
        appHeader: Header  
    },
    data(){
        return {
            text: 'Users',
            headers: [
                {
                    title: 'ID',
                    align: 'start',
                    sortable: false,
                    key: 'id',
                },
                { title: 'E-mail', key: 'email', align: 'end' },
                { title: 'Password', key: 'password', align: 'end' }
            ],
            url: "http://localhost:3001/users"
        }
    }
}
</script>
<style>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    background-color: aqua;
    display: flex;
    align-items: center;
    z-index: 99;
    height: 50px;
}
.navigation a{
    position: relative;
    font-size: 1.1em;
    color: aliceblue;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
}
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
</style>