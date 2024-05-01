"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "@mui/base/Dropdown"
import { Menu } from "@mui/base/Menu"
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton"
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem"
import styled from "@emotion/styled"
export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-10 px-16">
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Incomes" amount={9500} performance={20} />
        <Card title="Expenses" amount={2500} performance={10} />
      </div>
      <div className="flex w-full justify-between StyledHeadlineAndFilterWrapper px-16 mt-10 ">
        <h1 className="text-4xl font-semibold">Income Statement</h1>
        <FilterMenu />
      </div>
    </>
  )
}

export const FilterMenu: React.FC = () => {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`)
    }
  }

  return (
    // <div className="Filter-box flex items-center gap-3 ">
    //   <span>Filter:</span>
    //   <button className="StyledMonthFilter bg-gray-200 text-primary-10% px-5 py-2 rounded-md gap-2 flex items-center cursor-pointer font-semibold">
    //     <span>January</span>
    //     <FontAwesomeIcon icon={faChevronDown} />
    //   </button>
    // </div>
    <Dropdown>
      <BaseMenuButton>My account</BaseMenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <BaseMenuItem onClick={createHandleMenuClick("Profile")}>
          Profile
        </BaseMenuItem>
        <BaseMenuItem onClick={createHandleMenuClick("Language settings")}>
          Language settings
        </BaseMenuItem>
        <BaseMenuItem onClick={createHandleMenuClick("Log out")}>
          Log out
        </BaseMenuItem>
      </Menu>
    </Dropdown>
  )
}

const Listbox = styled("ul")(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  z-index: 1;
  `
)
