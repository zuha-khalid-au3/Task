
import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { Doughnut} from 'react-chartjs-2';
import { Stocks } from "./Stocks";


// const row = d => {
//   d.population = +d.population;
//   return d;

const initialState1 = [
  {
    "Scrip": "AADR",
    "Quantity": 430,
    "Price": "$50.30",
    "Avg": "$41.75",
    "InvestedAmount": "17,952.07",
    "portfolio": "2,206.00",
    "Unrealized": "$3,676.93",
    "Return": "20.48%"
  },
  {
    "Scrip": "MFEM",
    "Quantity": 210,
    "Price": "$23.20",
    "Avg": "$22.50",
    "InvestedAmount": "4,725.84",
    "portfolio": 581,
    "Unrealized": "$146.16",
    "Return": "3.09%"
  },
  {
    "Scrip": "JPEM",
    "Quantity": 328,
    "Price": "$52.50",
    "Avg": "$56.70",
    "InvestedAmount": "18,597.60",
    "portfolio": "2,286.00",
    "Unrealized": "-$1,377.60",
    "Return": "-7.41%"
  },
  {
    "Scrip": "KEMQ",
    "Quantity": 801,
    "Price": "$20.40",
    "Avg": "$22.24",
    "InvestedAmount": 17811.04,
    "portfolio": 2189,
    "Unrealized": "-$1,470.64",
    "Return": "-8.26%"
  },
  {
    "Scrip": "KLDW",
    "Quantity": 523,
    "Price": "$32.90",
    "Avg": "$26.32",
    "InvestedAmount": 13765.36,
    "portfolio": "1,692.00",
    "Unrealized": "$3,441.34",
    "Return": "25.00%"
  },
  {
    "Scrip": "KOIN",
    "Quantity": 335,
    "Price": "$25.40",
    "Avg": "$25.40",
    "InvestedAmount": "8,509.00",
    "portfolio": 10.46,
    "Unrealized": "$100",
    "Return": "0.00%"
  }
];


const doughNutState={
  labels: ['Mutual Fund','ETFs'],
datasets: [
{
backgroundColor: [
'#B21F00',
'#C9DE00',
],
hoverBackgroundColor: [
'#501800',
'#4B5000',
],
data: [800,600]
}
]
}


const App = () => {
  const [data, setData] = useState(doughNutState);
  const [sum,setSum]=useState(0);
  


//   const portfolioPercentage = data => {    
//     let sum=0
   
    
//  for (let i in data ){
// for (const p in data[i]) {
//  // console.log(p)
//   if(p==='portfolio'){
//     let z= Number(data[i][p])
//     sum+=z;
//   }
// //console.log(obj[i][p]);
// }
// return sum;
//  }
//    };
  // useEffect(() => {
  //   csv('data.csv').then(setData);
  //   setSum(portfolioPercentage(data))
  // }, []);
  // console.log(data)
  return (
    <div>
    <div className="stks"> 
    <Stocks />
    </div>
    <div className="dnt">
    <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              text:'Portfolio',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

    </div>
    </div>
    
  );
};

export default App;







