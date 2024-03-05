<!-- App.vue -->
<template>
  <div class="contentBox">
    <div class="panel panel-default table-container">
       <h1>Hi :{{ menu }}</h1>   
       <div class="panel-heading"></div>
            <div class="panel-body">
                <div class="table-responsive"> 
                  <div>
                    <filter-component-vue :menu="menu"></filter-component-vue> 
                  </div>
                  <div>
                      <button class="button btn-primary" style="margin: 5px;padding: 5px " @click="loadItems">Search</button>
                  </div>
                  <v-data-table-server 
                    height="40vh" 
                    :items-per-page="itemsPerPage"
                    :headers="headers"
                    :items-length="totalItems"
                    :items="serverItems"
                    :loading="loading"
                    :search="search"
                    item-value="name"
                    items-per-page-text="Data count"
                    loading-text="Loading...."
                    @update:options="loadItems"  
                    :value="selectedRows"
                     @click:row="rowClicked"
                  >  
                      <template v-slot:item="{ item }" v-if="menu==='Products'">
                          <tr @click="rowClicked(item)" :class="this.selectedRows.indexOf(item.id)>-1?'cyan':''">  
                            <td class="v-data-table__td v-data-table-column--align-start">{{item.id}}</td>
                            <td class="v-data-table__td v-data-table-column--align-end"> 
                              {{item.name}} 
                            </td>
                            <td class="v-data-table__td v-data-table-column--align-end">{{item.calories}}</td>
                            <td class="v-data-table__td v-data-table-column--align-end">{{item.fat}}</td>
                            <td class="v-data-table__td v-data-table-column--align-end">{{item.carbs}}</td>
                            <td class="v-data-table__td v-data-table-column--align-end">{{item.protein}}</td>
                            <td class="v-data-table__td v-data-table-column--align-end">{{item.iron}}</td>
                            <td>
                                <v-btn class="mx-2" fab dark small color="blue" @click="oneditclick(item.id)">
                                    <v-icon dark>mdi-pencil</v-icon>
                                </v-btn>
                            </td>
                            <td>
                                <v-btn class="mx-2" fab dark small color="red" @click="ondeleteclick(item.id)">
                                    <v-icon dark>mdi-delete</v-icon>
                                </v-btn>
                            </td>
                          </tr>
                      </template> 
                  </v-data-table-server> 
                </div> 
            </div> 
    </div> 
  </div> 
</template>
 
<script>
  import axios from "axios" 
  import FilterComponentVue from './FilterComponent.vue';
  import { mapGetters } from "vuex"
  const requsetAPI = {
    async fetch (reqOptions) {
      console.log('reqOptions====',reqOptions)
      return new Promise(resolve => {
        axios.get(reqOptions.url, {params:reqOptions.params})
        .then((response) => {
          console.log(response)
          resolve({ items: response.data, total: response.data.length })
        })
      }) 
    }
  }

  export default {
    props: ["menu", "headers", "url"], 
    components: {
      FilterComponentVue
    },
    data: () => ({
      itemsPerPage: 5, 
      search: '',
      serverItems: [],
      selected: [],
      selectedRows: [],
      loading: true,
      totalItems: 0, 
    }),
    computed: {
      ...mapGetters({
          getUserID : 'getUserID',
          getUserMail :'getUserMail',
          getUserPassword :'getUserPassword'
      })
    },
    methods: {
      loadItems({ page = 1 , itemsPerPage = 5 , sortBy }) {
        let searchParams = {}
        if(this.menu === 'Users'){
          searchParams = { userID : this.getUserID , userMail: this.getUserMail, userPassword: this.getUserPassword}
        } 
        const reqOptions = {
          url: this.url,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          params: {
            page : page,
            itemsPerPage : itemsPerPage,
            sortBy : sortBy,
            searchData : searchParams
          }
        } 
        this.loading = true
        requsetAPI.fetch(reqOptions).then(({ items, total }) => {
          this.serverItems = items
          this.totalItems = total
          this.loading = false
        })
      },
      oneditclick(id){
        console.log('deleteID = ',id)
      },
      ondeleteclick(id){
        console.log('deleteID = ',id)
      },
      rowClicked(row) {
        this.swapSelectionStatus(row.id); 
      },
      swapSelectionStatus(keyID) {
        if (this.selectedRows.includes(keyID)) {
          this.selectedRows = this.selectedRows.filter(
            selectedKeyID => selectedKeyID !== keyID
          );
          console.log(this.selectedRows ,'this.selectedRows ')
        } else {
          this.selectedRows.push(keyID);
        }
      }
    }
  } 
</script>

<style scoped>
/* Add your styles here if needed */
.table-container {
  margin: 10px;
}
.table-container .panel-heading {
  font-weight: bold;
}
.table-container .panel-body {
  padding: 0;
}
.table-container table {
  margin-bottom: 0;
  border: none;
}
.table-container table tr:last-child td {
  border-bottom: none;
}
.table-container table tr th {
  font-weight: bold;
}
.table-container table tr th:first-child,
.table-container table tr td:first-child {
  border-left: none;
}
.table-container table tr th:last-child,
.table-container table tr td:last-child {
  border-right: none;
}
.table-container table tr td {
  padding: 2px 8px !important;
  vertical-align: middle;
}
.table-container table tr td .picture {
  padding-right: 10px;
}
.table-container table tr td img {
  max-height: 30px;
  width: auto;
  border: 1px solid #c7c7c7;
}
.cyan {
  background-color: aqua;
}
</style>
