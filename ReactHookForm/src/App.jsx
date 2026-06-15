import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Here is the input data: ");
      console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> 
            First Name:
          </label>
          <input 
          className={errors.firstName ? 'input-error': "" }
          type="text" {...register('firstName', { 
            required: true, 
            maxLength: {value: 20, message:"Please enter less than 20 characters"}, 
            minLength: {value: 3, message:"Please enter more than 3 characters"} 
            })} />
            {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label> 
            Middle Name:
          </label>
          <input type="text" {...register('middleName', { required: false })} />
        </div>
        <br />
        <div>
          <label> 
            Last Name:
          </label>
          <input type="text" {...register('lastName', { 
            required: true, 
            maxLength: {value: 20, message:"Please enter less than 20 characters"}, 
            minLength: {value: 3, message:"Please enter more than 3 characters"} 
            })} />
            {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting the Form" : "Submit"} />
      </form>
    </div>
  )
}

export default App
