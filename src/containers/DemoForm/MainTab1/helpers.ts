import { SelectOption } from 'src/components/FormSelect'
import { TemplateType } from '../types'

export const templateOptions: SelectOption[] = [
  {
    label: 'None',
    value: TemplateType.NONE,
  },
  {
    label: 'Template 1',
    value: TemplateType.TEMPLATE_1,
  },
  {
    label: 'Template 2',
    value: TemplateType.TEMPLATE_2,
  },
]
