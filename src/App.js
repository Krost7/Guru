import bg from './images/bgImg.gif'
import logo from './logo.svg'
import './App.css';
import './tailwind.min.css'
function App() {
  return (
    <div className=" font-sans bg-cover h-screen mx-auto" style={{ backgroundImage: `url(${bg})` }} >
      <div className="w-full flex text-gray-900 border-red-700 ">
        <ul className="flex-1">
          <li className="text-2xl p-2 ">Guru</li>
          <li>TechCorner</li>
        </ul>
        <ul className="flex flex-1 my-5">
        <li className="text-lg px-3 py-3 text-blue-700 cursor-pointer border-b shadow-sm border-purple-300">Home</li>
          <li className="text-lg px-3 py-3 hover:text-blue-700 cursor-pointer">News</li>
          <li className="text-lg px-3 py-3 hover:text-blue-700 cursor-pointer">Projects and Thesis</li>
          <li className="text-lg px-3 py-3 hover:text-blue-700 cursor-pointer">Shopping and Services</li>
          <li className="text-lg px-3 py-3 hover:text-blue-700 cursor-pointer">About Us</li>
        </ul>
      </div>
      <div className="flex">
        <div className="container my-48 pt-32">
          <button className="text-white bg-pink-500 border p-2 rounded-full shadow-lg">Explore More </button>
        </div>
        <div className="container flex-auto">
          <div className=" border-blue-700 p-3 shadow-xl mx-auto w-2/5 my-4">
          <span> This is the title</span><br></br>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>

        </div>
      </div>
    </div>

  );
}
export default App;
