<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-card class="mx-auto rounded-xl" width="300" color="#EAF6F0">
        <template v-slot:prepend>
          <v-text>ส่งจดหมายแล้ว</v-text>
        </template>
        <template v-slot:append>
          <v-avatar size="40" rounded="0">
            <v-img src="/image/mail.png"></v-img>
          </v-avatar>
        </template>
        <v-card-title class="text-center text-h4">20 คน</v-card-title>
        <v-divider class="border-opacity-75"></v-divider>
        <v-card-subtitle class="text-center pa-md-4">ทั้งหมด 50 คน</v-card-subtitle>

      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="mx-auto rounded-xl" width="300" color="#EAF6F0">
        <template v-slot:prepend>
          <v-text>โทรติดตามแล้ว</v-text>
        </template>
        <template v-slot:append>
          <v-avatar size="40" rounded="0">
            <v-img src="/image/telephone.png"></v-img>
          </v-avatar>
        </template>
        <v-card-title class="text-center text-h4">10 คน</v-card-title>
        <v-divider class="border-opacity-75"></v-divider>
        <v-card-subtitle class="text-center pa-md-4">ทั้งหมด 50 คน</v-card-subtitle>
      </v-card>
    </v-col>


    <v-col cols="auto">
      <v-card class="mx-auto rounded-xl" width="300" color="#EAF6F0">
        <template v-slot:prepend>
          <v-text>ส่งคนติดตามแล้ว</v-text>
        </template>
        <template v-slot:append>
          <v-avatar size="40" rounded="0">
            <v-img src="/image/vehicle.png"></v-img>
          </v-avatar>
        </template>
        <v-card-title class="text-center text-h4">10 คน</v-card-title>
        <v-divider class="border-opacity-75"></v-divider>
        <v-card-subtitle class="text-center pa-md-4">ทั้งหมด 50 คน</v-card-subtitle>
      </v-card>
    </v-col>


    <v-col cols="auto">
      <v-card class="mx-auto rounded-xl" width="300" color="#EAF6F0">
        <template v-slot:prepend>
          <v-text>ช่วงดำเนินคดี</v-text>
        </template>
        <template v-slot:append>
          <v-avatar size="40" rounded="0">
            <v-img src="/image/law.png"></v-img>
          </v-avatar>
        </template>
        <v-card-title class="text-center text-h4">5 คน</v-card-title>
        <v-divider class="border-opacity-75"></v-divider>
        <v-card-subtitle class="text-center pa-md-4">ทั้งหมด 50 คน</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

</script>