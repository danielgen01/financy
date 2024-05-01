import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

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
        <div className="Filter-box flex items-center gap-3 ">
          <span>Filter:</span>
          <button className="StyledMonthFilter bg-gray-200 text-primary-10% px-5 py-2 rounded-md gap-2 flex items-center cursor-pointer font-semibold">
            <span>January</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </>
  )
}
