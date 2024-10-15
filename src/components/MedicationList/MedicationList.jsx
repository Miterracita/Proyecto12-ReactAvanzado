import MedicationItem from './../MedicationItem/MedicationItem';
import PropTypes from 'prop-types';

import "./MedicationList.css";


const MedicationList = ({ medications, removeMedication, editMedication }) => {
  return (
    <ul className='medication-list'>
      {medications.map((medication, index) => (
        <MedicationItem 
          key={index}
          medication={medication}
          removeMedication={() => removeMedication(index)}
          editMedication={() => editMedication(index)}
        />
      ))}
    </ul>
  );
};

MedicationList.propTypes = {
  medications: PropTypes.array.isRequired,
  removeMedication: PropTypes.func.isRequired,
  editMedication: PropTypes.func.isRequired,
};

export default MedicationList;
