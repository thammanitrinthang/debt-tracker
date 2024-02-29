<template>
    <v-card flat>
      <template v-slot:title>
        <div class="mx-right text-h3" style="font-size: 30px; padding: 16px;">ลูกหนี้คาดว่าจะสูญหาย</div>
      </template>
      <template v-slot:text class="text-right">
        <v-responsive class="mx-right" max-width="344">
          <v-text-field v-model="search" label="ค้นหา" append-inner-icon="mdi-magnify" single-line variant="outlined"
            hide-details></v-text-field></v-responsive>
      </template>
  
      <v-data-table :headers="headers" :search="search"
        :header-props="{ style: 'background-color: #59A1C9; color: black;' }"> 
        <template v-slot:item="{ item, index }">
          <tr :style="{ backgroundColor: index % 2 === 0 ? '#D9D9D9' : 'white' }">
            <td v-for="(value, key) in item" :key="key">
              {{ value }}
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </template>
  <script>
  export default {
    data() {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'no',
            sortable: true,
            title: 'ลำดับ',
          },
          { key: 'contract', title: 'เลขที่สัญญา' },
          { key: 'name', title: 'ชื่อ-นามสกุล' },
          { key: 'status', title: 'สถานะลูกหนี้' },
          { key: 'comments', title: 'หมายเหตุ', sortable: false, },
        ],
      }
    },
  }
  </script>