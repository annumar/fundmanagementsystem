<template>
    <div class="bg-gray-50 text-gray-900 py-3.5 px-6 shadow md:flex justify-between items-center">
        <div class="flex items-center cursor-pointer">
            <span class="text-green-500 text-xl mr-1"></span>
            <h1 class="text-xl">
                Fund Management System
            </h1>
        </div>

        <ul class="md:flex md:items-center items-center">
            <li class="md:mx-4"v-for="items in links">
                <a :href="items.path" class="text-xl hover:text-red-800">{{items.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
let links = [
    { name: "Home", path: "/" },
    { name: "My Portfolio", path: "/my-portfolio" }
]

</script>