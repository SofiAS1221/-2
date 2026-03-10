<template>
  <div class="page home">
    <h1>профиль пользователя</h1>
    <img src="@/assets/images/home.png" alt="Home Image" />
    <p><strong>имя</strong> {{ user.firstName }} {{ user.lastName }}</p>
    <p><strong>email:</strong> {{ user.email }}</p>
    <button @click="logout">Выйти</button>
  </div>
  <p v-else>загрузка профиля...</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const user = ref(null);
const error = ref('');
const router = useRouter();

const logut = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
onMounted(async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('https://dummyjson.com/auth/profile', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await res.json();
    if (res.ok) {
      user.value = data;
    } else {
      throw new Error('Ошибка при загрузке профиля');
    }
  } catch (err) {
    error.value = err.message || 'Ошибка сети';
    logut();
  }
});
</script>
