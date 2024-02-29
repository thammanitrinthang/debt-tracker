<template>
  <v-card flat>
    <template v-slot:title>
      <div class="mx-right text-h3" style="font-size: 30px; padding: 16px;">การโทรติดตาม</div>
    </template>
    <template v-slot:text class="text-right">
      <v-responsive class="mx-right" max-width="344">
        <v-text-field v-model="search" label="ค้นหา" append-inner-icon="mdi-magnify" single-line variant="outlined"
          hide-details></v-text-field></v-responsive>
    </template>

    <v-data-table :headers="headers" :items="desserts" :search="search"
      :header-props="{ style: 'background-color: #59A1C9; color: black;' }"> 
      <template v-slot:item="{ item, index }">
        <tr :style="{ backgroundColor: index % 2 === 0 ? '#D9D9D9' : 'white' }">
          <td v-for="(value, key) in item" :key="key">
            <!-- Render a NuxtLink component for the "edit" column -->
            <template v-if="key === 'edit'">
              <NuxtLink :to="'/callphone_track/debtcall' + item.no"> <!-- Adjust the route as per your setup -->
                <v-icon>mdi-pencil</v-icon> <!-- Edit icon -->
              </NuxtLink>
            </template>
            <template v-else>
              {{ value }}
            </template>
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
        { key: 'date', title: 'วันที่โทร' },
        { key: 'name_em', title: 'ชื่อ-นามสกุล(พนักงาน)' },
        { key: 'result', title: 'ผลการตอบกลับ', sortable: false, },
        { key: 'edit', title: 'บันทึก', sortable: false, },
      ],
      desserts: [
        {
          no: 1,
          contract: 12345678,
          name: 'นาย สบายใจ จัง',
          date: '',
          name_em: '',
          result: '',
          edit: '',
        },  {
          no: 2,
          contract: 22345678,
          name: 'นาย สบายใจ จัง',
          date: '',
          name_em: '',
          result: '',
          edit: '',
        },  {
          no: 3,
          contract: 32345678,
          name: 'นาย สบายใจ จัง',
          date: '',
          name_em: '',
          result: '',
          edit: '',
        },  {
          no: 4,
          contract: 42345678,
          name: 'นาย สบายใจ จัง',
          date: '',
          name_em: '',
          result: '',
          edit: '',
        },
      ],
    }
    
  },
}
</script>