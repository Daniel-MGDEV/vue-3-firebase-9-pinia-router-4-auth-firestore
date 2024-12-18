<template>
    <div>
        <h1>Editar</h1>
        
        <form @submit.prevent="handleSubmit">
            <input type="text" action="" placeholder="Ingrese URL" v-model="mUrl">
            <button class="btn btn-success" type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useDatabaseStore } from '../stores/database'

const databaseStore = useDatabaseStore()

const route = useRoute()

const handleSubmit = () => {
    //validaciones del input
    databaseStore.updateUrl(route.params.id, mUrl.value)
}

const mUrl = ref('')

onMounted(async() => {
    mUrl.value = await databaseStore.leerUrl(route.params.id)
})
</script>