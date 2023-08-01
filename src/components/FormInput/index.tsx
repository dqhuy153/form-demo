import { HTMLProps, memo } from "react";
import { UseFormRegister } from "react-hook-form"

const FormInput = ({
  label,
  required,
  name,
  errorMessage,
  register,
  ...props
}: Props) => {
  return (
    <div className="flex align-middle m-1">
      <div className="min-w-[110px]">
        <label className="p-1">{label} {required && '(*)'}</label>
      </div>
      <div>
        <input {...register(name)} className="border-2 p-1" {...props} />
      </div>
      {errorMessage &&
        <p className="p-1 text-red-500">{errorMessage}</p>
      }
    </div>
  )
}

type Props = HTMLProps<HTMLInputElement> & {
  label: string;
  required?: boolean;
  name: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

export default memo(FormInput)
