import { useState, useEffect } from 'react';
import MedicationList from '../../components/MedicationList/MedicationList';
import MedicationForm  from '../../components/MedicationForm/MedicationForm';

import './Home.css';

/*Custom hook*/
const useMedications = () => {
  const [medications, setMedications] = useState(() => {
    // Leer la lista de medicamentos en el localStorage al iniciar el renderizado
    const savedMedications = localStorage.getItem('medications');
    return savedMedications ? JSON.parse(savedMedications) : [];
  });

  useEffect(() => {
    // Guardar los cambios en el localstorgate cuando sufra cambios
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  const addMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const editMedication = (index, updatedMedication) => {
    const updatedMedications = medications.map((med, i) => (i === index ? updatedMedication : med));
    setMedications(updatedMedications);
  };

  const updateMedicationDate = (medication, newDate) => {
    const updatedMedications = medications.map((med) =>
      med.name === medication.title ? { ...med, startDate: newDate, endDate: newDate } : med
    );
    setMedications(updatedMedications);
  };

  return { medications, addMedication, removeMedication, editMedication, updateMedicationDate };
};

/*Component*/
const Home = () => {
  const { medications, addMedication, removeMedication, editMedication, updateMedicationDate } = useMedications();
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);


  const handleAddMedication = (medication) => {
    if (editingIndex !== null) {
      editMedication(editingIndex, medication);
      setEditingIndex(null);
    } else {
      addMedication(medication);
    }
    setShowForm(false);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  return (
    <div className='home-content'>
      <h1>Medication List</h1>
      <div className='ico-home'>
        <img src="../../src/assets/medication.png" alt="medication-icon" />
      </div>
      <button className="btn" onClick={() => setShowForm(true)}>Add Medication</button>

      {showForm && 
        <MedicationForm addMedication={handleAddMedication} editingIndex={editingIndex} medications={medications} />
      }

      <MedicationList 
        medications={medications} 
        removeMedication={removeMedication} 
        editMedication={handleEditClick}
      />

    </div>
  );
};

export default Home;
