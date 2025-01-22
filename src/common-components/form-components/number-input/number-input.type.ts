import { RegisterOptions } from 'react-hook-form';

type Rules = RegisterOptions;

export type NumberInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'className'> & {
  name: string
  control?: any
  label?: React.ReactNode | string,
  min?: number
  max?: number
  maxLength?: number
  showFloatingLabel?: boolean
  className?: {
    container?: string
    label?: string
    input?: string
  }
  error?: {
    message?: string
  }
  rules?: Rules
  inputLeftIcon?: any
}


