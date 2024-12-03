<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input v-model="email" type="email" placeholder="Ingrese email">
            <input v-model="password" type="password" placeholder="Ingrese contraseña">
            <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

    const userStore = useUserStore()

    const email = ref('prueba@gmail.com')
    const password = ref('123456')

    const handleSubmit = async () => {
        if(!email.value || password.value.length < 6){
            return alert('llena los campos')
        }

        await userStore.registerUser(email.value, password.value);
    }
</script>