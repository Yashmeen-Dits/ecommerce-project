import { Field, ErrorMessage } from "formik";

const CustomInput=(
    {
        label,
        type,
        name,
        placeholder,
        min,
    }
)=>
{
    return(
        <div className="form-group">
            <label>{label}</label>
            
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
      />

       <ErrorMessage
        name={name}
        component="div"
        className="error"
      />

        </div>
        

    )
}

export default CustomInput;