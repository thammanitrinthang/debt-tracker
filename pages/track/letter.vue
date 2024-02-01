<script setup>
const columns = [{
  key: 'id',
  label: 'ลำดับ',
  sortable: true
}, {
  key: 'title',
  label: 'เลขที่สัญญา',
  sortable: true
}, {
  key: 'name',
  label: 'ชื่อ-นามสกุล',
  sortable: true
}, {
  key: 'email',
  label: 'สถานะลูกหนี้',
  sortable: true,
  direction: 'desc'
}, ]

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: '12345671',
  email: 'กำลังดเนินการ',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: '12345672',
  email: 'กำลังดำเนินการ',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: '12345673',
  email: 'กำลังดำเนินการ',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: '12345674',
  email: 'กำลังดำเนินการ',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: '12345675',
  email: 'กำลังดำเนินการ',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: '12345676',
  email: 'กำลังดำเนินการ',
  role: 'Member'
}, {
  id: 7,
  name: 'Emily Selman',
  title: '12345677',
  email: '',
  role: 'Admin'
}, {
  id: 8,
  name: 'Kristin Watson',
  title: '12345678',
  email: '',
  role: 'Member'
}, {
  id: 9,
  name: 'Emma Watson',
  title: '12345679',
  email: '',
  role: 'Member'
}, {
  id: 10,
  name: 'John Doe',
  title: '12345610',
  email: '',
  role: 'Admin'
}, {
  id: 11,
  name: 'Jane Doe',
  title: '12345611',
  email: '',
  role: 'Member'
}, {
  id: 12,
  name: 'John Smith',
  title: '12345612',
  email: '',
  role: 'Admin'
}, {
  id: 13,
  name: 'Jane Smith',
  title: '12345613',
  email: '',
  role: 'Owner'
}, {
  id: 14,
  name: 'Jane Smith2',
  title: '12345614',
  email: '',
  role: 'Owner'
}, {
  id: 15,
  name: 'Jane Smith3',
  title: '12345615',
  email: '',
  role: 'Owner'
}, {
  id: 16,
  name: 'Jane Smith4',
  title: '12345616',
  email: '',
  role: 'Owner'
}, {
  id: 17,
  name: 'Jane Smith5',
  title: '12345617',
  email: '',
  role: 'Owner'
}, {
  id: 18,
  name: 'Jane Smith6',
  title: '12345618',
  email: '',
  role: 'Owner'
}
]

const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return people
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})
const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  
  <div >
    <div class="title">ลูกหนี้งวดที่ 1</div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" placeholder="ชื่อ-เลขที่สัญญา" class="custom-search"/>
    </div>

    <UTable :rows="filteredRows" :columns="columns" :empty-state="{ icon: 'i-heroicons-magnifying-glass', label: 'ไม่มีรายชื่อ' }"/>
  
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
    </div>
  </div>
</template>

<style>
.i-heroicons-magnifying-glass {
  color: #A9C183; 
  width: 50px;
  height: 50px;
  align-items: center;
}
.custom-search{
  width: 500px;
}
.title{
  font-size: 50px;
  justify-content: center;
  margin-left: 20px
  ;
}

</style>