import { useReducer } from 'react';

import MedicationList from '../../components/MedicationList/MedicationList';
import MedicationForm  from '../../components/MedicationForm/MedicationForm';
import WeekCalendar  from '../../components/WeekCalendar/WeekCalendar';

import useMedications from '../../hooks/useMedications';

import initialState from '../../reducers/initialState';
import showReducer from '../../reducers/showReducer';

import './Home.css';

/*Component*/
const Home = () => {
  const { medications, addMedication, removeMedication, editMedication } = useMedications();
  const [state, dispatch] = useReducer(showReducer, initialState);


  const handleAddMedication = (medication) => {
    if (state.editingIndex !== null) {
      editMedication(state.editingIndex, medication);
    } else {
      addMedication(medication);
    }
    dispatch({ type: 'HIDE_FORM' });
  };

  const handleEditClick = (index) => {
    dispatch({ type: 'SHOW_FORM', payload: index });
  };

  const toggleShowList = () => {
    dispatch({ type: 'TOGGLE_LIST' });
  };

  const toggleShowCalendar = () => {
    dispatch({ type: 'TOGGLE_CALENDAR' });
  };

  return (
    <div className='home-content'>
      <h1>Medication List</h1>
      <div className='ico-home'>
        <img src="../../src/assets/medication.png" alt="medication-icon" />
      </div>

      <div className='btn-box'>
        <button className="btn" onClick={toggleShowList}>{state.showList ? 'Ocultar listado' : 'Ver listado'}</button>
        <button className="btn" onClick={toggleShowCalendar}>{state.showCalendar ? 'Ocultar Calendario' : 'Ver Calendario'}</button>
        <button className="btn-secondary" onClick={() => dispatch({ type: 'SHOW_FORM', payload: null })}>Add Medication</button>
      </div>

      {state.showForm && 
        <MedicationForm addMedication={handleAddMedication} editingIndex={state.editingIndex} medications={medications} />
      }

      {state.showList &&
        <MedicationList 
          medications={medications} 
          removeMedication={removeMedication} 
          editMedication={handleEditClick}
        />
      }
      {state.showCalendar &&
        <WeekCalendar medications={medications} onClose={() => dispatch({ type: 'TOGGLE_CALENDAR' })} />
      }
    </div>
  );
};

export default Home;
