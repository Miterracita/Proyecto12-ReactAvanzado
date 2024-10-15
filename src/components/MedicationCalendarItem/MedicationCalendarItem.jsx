import PropTypes from 'prop-types';
import "./MedicationCalendarItem.css";

const MedicationCalendarItem = ({ medication }) => {
  return (
    <li className='calendar-item'>
      <div className='list-item'>
        <p className='name'>{medication.name}</p>
        <p className='pills'>{medication.pills}</p>
        <p className='hours'>{medication.hours}</p>
      </div>
    </li>
  );
};


MedicationCalendarItem.propTypes = {
  medication: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pills: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MedicationCalendarItem;
