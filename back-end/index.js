const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let investments = []; 

app.get('/api/funds', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'AHAM Aiiman Asia (ex Japan) Growth Fund',
      description: 'The Fund seeks to provide investors with capital appreciation by investing in Shariah-compliant investments.',
      investmentType: 'Growth',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'MYR',
          oneMonth: 6.6,
          oneYear: 13.3,
          threeYear: -11.9,
          sinceInception: 64.0
        }],
      } ],
      nav: 0.6255,
      ytdReturn: -1.1,
      tags:[ 'Equity', 'Shariah']
    },
    {
      id: 2,
      name: 'AHAM Aiiman Global Multi Thematic Fund',
      description: 'The Fund aims to provide investors with capital appreciation over medium to long term period.',
      investmentType: 'Growth',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'SGD-Hedged',
          oneMonth: 3.9,
          oneYear: 23.4,
          threeYear: 0.0,
          sinceInception: 5.5
        },
        {
          returnIn: 'USD',
          oneMonth: 4.1,
          oneYear: 26.2,
          threeYear: 0.0,
          sinceInception: 9.8
        },
        {
          returnIn: 'AUD-Hedged',
          oneMonth: 4.0,
          oneYear: 23.3,
          threeYear: 0.0,
          sinceInception: 3.1
        },
        {
          returnIn: 'MYR-Hedged',
          oneMonth: 3.9,
          oneYear: 22.5,
          threeYear: 0.0,
          sinceInception: 5.0
        }],
      } ],
      nav: 0.5148,
      ytdReturn: 16.3,
      tags:[ 'Equity', 'Shariah']
    },
    {
      id: 3,
      name: 'AHAM Aiiman Money Market Fund',
      description: 'To provide short-term liquidity and income whilst maintaining capital stability by investing in a diversified portfolio of Islamic money market instruments.',
      investmentType: 'Income',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'MYR',
          oneMonth: 0.3,
          oneYear: 3.6,
          threeYear: 9.0,
          sinceInception: 57.5
        }],
      } ],
      nav: 0.5745,
      ytdReturn: 2.6,
      tags:[ 'Money Market', 'Shariah', 'EPF-MIS']
    },
    {
      id: 4,
      name: 'AHAM Aiiman PRS Shariah Moderate Fund',
      description: 'To facilitate the accumulation of Shariah-compliant retirement savings# by Members for their retirement needs by generating income and capital growth through Shariah-compliant investments. #Note: The Fund is not a capital guaranteed nor a capital protected fund.',
      investmentType: '	Income & Growth',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'MYR',
          oneMonth: 2.5,
          oneYear: 10.6,
          threeYear: -2.0,
          sinceInception: 23.0
        }],
      } ],
      nav: 0.5520,
      ytdReturn: 5.5,
      tags:[ 'Mixed Assets', 'Shariah']
    },
    {
      id: 5,
      name: 'AHAM Aiiman Quantum Fund',
      description: 'The Fund aims to provide investors with stable returns by enabling investors to participate in the growth prospect of the Malaysian market which is in compliance with Shariah principles.',
      investmentType: 'Capital Growth',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'MYR',
          oneMonth: 3.2,
          oneYear: 42.8,
          threeYear: 29.1,
          sinceInception: 131.8
        }],
      } ],
      nav: 0.6672,
      ytdReturn: 30.1,
      tags:[ 'Equity', 'Shariah', 'EPF-MIS']
    },
    {
      id: 6,
      name: 'AHAM ASEAN Flexi Fund',
      description: 'The Fund aims to provide investors with capital appreciation and regular income over the medium to long-term period.',
      investmentType: 'Income & Growth',
      performanceHistory: [{
        id: 1001,
        totalReturn: [{
          returnIn: 'MYR',
          oneMonth: 1.6,
          oneYear: 5.6,
          threeYear: 16.0,
          sinceInception: 66.0
        }],
      } ],
      nav: 0.5786,
      ytdReturn: 13.4,
      tags:[ 'Mixed Assets', 'Conventional', 'EPF-MIS']
    },
  ]);
});

app.post('/api/invest', (req, res) => {
  const { fundId, fundName, amount, units } = req.body;

  const newInvestment = {
    id: investments.length + 1,
    fundId,
    fundName,
    amount,
    units,
    date: new Date(),
  };

  investments.push(newInvestment);

  res.json({ message: 'Investment successful', investment: newInvestment });
});

app.get('/api/portfolio', (req, res) => {
  res.json(investments); 
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
