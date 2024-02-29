<template>
    <v-card flat>
        <template v-slot:title>
            <div class="mx-right text-h3" style="font-size: 30px; padding: 16px;">การโทรติดตาม<v-avatar color="red"
                    class="mx-2">
                    <v-btn color="red" dark icon @click="dialog = true">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-avatar></div>
        </template>

        <template v-slot:text class="text-center">

            <v-container class="bg-grey-lighten-2 ma-4 rounded-lg items-center">
                <v-row class="mb-1 " no-gutters>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">เลขที่สัญญา 12345678</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">ชื่อ นาย สบายใจ จัง</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">เบอร์โทร 0901234567</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;"></v-sheet></v-col>        
                </v-row>
                <v-row class="mb-1" no-gutters>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">ยอดทั้งหมด 500,000</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">ยอดคงค้าง 50,000</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">งวดทั้งหมด 32</v-sheet></v-col>
                    <v-col><v-sheet class="ma-2 bg-grey-lighten-2" style="font-size: 18px;">งวดคงค้าง 6</v-sheet></v-col>
                   
                </v-row>
            </v-container>

        
        </template>
        <v-data-table :headers="headers" :items="desserts" :search="search"
            :header-props="{ style: 'background-color: #59A1C9; color: black;' }">
            <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">

                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.no" label="ลำดับ"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contract" label="เลขที่สัญญา"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="ชื่อ-นามสกุล"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.comments" label="หมายเหตุ"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">คุณต้องการจะลบใช่หรือไม่?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon size="small" class="me-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        search: '',
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                align: 'start',
                key: 'id',
                sortable: true,
                title: 'ลำดับ',
            },
            { key: 'contract', title: 'เลขที่สัญญา' },
            { key: 'name', title: 'ชื่อ-นามสกุล' },
            { key: 'comments', title: 'หมายเหตุ', sortable: false, },
            { title: 'แก้ไข', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            contract: '',
            name: '',
            comments: '',

        },
        defaultItem: {
            id: '',
            contract: '',
            name: '',
            comments: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'เพิ่ม' : 'แก้ไข'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    id: '1',
                    contract: 123456,
                    name: "นายธรรมนิตย์ รินทาง",
                    comments: "ไม่มีการตอบกลับ",
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>