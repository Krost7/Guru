import bg from './background.png'
import logo from './logo.svg'
import slide2 from './images/gg.png'
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
      	<div className="container m-16 px-32">
      		<p className="container w-28">
      			<h1 className="text-xl">Guru Tech Corner</h1>
      			<p>One-step resource center</p>
      		</p>
      		<div className="container w-28 shadow-lg">
      		<img src={logo} className="w-full h-full"/>
      		</div>
      	</div>
      		
      	<div className="container mx-16 px-32 border border-gray-600">
      	<img src={slide2} className="w-full h-full opacity-70"/>
      	</div>
      </div>
    </div>

  );
}
export default App;
