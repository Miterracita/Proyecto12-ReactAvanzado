import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import "./MedicationForm.css";

const MedicationForm = ({addMedication}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    addMedication({ name: data.name, pills: data.pills, hours: data.hours });
  }

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
          <label className={errors.hours && "txt-error"}>Cada cuanto tiempo debe tomarse esta cantidad: </label>
          <input style={{width:'100%'}} type="text" {...register("hours", {required: "Explica brevemente, cada cuanto tiempo debe realizarse la misma toma"})} className={errors.hours && "input-error"} />
          {errors.hours && <p className='txt-error'>{errors.hours.message}</p>}
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

MedicationForm.propTypes = {
    addMedication: PropTypes.func.isRequired,
  };

export default MedicationForm;
