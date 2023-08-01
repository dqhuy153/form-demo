import { useCallback, useMemo, useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { FormInput, FormSelect, TabsBar, } from "src/components"
import { TabList } from "src/components/TabsBar"
import { initialViewValue } from "../helpers"
import { FormValues, TemplateType } from "../types"
import { templateOptions } from "./helpers"

const DEFAULT_VIEW_INDEX = 0

const MainTab1 = ({ form }: Props) => {
  const [currentViewTab, setCurrentViewTab] = useState<string>(`${DEFAULT_VIEW_INDEX}`);

  const { formState: { errors }, register, watch, setValue, trigger } = form;

  const viewsData = watch('views');
  const currentViewData = viewsData[Number(currentViewTab)];
  const currentViewError = errors.views?.[Number(currentViewTab)];

  const handleAddView = useCallback(async () => {
    const isValidForm = await trigger();

    if (!isValidForm) return;

    const updatedViews = [...viewsData, initialViewValue]

    setValue('views', updatedViews);
    setCurrentViewTab(`${updatedViews.length - 1}`)
  }, [viewsData, errors, setValue])

  const viewTabsList: TabList[] = useMemo(() => {
    const viewsList = viewsData.map((_, index) => {
      return {
        label: `View${index}`,
        value: `${index}`
      }
    })

    return [
      ...viewsList,
      {
        label: '+',
        value: '',
        preventDefaultOnChange: true,
        callback: handleAddView
      }
    ]
  },
    [viewsData.length, handleAddView])

  const handleViewTabChange = useCallback((value: string) => {
    setCurrentViewTab(value)
  }, [])

  return (
    <div>
      <TabsBar tabsList={viewTabsList} value={currentViewTab} onTabChange={handleViewTabChange} />

      <FormSelect
        options={templateOptions}
        label="Template"
        name={`views.${Number(currentViewTab)}.template`}
        value={watch(`views.${Number(currentViewTab)}.template`) as string}
        register={register}
        errorMessage={currentViewError?.template?.message}
      />

      {currentViewData?.template === TemplateType.TEMPLATE_1 && (
        <>
          <FormInput
            label="Email"
            name={`views.${Number(currentViewTab)}.email`}
            required
            errorMessage={currentViewError?.email?.message}
            register={register}
          />
          <FormInput
            label="Age"
            name={`views.${Number(currentViewTab)}.age`}
            type='number'
            errorMessage={currentViewError?.age?.message}
            register={register}
          />
          <FormInput
            label="Gender"
            name={`views.${Number(currentViewTab)}.gender`}
            errorMessage={currentViewError?.gender?.message}
            register={register}
          />
        </>
      )}

      {currentViewData?.template === TemplateType.TEMPLATE_2 && (
        <>
          <FormInput
            label="Id"
            name={`views.${Number(currentViewTab)}.id`}
            required
            errorMessage={currentViewError?.id?.message}
            register={register}
          />
          <FormInput
            label="Username"
            name={`views.${Number(currentViewTab)}.username`}
            required
            errorMessage={currentViewError?.username?.message}
            register={register}
          />
          <FormInput
            label="Password"
            name={`views.${Number(currentViewTab)}.password`}
            errorMessage={currentViewError?.password?.message}
            register={register}
          />
        </>
      )}
    </div>
  )
}

interface Props {
  form: UseFormReturn<FormValues>
}

export default MainTab1