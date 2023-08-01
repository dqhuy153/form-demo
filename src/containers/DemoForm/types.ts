export enum MainTab {
  MAIN_0 = 'Main0',
  MAIN_1 = 'Main1',
}

export enum TemplateType {
  NONE = 'None',
  TEMPLATE_1 = 'Template1',
  TEMPLATE_2 = 'Template2',
}

export interface FormValues {
  name: string
  title: string

  views: ViewValues[]
}

export interface ViewValues
  extends Partial<Template1Value>,
    Partial<Template2Value> {
  template: string | null
}

export interface Template1Value {
  email: string
  age: number | null
  gender: string
}

export interface Template2Value {
  id: string
  username: string
  password: string
}
