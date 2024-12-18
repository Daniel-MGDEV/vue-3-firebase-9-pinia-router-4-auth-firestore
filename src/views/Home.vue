<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>

        <form @submit.prevent="handleSubmit">
            <input type="text" action="" placeholder="Ingrese URL" v-model="mUrl">
            <button class="btn btn-success" type="submit">Agregar</button>
        </form>

        <p v-if="databaseStore.loadingDocs">Loading Docs.....</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{ item.id }} 
                <br>
                {{ item.name }}
                <br>
                {{ item.short }}
                <br>

                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const databaseStore = useDatabaseStore()
const router = useRouter()

databaseStore.getUrls()

const mUrl = ref('')

const handleSubmit = () => {
    //validaciones de la url
    databaseStore.addUrls(mUrl.value)
}
</script>