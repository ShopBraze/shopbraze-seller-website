import { Controller } from 'react-hook-form'
import { TextInputProps } from './text-input.type'
import { useState } from 'react'
import Image from 'next/image'

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

TextInput.Controller = ({ name, control, label, maxLength, className, placeholder, showFloatingLabel, readOnly, required, disabled, rules, textareaLeftIcon }: TextInputProps) => {
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
            <label htmlFor={name} className={`cursor-text ${showFloatingLabel ? `absolute transition-all duration-500 ${isFloating ? 'text-gray-900 top-[-20px] left-0 text-xs font-semibold' : '  text-gray-400 font-semibold top-[9px] left-[20px]'}` : ''} ${className?.label}`}>
              {label}
            </label>
          )}

          {textareaLeftIcon ?

            <div className={`flex items-center gap-2 w-full ${className?.textarea}`}>
              <Image src={textareaLeftIcon} alt="" className="" />
              <input
                ref={field.ref}
                type='text'
                id={name}
                value={field.value}
                maxLength={maxLength}
                onChange={field.onChange}
                onBlur={showFloatingLabel ? () => handleBlur(field.value) : field.onBlur}
                onFocus={handleFocus}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={showFloatingLabel ? '' : placeholder}
                className={'focus:outline-none focus:ring-0 focus:border-[#E1E4EA] w-full'}
              />
            </div>
            :
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
              className={`focus:outline-none focus:ring-0 focus:border-[#E1E4EA] ${className?.textarea}`}
            />
          }

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