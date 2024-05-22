import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "@mui/base/Dropdown"
import { Menu } from "@mui/base/Menu"
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton"
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FilterMenu: React.FC = () => {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`)
    }
  }

  return (
    <div className="Filter-box flex items-center gap-3 ">
      <span>Filter:</span>
      <Dropdown>
        <BaseMenuButton className="bg-gray-200 text-primary-10% px-5 py-2 rounded-md gap-2 flex items-center cursor-pointer font-semibold">
          January
          <FontAwesomeIcon icon={faChevronDown} />
        </BaseMenuButton>
        <Menu slots={{ listbox: Listbox }}>
          <BaseMenuItem onClick={createHandleMenuClick("Profile")}>
            February
          </BaseMenuItem>
          <BaseMenuItem onClick={createHandleMenuClick("Language settings")}>
            March
          </BaseMenuItem>
          <BaseMenuItem onClick={createHandleMenuClick("Log out")}>
            April
          </BaseMenuItem>
        </Menu>
      </Dropdown>
    </div>
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
