import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../types"
import { FormInput } from "../../../components";

const MainTab0 = ({ form }: Props) => {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <FormInput
        label="Name"
        name="name"
        required
        errorMessage={errors.name?.message}
        register={register}
      />
      <FormInput
        label="Title"
        name="title"
        required
        errorMessage={errors.title?.message}
        register={register}
      />
    </div>
  )
}

interface Props {
  form: UseFormReturn<FormValues>
}
export default MainTab0
