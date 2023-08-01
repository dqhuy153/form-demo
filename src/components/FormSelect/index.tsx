import { HTMLProps, ReactNode, memo, useRef } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

const FormSelect = ({
  label,
  required,
  name,
  errorMessage,
  options,
  register,
  ...props
}: Props) => {


  return (
    <div className="ml-1 my-4 flex align-middle">
      <label className="mr-4">{label} {required && '(*)'}</label>
      <select {...register(name)} className="border-2 mx-2" {...props}>
        {options.map(option => {
          return (
            <option value={option.value} key={option.value}>{option.label}</option>
          )
        })}
      </select>
      {errorMessage &&
        <p className="p-1 text-red-500">{errorMessage}</p>
      }
    </div>
  )
}

export interface SelectOption {
  label: ReactNode;
  value: any;
}

type Props = HTMLProps<HTMLSelectElement> & {
  options: SelectOption[];
  label: string;
  required?: boolean;
  name: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

export default memo(FormSelect)
