
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [steps, setSteps] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the steps data here
    console.log(`Steps completed: ${steps}`);
    console.log(window.location.href)

    axios.post('http://localhost:8000/backend/save', {"steps":steps,"url":window.location.href})
      .then(response => {
        console.log('Data successfully submitted:', response.data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label htmlFor="stepsInput" className="form-label">Number of Steps Completed:</label>
          <input
            type="number"
            className="form-control"
            id="stepsInput"
            placeholder="Enter number of steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form
