<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-lg font-semibold">My Investments</h2>
        <div v-if="portfolio.length">
            <table class="table-auto min-w-full border-collapse shadow mt-4">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border text-left">Fund Name</th>
                        <th class="px-4 py-2 border text-left">Amount (MYR)</th>
                        <th class="px-4 py-2 border text-left">Units</th>
                        <th class="px-4 py-2 border text-left">Total Investment</th>
                        <th class="px-4 py-2 border text-left">Invested on</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investment in portfolio" :key="investment.id">
                        <td class="px-4 py-2 border">{{ investment.fundName }}</td>
                        <td class="px-4 py-2 border">{{ investment.amount }}</td>
                        <td class="px-4 py-2 border">{{ investment.units }}</td>
                        <td class="px-4 py-2 border">{{ investment.total }}</td>
                        <td class="px-4 py-2 border">{{ formatDate(investment.date) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="flex items-center justify-center min-h-[400px]">
            <p class="text-center text-gray-500">No investments yet. Start investing to build your portfolio.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDateFormatter } from '@/composables/useDateFormatter';
/* The comment part is another way to fetch data by fetch from api. In this section I choose
to use local storage instead.*/
 

// import { useFundStore } from '@/stores'; 

// const fundStore = useFundStore();
// const portfolio = fundStore.portfolio

const portfolio = ref([]);
const {formatDate} = useDateFormatter()

onMounted(() => {
    // fundStore.fetchPortfolio() 
    portfolio.value = JSON.parse(localStorage.getItem('investments')) || [];
})


</script>

<style scoped></style>
