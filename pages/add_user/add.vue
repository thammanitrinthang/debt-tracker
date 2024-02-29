<template>
    <div class="flex flex-col items-center justify-start">
        <h1 class="text-xl font-bold mb-12">เพิ่มข้อมูล</h1>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <form @submit.prevent="check()" class="flex flex-col gap-3">
                    <span>เลขที่สัญญา</span>
                    <input type="contract_id" placeholder="เลขที่สัญญา"
                        class="input input-bordered input-primary w-full max-w-xs" v-model="add.contract_id" />
                    <span>ชื่อ</span>
                    <input type="username" placeholder="ชื่อ-นามสกุล"
                        class="input input-bordered input-primary w-full max-w-xs" v-model="add.username" />
                    <span>สถานะ</span>
                    <input type="status" placeholder="สถานะการชำระหนี้"
                        class="input input-bordered input-primary w-full max-w-xs" v-model="add.status" />
                    <button class="btn bg-green-500 hover:bg-green-700 w-full max-w-xs my-2">เพิ่ม</button>
                </form>
            </div>
        </div>
    </div>
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
    if (add.value.contract_id == add.value.username) {
        alert("เพิ่มข้อมูลไม่สำเร็จ")
        add.value = ''
    } else {
        await insert_user()
        await alert("เพิ่มข้อมูลสำเร็จ")
        navigateTo('/list/debtor')
    }
}

</script>

<style lang="scss" scoped></style>