import { Controller } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'
import { NumberInputProps } from './number-input.type'
import "./number-input.css"

const NumberInput = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

NumberInput.Default = ({ name, label, placeholder, className, value, onChange }: NumberInputProps) => {
  return (
    <div className={className?.container}>
      {label && (
        <label htmlFor={name} className={className?.label}>
          {label}
        </label>
      )}
      <input type='number' id={name} value={value} onChange={onChange} className={className?.input} placeholder={placeholder} />
    </div>
  )
}

NumberInput.Register = () => { }

NumberInput.Controller = ({ name, control, label, min, max, maxLength, className, placeholder, showFloatingLabel, readOnly, required, disabled, rules, inputLeftIcon }: NumberInputProps) => {
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

          {inputLeftIcon ?

            <div className={`flex items-center gap-2 w-full ${className?.input}`}>
              <Image src={inputLeftIcon} alt="" className="" />
              <input
                ref={field.ref}
                type='number'
                id={name}
                value={field.value}
                min={min}
                max={max}
                onChange={field.onChange}
                onBlur={showFloatingLabel ? () => handleBlur(field.value) : field.onBlur}
                onFocus={handleFocus}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={showFloatingLabel ? '' : placeholder}
                onWheel={(e) => e.currentTarget.blur()}
                className={'focus:outline-none focus:ring-0 focus:border-[#E1E4EA] w-full'}
                onInput={(e) => {
                  if (maxLength) {
                    const input = e.target as HTMLInputElement;
                    if (input.value.length > 10) {
                      input.value = input.value.slice(0, maxLength);
                    }
                  }
                }}
              />
            </div>
            :
            <input
              ref={field.ref}
              type='number'
              id={name}
              value={field.value}
              min={min}
              max={max}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (inputValue.length <= 10) {
                  field.onChange(e);
                }
              }}
              onBlur={showFloatingLabel ? () => handleBlur(field.value) : field.onBlur}
              onFocus={handleFocus}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={showFloatingLabel ? '' : placeholder}
              onWheel={(e) => e.currentTarget.blur()}
              className={`focus:outline-none focus:ring-0 focus:border-[#E1E4EA] ${className?.input}`}
              onInput={(e) => {
                if (maxLength) {
                  const input = e.target as HTMLInputElement;
                  if (input.value.length > 10) {
                    input.value = input.value.slice(0, maxLength);
                  }
                }
              }}
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

export default NumberInput