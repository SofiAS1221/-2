<template>
  <div class="page">
    <h1>Вход</h1>
    <form>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/users');
    } else {
      error.value = data.message || 'Ошибка при входе';
    }
  } catch (error) {
    error.value = 'Ошибка сети';
  }
};

</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

<form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 10px;
  font-size: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #000;
  padding: 10px;
  color: #fff;
}

button:hover {
  background-color: #0056b3;
}
</style>
