import { Search } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="min-h-svh w-full">
      <header className=" p-6 text-white flex flex-col gap-6  bg-gray-900">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-medium">EcommTemplate</h1>
          <div className="flex flex-row items-center gap-2">
            <span>Search</span>
            <div className="relative">
              <input type="text" className="bg-neutral-900 h-8" />
              <Search className="size-4 absolute right-2 top-2 text-white" />
            </div>
          </div>
        </div>
        <nav className="h-16 w-full flex flex-row justify-around items-center bg-red-600">
          <a href="">Home</a>
          <a href="">Appliances</a>
          <a href="">Computers</a>
          <a href="">Health / Beauty</a>
          <a href="">Home / Garden</a>
          <a href="">Offer Supplies</a>
          <a href="">Sports Equipment</a>
          <a href="">Contact Us</a>
        </nav>
      </header>
      <main></main>
    </div>
  );
}

export default App;
