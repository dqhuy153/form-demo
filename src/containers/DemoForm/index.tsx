import { yupResolver } from "@hookform/resolvers/yup"
import { memo, useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { TabsBar } from "../../components"
import MainTab0 from "./MainTab0"
import MainTab1 from "./MainTab1"
import { formSchema, initialFormValues, mainTabsList } from "./helpers"
import { FormValues, MainTab } from "./types"

const DemoForm = () => {
  const [currentMainTab, setCurrentMainTab] = useState<string>(MainTab.MAIN_0)

  const form = useForm<FormValues>({
    defaultValues: initialFormValues,
    mode: 'onChange',
    resolver: yupResolver(formSchema)
  });

  const handleSubmitValidForm = (values: FormValues) => {
    console.log('values: ', values);
    alert('Success!');
  }

  const handleSubmitInvalidForm = () => {
    alert('Please fill all required fields!')
  }

  const handleMainTabChange = useCallback((value: string) => {
    setCurrentMainTab(value)
  }, [])


  const getTabContent = () => {
    switch (currentMainTab) {
      case MainTab.MAIN_0:
        return <MainTab0 form={form} />

      case MainTab.MAIN_1:
        return <MainTab1 form={form} />

      default:
        return null;
    }

  }

  return (
    <div className="w-[50vw]" >
      <form onSubmit={form.handleSubmit(handleSubmitValidForm, handleSubmitInvalidForm)}>
        <div className="p-4 border-b-2 w-full flex justify-end">
          <button type="submit" className="bg-slate-200">Submit</button>
        </div>

        <div>
          <TabsBar tabsList={mainTabsList} value={currentMainTab} onTabChange={handleMainTabChange} />
          {getTabContent()}
        </div>

      </form>
    </div>
  )
}

export default memo(DemoForm)