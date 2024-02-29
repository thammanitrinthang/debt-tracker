<template>
    <h1 class="text-xl font-bold mb-2">แก้ไข</h1>
    <div class="form-control mb-4">
        <label class="input-group input-bordered flex items-center gap-6">
            <span>เลขที่สัญญา</span>
            <input type="contract_id" class="input input-bordered" placeholder="เลขที่สัญญา"  />
        </label>
    </div>

    <div class="form-control mb-4">
        <label class="input-group input-bordered flex items-center gap-6">
            <span>ชื่อ</span>
            <input type="username" class="input input-bordered" placeholder="ชื่อ-นามสกุล"  />
        </label>
    </div>

    <div class="form-control mb-4">
        <label class="input-group input-bordered flex items-center gap-6">
            <span>สถานะ</span>
            <input type="status" class="input input-bordered" placeholder="สถานะการชำระหนี้"  />
        </label>
    </div>

    <button class="bg-sky-500 text-base-100 font-bold w-24 rounded-md hover:bg-sky-600" @click="check()">เพิ่ม</button>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { route } from 'express/lib/router';


const add = ref({
    contract_id: '',
    username: '',
    status: '',
})

const insert_user = () => {
    axios.post(`${import.meta.env.VITE_API}/users`, 
    {
        "contract_id": add.value.contract_id,
        "username": add.value.username,
        "status": add.value.status
    })
        .then(response => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
}
const check = async () => {
    if(add.value.contract_id == add.value.username){
        alert("เพิ่มข้อมูลไม่สำเร็จ")
        add.value = ''
    }else{
        await insert_user()
        await alert("เพิ่มข้อมูลสำเร็จ")
        navigateTo('/list/debtor')
    }
}

</script>

<style lang="scss" scoped></style>