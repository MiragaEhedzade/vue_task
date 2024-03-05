<template v-slot:thead>
  <div>
    <tr v-if="menu === 'Products'">
      <td>
        <v-text-field
          v-model="products_name"
          hide-details
          placeholder="Search name..."
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="products_calories"
          hide-details
          placeholder="Minimum calories"
          type="number"
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="products_fat"
          hide-details
          placeholder="Minimum fat"
          type="number"
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="products_carbs"
          hide-details
          placeholder="Minimum carbs"
          type="number"
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="products_protein"
          hide-details
          placeholder="Minimum protein"
          type="number"
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="products_iron"
          hide-details
          placeholder="Minimum iron"
          type="number"
          class="ma-2"
          density="compact"
        ></v-text-field>
      </td>
    </tr>
    <tr v-else-if="menu === 'Users'">
      <td>
        <v-text-field
          v-model="user_id"
          hide-details
          placeholder="ID"
          class="ma-6"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="user_mail"
          hide-details
          placeholder="E-mail"
          class="ma-6"
          density="compact"
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="user_password"
          hide-details
          placeholder="Password"
          class="ma-6"
          density="compact"
        ></v-text-field>
      </td> 
    </tr>
  </div>
</template>

<script>
import { mapMutations } from "vuex" 
import _ from 'lodash'; 
export default {
    props: ["menu"],
    data(){
        return {
            user_id: '',
            user_mail: '',
            user_password: '',
            products_name: '',
            products_calories : '',
            products_fat: '',
            products_carbs: '',
            products_protein: '',
            products_iron: ''

        }
    }, 
    watch: {
      user_id: _.debounce(function(newValue) {
          this.user_id = newValue
          this.setUserID(this.user_id)
      },1000),
      user_mail: _.debounce(function(newValue) {
          this.user_mail = newValue
          this.setUserMail(this.user_mail)
      },1000),
      user_password: _.debounce(function(newValue) {
          this.user_password = newValue
          this.setUserPassword(this.user_password)
      },1000)
    },
    methods: {
        ...mapMutations([
            "setUserID",
            "setUserMail",
            "setUserPassword"
        ]),
    },
}
</script>
