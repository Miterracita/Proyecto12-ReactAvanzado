import MedicationItem from './../MedicationItem/MedicationItem';
import PropTypes from 'prop-types';

const MedicationList = ({ medications, removeMedication }) => {
  return (
    <ul className='medication-list'>
      {medications.map((medication, index) => (
        <MedicationItem key={index} medication={medication} removeMedication={() => removeMedication(index)} />
      ))}
    </ul>
  );
};

MedicationList.propTypes = {
  medications: PropTypes.array.isRequired,
  removeMedication: PropTypes.func.isRequired,
};

export default MedicationList;
