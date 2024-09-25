import { useReducer, useState } from 'react';
import { initialState, medicationsReducer } from '../../reducers/medicationsReducer';
import MedicationList from '../../components/MedicationList/MedicationList';
import MedicationForm  from '../../components/MedicationForm/MedicationForm';

import './Home.css';

/*Custom hook*/
const useMedications = () => {
  const [medications, setMedications] = useState([]);

  const addMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return { medications, addMedication, removeMedication };
};

/*Component*/
const Home = () => {
  const [state, dispatch] = useReducer(medicationsReducer, initialState);
  const { medications, addMedication, removeMedication } = useMedications();
  const [showForm, setShowForm] = useState(false);


  const handleAddMedication = (medication) => {
    dispatch({ type: 'ADD_MEDICATION', payload: medication });
    addMedication(medication);
    setShowForm(false); // Ocultar el formulario después de agregar la medicación
  };

  return (
    <div className='home-content'>
      <h1>Medication List</h1>
      <div className='ico-home'>
        <img src="../../src/assets/medication.png" alt="medication-icon" />
      </div>
      <button className="btn" onClick={() => setShowForm(true)}>Add Medication</button>

      {showForm && 
        <MedicationForm addMedication={handleAddMedication} />
      }
      <MedicationList medications={medications} removeMedication={(index) => {
        dispatch({ type: 'REMOVE_MEDICATION', payload: index });
        removeMedication(index);
      }} />
    </div>
  );
};

export default Home;
