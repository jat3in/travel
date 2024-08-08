import Home from './pages/home'
import SearchForm from "./components/SearchForm"
import Footer from "./components/Footer/footer"
function App() {
  return (
    <>
      <div className="w-full"><Home /></div>
      <div><SearchForm/></div>
      <div><Footer/></div>
    </>
  )
}

export default App
