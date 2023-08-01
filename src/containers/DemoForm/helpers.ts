import { TabList } from '../../components/TabsBar'
import { FormValues, MainTab, TemplateType } from './types'
import * as yup from 'yup'

export const initialViewValue = {
  template: TemplateType.NONE,
}

export const initialFormValues = {
  name: '',
  title: '',
  views: [initialViewValue],
}

export const initialTemplate1Values = {
  email: '',
  age: null,
  gender: null,
}

export const initialTemplate2Values = {
  id: '',
  username: '',
  password: '',
}

export const mainTabsList: TabList[] = [
  {
    label: '0',
    value: MainTab.MAIN_0,
  },
  {
    label: '1',
    value: MainTab.MAIN_1,
  },
]

export const REQUIRED_MESSAGE = 'Required'

export const viewSchema = yup.object().shape({
  template: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .test({
      message: 'Required',
      test: value => {
        return !!value && value !== TemplateType.NONE
      },
    }),

  email: yup.string().when(['template'], ([template], schema) => {
    if (template === TemplateType.TEMPLATE_1) {
      return schema.email('Invalid email').required(REQUIRED_MESSAGE)
    }

    return schema.nullable().optional()
  }),
  age: yup.mixed().optional(),
  gender: yup.string().nullable().optional(),

  id: yup.string().when(['template'], ([template], schema) => {
    if (template === TemplateType.TEMPLATE_2) {
      return schema.required(REQUIRED_MESSAGE)
    }

    return schema.nullable().optional()
  }),
  username: yup.string().when(['template'], ([template], schema) => {
    if (template === TemplateType.TEMPLATE_2) {
      return schema.required(REQUIRED_MESSAGE)
    }

    return schema.nullable().optional()
  }),
  password: yup.string().nullable().optional(),
})

export const formSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_MESSAGE),
  title: yup.string().required(REQUIRED_MESSAGE),
  views: yup.array().of(viewSchema),
}) as yup.ObjectSchema<FormValues>
