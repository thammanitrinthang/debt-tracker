<template>
    <div class="mx-right text-h3" style="font-size: 30px; padding: 16px;">ลูกหนี้ปกติ<v-btn color="red" dark icon
        to="/add_user/add">
        <v-icon>mdi-plus</v-icon>
      </v-btn></div>
    <div class="overflow-x-auto">
      <table class="table w-full ">
        <thead class="bg-cyan-600 ">
          <tr>
            <th style="font-size: 18px;"></th>
            <th style="font-size: 18px;">เลขที่สัญญา</th>
            <th style="font-size: 18px;">ชื่อ-นามสกุล</th>
            <th style="font-size: 18px;">สถานะ</th>
            <th style="font-size: 18px;">แก้ไข</th>
          </tr>
        </thead>
        <tbody>
  
          <tr v-for="(user, index) in users" :key="user.id"
            :class="{ 'bg-grey-lighten-2': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
            <th>{{ index + 1 }}</th>
            <td>{{ user.contract_id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.status }}</td>
            <td>
              <div class="flex gap-2">
                <v-icon size="large" class="me-2"  @click="delete_users(user.id)">
                      mdi-pencil
                  </v-icon>
                <v-icon size="large" @click="delete_users(user.id)">
                      mdi-delete
                  </v-icon>
              </div>
            </td>
          </tr>
  
  
  
        </tbody>
      </table>
  
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const users = ref({})
  
  const fetch_users = async () => {
    await axios.get(`${import.meta.env.VITE_API}/users`)
      .then((response) => {
        console.log(response.data.data)
        users.value = response.data.data
      }).catch((err) => {
        console.log(err)
      })
  }
  const delete_users = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API}/users/${id}`)
      .then((response) => {
        console.log(response)
        fetch_users()
      }).catch((err) => {
        console.log(err)
      })
  }
  
  onMounted(() => fetch_users())
  
  </script>