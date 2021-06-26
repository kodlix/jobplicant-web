import { InputText } from "primereact/inputtext";

const CustomInputField = ({ id, type, inputLabel, register, inputChange }) => {
    return (
        <InputText
            id={id}
            type={type ? type : "text"}
            name={id}
            {...register(id, {
                required: `* ${inputLabel} is required`,
            })}
            onChange={inputChange}
        />
    );
};

export default CustomInputField