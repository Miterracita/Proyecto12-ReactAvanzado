import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import "./MedicationForm.css";

const MedicationForm = ({addMedication, editingIndex, medications}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  useEffect(() => {
    if (editingIndex !== null) {
      const medication = medications[editingIndex];
      setValue('name', medication.name);
      setValue('pills', medication.pills);
      setValue('hours', medication.hours);
      setValue('days', medication.days);
    } else {
      reset({ name: '', pills: '', hours: '', days: '' });
    }
  }, [editingIndex, medications, setValue, reset]);

  const submit = (data) => {
    addMedication({ 
      name: data.name, 
      pills: data.pills, 
      hours: data.hours, 
      days: data.days,
    });
    reset({ name: '', pills: '', hours: '', days: '' });
  };

  return (
    <div className='box-form'>
      <form onSubmit={handleSubmit(submit)} className='add-medication-form'>
        <div>
          <label className={errors.name && "txt-error"}>Nombre del medicamento: </label>
          <input style={{width:'100%'}} type="text" {...register("name", {required: "Completa el nombre del medicamento"})} className={errors.name && "input-error"} />
          {errors.name && <p className='txt-error'>{errors.name.message}</p>}
        </div>
        <div>
          <label className={errors.pills && "txt-error"}>Cantidad de pastillas a tomar: </label>
          <input type="number" {...register("pills", {required: "Indica la cantidad de pastillas a tomar"})} className={errors.pills && "input-error"} />
          {errors.pills && <p className='txt-error'>{errors.pills.message}</p>}
        </div>
        <div>
          <label className={errors.hours && "txt-error"}>Cada cuantas horas debe tomarse esta cantidad: </label>
          <input style={{width:'100%'}} type="text" {...register("hours", {required: "Explica brevemente, cada cuanto tiempo debe realizarse la misma toma"})} className={errors.hours && "input-error"} />
          {errors.hours && <p className='txt-error'>{errors.hours.message}</p>}
        </div>
        <div>
          <label className={errors.hours && "txt-error"}>¿Qué días de la semana?: </label>
          <select multiple {...register("days", { required: "Selecciona los días de la semana" })} className={errors.days && "input-error"}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          {errors.days && <p className='txt-error'>{errors.days.message}</p>}

        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

MedicationForm.propTypes = {
    addMedication: PropTypes.func.isRequired,
    editingIndex: PropTypes.number,
    medications: PropTypes.array.isRequired,
  };

export default MedicationForm;
