import { InputText } from "primereact/inputtext";

const InputField = ({
  id,
  inputLabel,
  register,
  inputChange,
  defaultValue,
  rows,
  className,
  placeholder,
  type,
  ...others
}) => {
  return (
    <InputText {...others}
      rows={rows}
      id={id}
      type={type}
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
