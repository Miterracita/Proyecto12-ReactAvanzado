import PropTypes from 'prop-types';
import "./MedicationItem.css";

const MedicationItem = ({ medication, removeMedication, editMedication }) => {
  return (
    <li className='medication-item'>
      <div className='list-item'>
        <p><span>Name:</span> {medication.name}</p>
        <p><span>Number of pills:</span> {medication.pills}</p>
        <p><span>Hours:</span> {medication.hours}</p>
        <p><span>Days:</span> {medication.days}</p>
      </div>
      <div>
        <button className="btn-small-dark" onClick={editMedication}>Edit</button>
        <button className="btn-small" onClick={removeMedication}>Remove</button>
      </div>
    </li>
  );
};


MedicationItem.propTypes = {
  medication: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pills: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  removeMedication: PropTypes.func.isRequired,
  editMedication: PropTypes.func.isRequired,
};

export default MedicationItem;
