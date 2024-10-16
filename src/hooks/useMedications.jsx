import { useState, useEffect } from 'react';

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

export default useMedications;