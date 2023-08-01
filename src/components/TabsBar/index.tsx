import { ReactNode, memo } from "react"

const TabsBar = ({ tabsList, value, onTabChange }: Props) => {
  const handleTabClick = (tab: TabList) => {
    if (!tab.preventDefaultOnChange) {
      onTabChange(tab.value)
    }

    tab.callback && tab.callback()
  }

  return (
    <div className="flex align-middle">
      {tabsList.map(tab => {
        return (
          <div key={tab.value}>
            <button
              type="button"
              onClick={() => handleTabClick(tab)}
              className={`
                m-1
              border-blue-100 
                ${tab.value === value ? 'text-orange-600 bg-sky-300' : 'bg-sky-100'}
              `}>
              {tab.label}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export interface TabList {
  label: ReactNode;
  value: string;
  preventDefaultOnChange?: boolean;
  callback?: Function;
}


interface Props {
  tabsList: TabList[];
  value: string;
  onTabChange: Function;
}

export default memo(TabsBar)
