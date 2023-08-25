import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import  { useEffect, useState } from 'react';
import axios, { all } from 'axios';

const Compare = () => {

  const [paridhiSteps,setParidhiSteps]=useState("")
  const [rudreshSteps,setRudreshSteps]=useState("")
  const [allData,setAllData]=useState([])
  const [days,setDays]=useState("")
  const [loading,setLoading]=useState(true)
  Chart.register(...registerables);
  




  

  
  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get('http://localhost:8000/backend/get');
        setAllData(response.data);
         // Call manipulateData() after data is fetched
        console.log(response.data);
        setParidhiSteps(response.data.paridhi)
        setRudreshSteps(response.data.rudresh)
        setDays(response.data.days)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getAll();
  }, []);
  
  


  
  // Sample steps data
  
  

  // Prepare chart data
  const data = {
    labels: days,
    datasets: [
      {
        label: 'Paridhi',
        data: paridhiSteps,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Rudresh',
        data: rudreshSteps,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Determine leader
  

  return (
    <div>
        {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Steps Data Comparison</h1>
      <Line data={data} options={options} />
        </div>)}
      
    </div>
      
    
  );
};

export default Compare;
