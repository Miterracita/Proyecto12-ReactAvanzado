import { useState, useEffect } from 'react';
import MedicationList from '../../components/MedicationList/MedicationList';
import MedicationForm  from '../../components/MedicationForm/MedicationForm';
import WeekCalendar  from '../../components/WeekCalendar/WeekCalendar';

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

  return { medications, addMedication, removeMedication, editMedication };
};

/*Component*/
const Home = () => {
  const { medications, addMedication, removeMedication, editMedication } = useMedications();
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
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
  
  const toggleShowList = () => {
    if (!showList) {
      setShowList(true);
      setShowCalendar(false);
    } else {
      setShowList(false);
    }
  };

  const toggleShowCalendar = () => {
    if (!showCalendar) {
      setShowCalendar(true);
      setShowList(false);
    } else {
      setShowCalendar(false);
    }
  };

  return (
    <div className='home-content'>
      <h1>Medication List</h1>
      <div className='ico-home'>
        <img src="../../src/assets/medication.png" alt="medication-icon" />
      </div>

      <div className='btn-box'>
        <button className="btn" onClick={toggleShowList}>{showList ? 'Ocultar listado' : 'Ver listado'}</button>
        <button className="btn" onClick={toggleShowCalendar}>{showCalendar ? 'Ocultar Calendario' : 'Ver Calendario'}</button>
        <button className="btn-secondary" onClick={() => setShowForm(true)}>Add Medication</button>
      </div>

      {showForm && 
        <MedicationForm addMedication={handleAddMedication} editingIndex={editingIndex} medications={medications} />
      }

      {showList &&
        <MedicationList 
          medications={medications} 
          removeMedication={removeMedication} 
          editMedication={handleEditClick}
        />
      }
      {showCalendar &&
        <WeekCalendar medications={medications} onClose={() => setShowCalendar(false)} />
      }
    </div>
  );
};

export default Home;
