<template>
  <div class="container mx-auto px-4 py-8" v-if="fund">
    <h1 class="text-2xl font-bold mb-4">{{ fund.name }}</h1>
    <p>{{ fund.description }}</p>
    <h2 class="text-lg font-semibold mt-4">Fund Type: {{ fund.investmentType }}</h2>
    <h2 class="text-lg font-semibold mt-4">Current NAV: {{ fund.nav }}</h2>

    <h3 class="text-lg font-semibold mt-4">Performance History:</h3>
    <div class="mt-2">
      <table class="table-auto min-w-full border-collapse shadow">
        <thead>
          <tr>
            <th class="px-4 py-2 border text-left">Return In (%)</th>
            <th class="px-4 py-2 border text-left">1-Month</th>
            <th class="px-4 py-2 border text-left">1-Year</th>
            <th class="px-4 py-2 border text-left">3-Year</th>
            <th class="px-4 py-2 border text-left">Since Inception*</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="performance in fund.performanceHistory" :key="performance.id">
            <tr v-for="returnData in performance.totalReturn" :key="returnData.returnIn">
              <td class="px-4 py-2 border">{{ returnData.returnIn }}</td>
              <td class="px-4 py-2 border">{{ returnData.oneMonth }}%</td>
              <td class="px-4 py-2 border">{{ returnData.oneYear }}%</td>
              <td class="px-4 py-2 border">{{ returnData.threeYear }}%</td>
              <td class="px-4 py-2 border">{{ returnData.sinceInception }}%</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFundStore } from '../stores';

const route = useRoute();
const fundStore = useFundStore();
const fund = ref(null);

onMounted(() => {
  const fundId = route.params.id;
  fund.value = fundStore.funds.find(f => f.id === parseInt(fundId));
});
</script>

<style scoped></style>