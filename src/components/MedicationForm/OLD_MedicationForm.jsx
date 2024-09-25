import { useState } from 'react';
import PropTypes from 'prop-types';
import "./MedicationForm.css";

const MedicationForm = ({ addMedication }) => {
  const [name, setName] = useState('');
  const [pills, setPills] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && pills && hours) {
      addMedication({ name, pills, hours });
      setName('');
      setPills('');
      setHours('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-medication-form'>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Number of Pills: </label>
        <input type="number" value={pills} onChange={(e) => setPills(e.target.value)} />
      </div>
      <div>
        <label>Hours: </label>
        <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} />
      </div>
      <button className="btn-save" type="submit">Save</button>
    </form>
  );
};

MedicationForm.propTypes = {
    addMedication: PropTypes.func.isRequired,
  };

export default MedicationForm;
