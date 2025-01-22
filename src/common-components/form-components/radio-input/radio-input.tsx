import { RadioInputProps } from "./radio-input.type"

const RadioInput = ({
  containerClassName,
  labelClassName,
  label,
  name,
  required,
  errorMessage,
  inputClassName,
  register,
  checkBoxName: checkBoxId,
  labelLeft,
  labelRight,
  defaultValue,
}: RadioInputProps) => {
  const uniqueId = `${name}-${checkBoxId}`
  return (
    <div className={containerClassName}>
      {labelLeft && (
        <label htmlFor={uniqueId} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        id={uniqueId}
        name={name}
        value={checkBoxId}
        {...register(name, { required: required ? errorMessage : false })}
        type='radio'
        checked={defaultValue}
        className={inputClassName}
      />
      {labelRight && (
        <label htmlFor={uniqueId} className={labelClassName}>
          {label}
        </label>
      )}
    </div>
  )
}

export default RadioInput
