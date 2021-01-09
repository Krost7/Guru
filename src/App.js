import bg from './background.png'
import slide from './images/techGuruSlide.png'
import route from "react-router-dom"
import './App.css';
import './tailwind.min.css'
function App() {
  return (
    <div className="bg-fixed bg-cover h-screen" style={{ backgroundImage: `url(${bg})` }} >
      <div className="w-full flex border border-gray-300 rounded-lg text-gray-900">
      <ul className="flex flex-auto">
      <li className="text-2xl p-1">Guru</li>
      <li className="text-xl p-3">Logo</li>
      </ul>
      <ul className="flex flex-1">
      <li className="text-xl p-3 hover:text-blue-700 cursor-pointer">News</li>
      <li className="text-xl p-3 hover:text-blue-700 cursor-pointer">Projects and Thesis</li>
      <li className="text-xl p-3 hover:text-blue-700 cursor-pointer">Shopping and Services</li>
      <li className="text-xl p-3 hover:text-blue-700 cursor-pointer">About Us</li>
      </ul>
      </div>
      <div className="flex">
      <div className="mx-40 flex-1">
      <h1 className="text-2xl p-12">Guru Tech Conor </h1>
      <h2 className="text-xl">One-step resource center</h2>
      <p className="w-60">
      For you to find anything that you want.For you to find anything that you want.For you to find anything that you want.For you to find anything that you want.For you to find anything that you want</p>
      </div>
      </div>
    </div>

  );
}
export default App;
