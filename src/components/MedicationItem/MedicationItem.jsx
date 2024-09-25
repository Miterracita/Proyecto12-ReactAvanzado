import PropTypes from 'prop-types';
import "./MedicationItem.css";
const MedicationItem = ({ medication, removeMedication }) => {
  return (
    <li className='medication-item'>
      <div className='list-item'>
        <p><span>Name:</span> {medication.name}</p>
        <p><span>Number of pills:</span> {medication.pills}</p>
        <p><span>Hours:</span> {medication.hours}</p>
      </div>
      <div><button className="btn-small" onClick={removeMedication}>Remove</button></div>   
    </li>
  );
};


MedicationItem.propTypes = {
  medication: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pills: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
  }).isRequired,
  removeMedication: PropTypes.func.isRequired,
};

export default MedicationItem;
