import { defineStore } from 'pinia';

export const useFundStore = defineStore('fund', {
  state: () => ({
    funds: [],
    portfolio: [],
  }),
  actions: {
    async fetchFunds() {
      const response = await fetch('http://localhost:5000/api/funds');
      this.funds = await response.json();
    },
    async invest(fundId, fundName, amount, units) {
      try {
        
        const totalInvestmentValue = amount * units;

        const investmentData = {
          fundId,
          fundName,
          amount: totalInvestmentValue,
          units,
        };        

        const response = await fetch('http://localhost:5000/api/invest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(investmentData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('Investment successful:', result);
          return { success: true, message: 'Investment successful' };
        } else {
          console.error('Failed to invest:', result.message);
          return { success: false, message: result.message };
        }
      } catch (error) {
        console.error('Error making the investment:', error);
        return { success: false, message: 'An error occurred while making the investment' };
      }
    },
    async fetchPortfolio() {
      try {
        const response = await fetch('http://localhost:5000/api/portfolio');
        this.portfolio = await response.json();
        
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      }
    },
  },
});
