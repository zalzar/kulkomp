import './App.css'
import Modal from './Modal'

function App() {

  return (
    <div className='flex flex-col items-center w-full h-dvh	'>
      <button className="relative px-6 py-3 font-semibold text-white bg-blue-500 rounded-md overflow-hidden group">
        <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-transparent transition-all duration-500 ease-out transform group-hover:-translate-x-full group-hover:opacity-0 shadow-lg group-hover:shadow-none"></span>
        <span className="absolute right-0 top-0 bottom-0 w-[4px] bg-transparent transition-all duration-500 ease-out transform group-hover:translate-x-full group-hover:opacity-0 shadow-lg group-hover:shadow-none"></span>
        <span className="relative z-10">Hover Me</span>
      </button>
      <Modal />
    </div>
  )
}

export default App
