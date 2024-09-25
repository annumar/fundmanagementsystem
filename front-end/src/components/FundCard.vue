<template>
    <div class="fund-card">
        <div v-if="fund">
            <header>
                <h2>{{ fund.name }}</h2>
                <div class="badges mt-2">
                    <span v-for="tag in fund.tags" :key="tag" :class="['badge', getBadgeClass(tag)]">{{ tag }}</span>
                </div>
            </header>

            <section class="fund-stats">
                <div>
                    <p class="text-base font-semibold">YTD RETURN </p>
                    <p>as at ({{ currentDate }})</p>


                    <h3 :class="{ 'negative': fund.ytdReturn < 0, 'positive': fund.ytdReturn >= 0 }">
                        {{ fund.ytdReturn }}%
                    </h3>
                </div>
                <div>
                    <p class="text-base font-semibold">NAV PRICE </p>
                    <p>as at ({{ currentDate }})</p>

                    <h3>MYR {{ fund.nav }}</h3>
                </div>
            </section>

            <footer>
                <a href="#" class="view-fund" @click="openModal">Invest</a>
                <a href="#" class="view-fund" @click="selectFund(fund.id)">View Fund</a>
            </footer>

            <InvestmentModal :fund="fund" :isOpen="isModalOpen" :closeModal="closeModal" />
        </div>

       
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import InvestmentModal from './InvestmentModal.vue';

const props = defineProps({
    fund: {
        type: Object,
        required: true
    }
});

const router = useRouter();
const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const currentDate = computed(() => {
    return new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
});

const getBadgeClass = (tag) => {
    switch (tag.toLowerCase()) {
        case 'equity':
        case 'mixed assets':
        case 'money market':
            return 'bg-orange-400';
        case 'shariah':
        case 'conventional':
            return 'bg-green-400'; 
        case 'epf-mis':
            return 'bg-purple-400'; 
        default:
            return 'bg-gray-200';
    }
};

function selectFund(id) {
    router.push({ name: 'FundDetail', params: { id } });
}

</script>

<style scoped>
.fund-card {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    transition: box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 380px;
}

.fund-card:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-size: 1.2rem;
    font-weight: bold;
}

.badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.badge {
    max-width: 250px; 
    max-height: 70px; 
    border-radius: 5px; 
    padding: 0.1rem 0.2rem;
    display: flex;
    justify-content: center; 
    align-items: center;
    color: white; 
    font-size: 0.75rem;
    text-transform: uppercase;
}

.fund-stats {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
}

.negative {
    color: red;
}

.positive {
    color: green;
}

footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}

.view-fund {
    color: #d1335b;
    text-decoration: none;
}

.add-compare {
    color: #2f9bff;
    text-decoration: none;
}
</style>