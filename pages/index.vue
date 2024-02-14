<template>
  <div>
    <v-col cols="auto">
      <Card-Status />
      <v-sheet :height="40"></v-sheet>
      <v-row>
        <v-col cols="8" md="6"> <!-- Adjust the column sizes based on your requirements -->
          <Card-Category />
        </v-col>
        <v-col cols="8" md="6"> <!-- Adjust the column sizes based on your requirements -->
          <Card-Cal />
        </v-col>
      </v-row>
    </v-col>



  </div>
</template>

<script setup>

</script>

<style scoped></style>