import Home from './pages/home'
import Footer from './components/Footer/footer'
function App() {
  return (
    <>
      <div className="w-full"><Home />
      </div>
      <div className='fixed bottom-0 w-full bg-gray-800 text-white p-4'><Footer/></div>
    </>
  )
}

export default App
