<template>
  <div class="page">
    <h1>список пользователей</h1>
    <div v-if="users.length">
      <div v-for="user in users" :key="user.id" class="user-card">
        <p><strong>ФИО</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>email:</strong> {{ user.email }}</p>
        <br>
      </div>
      <p v-else>Загрузка...</p>
    </div>
</template>

<script setup>
import { ref onMounted } from 'vue';

const users = ref([]);
onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    users.value = data.users;
  } catch (error) {
    console.error('Ошибка при загрузке пользователей:', error);
  }
});
</script>
