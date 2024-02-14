<template>
    <v-card class="mx-auto rounded-xl" max-width="600" >
        
        <v-list lines="two">
            <v-list-subheader>บันทึกการติดตาม </v-list-subheader>

            <v-list-item >
                <template v-slot:prepend>
                    <v-text class="text-center text-h6">ส่งจดหมายติดตาม</v-text>
                </template>
                <template v-slot:append>
                    <NuxtLink to="/track/letter">
                        <div class="text-end">
                            <v-btn class="text-none" color="#398837" rounded variant="flat" width="80" height="35">
                                รายชื่อ
                            </v-btn>
                        </div>
                    </NuxtLink>
                </template>
            </v-list-item>

            <v-divider class="border-opacity-100"></v-divider>

            <v-list-item>
                <template v-slot:prepend>
                    <v-text class="text-center text-h6">โทรติดตาม</v-text>
                </template>
                <template v-slot:append>
                    <NuxtLink to="/track/callphone">
                        <div class="text-end">
                            <v-btn class="text-none" color="#398837" rounded variant="flat" width="80" height="35">
                                รายชื่อ
                            </v-btn>
                        </div>
                    </NuxtLink>
                </template>
            </v-list-item>

            <v-divider class="border-opacity-75"></v-divider>

            <v-list-item>
                <template v-slot:prepend>
                    <v-text class="text-center text-h6">ส่งคนติดตาม</v-text>
                </template>
                <template v-slot:append>
                    <NuxtLink to="/track/letter">
                        <div class="text-end">
                            <v-btn class="text-none" color="#398837" rounded variant="flat" width="80" height="35">
                                รายชื่อ
                            </v-btn>
                        </div>
                    </NuxtLink>
                </template>
            </v-list-item>
            <v-divider class="border-opacity-75"></v-divider>
            <v-list-item>
                <template v-slot:prepend>
                    <v-text class="text-center text-h6">ยึดทรัพย์</v-text>
                </template>
                <template v-slot:append>
                    <NuxtLink to="/track/letter">
                        <div class="text-end">
                            <v-btn class="text-none" color="#398837" rounded variant="flat" width="80" height="35">
                                รายชื่อ
                            </v-btn>
                        </div>
                    </NuxtLink>
                </template>
            </v-list-item>
            <v-divider class="border-opacity-75"></v-divider>
            <v-sheet :height="20"></v-sheet>
        </v-list>
    </v-card>
</template>