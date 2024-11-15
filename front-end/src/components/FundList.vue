<template>
<div class="container mx-auto px-4 py-8">
  <div class="fund-list">
    <FundCard v-for="fund in funds" :key="fund.id" :fund="fund" />
  </div>
</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useFundStore } from '../stores';
import FundCard from './FundCard.vue';

const fundStore = useFundStore();

onMounted(async () => {
  await fundStore.fetchFunds();
});

const funds = computed(() => fundStore.funds);


</script>

<style scoped>
.fund-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
}
</style>
