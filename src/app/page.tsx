import Card from "./components/Card/Card"
import Header from "./components/Header/Header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-10 px-16">
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Balance" amount={94242} performance={20} />
      </div>
    </>
  )
}
