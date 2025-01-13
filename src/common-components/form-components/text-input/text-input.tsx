import { Controller } from 'react-hook-form'
import { TextInputProps } from './text-input.type'
import { useState } from 'react'

const TextInput = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

TextInput.Default = ({ name, label, placeholder, className, value, onChange }: TextInputProps) => {
  return (
    <div className={className?.container}>
      {label && (
        <label htmlFor={name} className={className?.label}>
          {label}
        </label>
      )}
      <input type='text' id={name} value={value} onChange={onChange} className={className?.textarea} placeholder={placeholder} />
    </div>
  )
}

TextInput.Register = () => { }

TextInput.Controller = ({ name, control, label, className, placeholder, showFloatingLabel, readOnly, required, disabled, error, rules }: TextInputProps) => {
  const [isFloating, setIsFloating] = useState(false);
  const handleFocus = () => setIsFloating(true);
  const handleBlur = (value: any) => {
    if (!value) setIsFloating(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
        ...rules
      }}
      render={({ field, fieldState }) => (
        <div className={`${className?.container} relative ${disabled ? "bg-gray-100" : ''}`}>
          {label && (
            <label htmlFor={name} className={` ${showFloatingLabel ? `absolute transition-all duration-500 ${isFloating ? 'text-gray-900 top-[-20px] left-0 text-xs font-semibold' : '  text-gray-400 font-semibold top-[9px] left-[20px]'}` : ''} ${className?.label}`}>
              {label}
            </label>
          )}
          <input
            ref={field.ref}
            type='text'
            id={name}
            value={field.value}
            onChange={field.onChange}
            onBlur={showFloatingLabel ? () => handleBlur(field.value) : field.onBlur}
            onFocus={handleFocus}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={showFloatingLabel ? '' : placeholder}
            className={className?.textarea}
          />
          {/* {error?.message && fieldState.error && (
            <div className='pl-1 pt-1'>
              <p className='text-error-500 text-xs font-semibold'>{error.message}</p>
            </div>
          )} */}

          {fieldState.error && fieldState.error.message && (
            <div className="pl-1 pt-1">
              <p className="text-error-500 text-xs font-semibold">
                {fieldState.error.message}
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default TextInput