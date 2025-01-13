import { RegisterOptions } from 'react-hook-form';

type Rules = RegisterOptions;

export type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'className'> & {
  name: string
  control?: any
  label?: React.ReactNode | string,
  showFloatingLabel?: boolean
  className?: {
    container?: string
    label?: string
    textarea?: string
  }
  error?: {
    message?: string
  }
  rules?: Rules
}


