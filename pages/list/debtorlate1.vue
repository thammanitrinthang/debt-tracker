<template>
  <v-card flat>
    <template v-slot:title>
      <div class="mx-right text-h3" style="font-size: 30px; padding: 16px;">ลูกหนี้งวดที่ 1</div>
    </template>
    <template v-slot:text class="text-right">
      <v-responsive class="mx-right" max-width="344">
        <v-text-field v-model="search" label="ค้นหา" append-inner-icon="mdi-magnify" single-line variant="outlined"
          hide-details></v-text-field></v-responsive>
    </template>

    <v-data-table :headers="headers" :items="desserts" :search="search"
      :header-props="{ style: 'background-color: #59A1C9; color: black;' }"> <template v-slot:item="{ item, index }">
        <tr :style="{ backgroundColor: index % 2 === 0 ? '#D9D9D9' : 'white' }">
          <td v-for="(value, key) in item" :key="key">
            {{ value }}
          </td>
        </tr>
      </template></v-data-table>
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
          key: 'id',
          sortable: true,
          title: 'ลำดับ',
        },
        { key: 'contract', title: 'เลขที่สัญญา' },
        { key: 'name', title: 'ชื่อ-นามสกุล' },
        { key: 'status', title: 'สถานะลูกหนี้' },
        { key: 'comments', title: 'หมายเหตุ', sortable: false, },
      ],
      desserts: [
        {
          id: 1,
          contract: 12345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 2,
          contract: 22345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 3,
          contract: 32345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 4,
          contract: 42345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 5,
          contract: 52345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 6,
          contract: 62345678,
          name: 'นาย หายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 7,
          contract: 72345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 8,
          contract: 82345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        }, {
          id: 9,
          contract: 92345678,
          name: 'นาย สบายใจ จัง',
          status: '',
          comments: '',

        },

      ],
    }
  },
}
</script>