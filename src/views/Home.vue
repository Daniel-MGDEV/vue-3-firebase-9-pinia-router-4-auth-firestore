<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>
        <ul>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{ item.id }} 
                <br>
                {{ item.name }}
                <br>
                {{ item.short }}
                <br>
                <br>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const databaseStore = useDatabaseStore()

databaseStore.getUrls()
</script>