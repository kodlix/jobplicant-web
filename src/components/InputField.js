import { InputText } from "primereact/inputtext";

const InputField = ({
  id,
  inputLabel,
  register,
  inputChange,
  defaultValue,
  rows,
  className,
  placeholder
}) => {
  return (
    <InputText
      rows={rows}
      id={id}
      type="text"
      name={id}
      defaultValue={defaultValue}
      {...register(id, {
        required: `* ${inputLabel} is required`,
      })}
      onChange={inputChange} 
      className={className} 
      placeholder={placeholder}
    />
  );
};

export default InputField;
