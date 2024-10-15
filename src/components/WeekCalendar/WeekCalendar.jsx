import MedicationCalendarItem from './../MedicationCalendarItem/MedicationCalendarItem';
import PropTypes from 'prop-types';

import './WeekCalendar.css';

const WeekCalendar = ({ medications, onClose }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className='calendar-container'>
      <div className='close' onClick={onClose}>
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.714844 1.37102L19.2863 20.4359" stroke="#252525" strokeLinecap="square"/>
          <path d="M0.714844 20.4359L19.2863 1.37102" stroke="#252525" strokeLinecap="square"/>
        </svg>
      </div>

      <div className='days-box'>
        {daysOfWeek.map(day => (
          <div key={day} id={day} className='day-box'>
            <h3>{day}</h3>
            <div id={`${day.toLowerCase()}-list`}>
              {medications
                .filter(medication => medication.days.includes(day))
                .map((medication, index) => (
                  <MedicationCalendarItem
                    key={index}
                    medication={medication}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>      
    </div>
  );
};

WeekCalendar.propTypes = {
  medications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pills: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
      days: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WeekCalendar;
