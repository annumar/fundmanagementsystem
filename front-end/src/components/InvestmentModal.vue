<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-overlay fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
        <div class="modal-content bg-white rounded-lg shadow-lg p-6 z-10">
            <h3 class="text-lg font-semibold mb-4">Invest in {{ fund.name }}</h3>
            <label for="amount" class="block text-sm font-medium mb-1">Amount (MYR)</label>
            <input type="number" v-model="amount" class="border border-gray-300 rounded-md p-2 mb-4 w-full" />

            <label for="units" class="block text-sm font-medium mb-1">Number of Units</label>
            <input type="number" v-model="units" class="border border-gray-300 rounded-md p-2 mb-4 w-full" />

            <div class="flex justify-end">
                <button @click="submitInvestment" :disabled="!isFormValid"
                    class="bg-red-800 text-white rounded-md px-4 py-2 mr-2"
                    :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }">Submit</button>

                <button @click="closeModal" class="bg-gray-300 rounded-md px-4 py-2">Cancel</button>
            </div>

            <div v-if="showSuccess" class="mt-4">
                <Alert type="success" message="Successfully invested!" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useFundStore } from '@/stores';
import Alert from './Alert.vue';

const props = defineProps({
    fund: {
        type: Object,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },
    closeModal: {
        type: Function,
        required: true
    }
});

const amount = ref(0);
const units = ref(0);
const showSuccess = ref(false);
const fundStore = useFundStore();

const isFormValid = computed(() => {
    return amount.value > 0 && units.value > 0;
});

const submitInvestment = async () => {
    console.log("submit", amount.value, units.value);

    const result = await fundStore.invest(props.fund.id, props.fund.name, amount.value, units.value);

    if (result.success) {
        const investments = JSON.parse(localStorage.getItem('investments')) || [];
        const newInvestment = {
            fundId: props.fund.id,
            fundName: props.fund.name,
            amount: amount.value,
            units: units.value,
            total: amount.value * units.value,
            date: new Date(),
        };

        investments.push(newInvestment);
        localStorage.setItem('investments', JSON.stringify(investments));

        showSuccess.value = true;

        setTimeout(() => {
            showSuccess.value = false;
            props.closeModal();
        }, 3000);
    } else {
        console.error(result.message);
    }
};


</script>