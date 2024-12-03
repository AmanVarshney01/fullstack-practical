import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$999.99",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Headphones",
    price: "$149.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Camera",
    price: "$599.99",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$299.99",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Tablet",
    price: "$449.99",
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop",
  },
];

function App() {
  return (
    <div className="min-h-svh w-full">
      <header className=" p-6 text-white flex flex-col gap-6  bg-gray-900">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-medium">EcommTemplate</h1>
          <div className="flex flex-row items-center gap-2">
            <span>Search</span>
            <div className="relative">
              <input
                type="text"
                className="bg-neutral-900 h-8 border border-white rounded-lg"
              />
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
      <main>
        <div className=" bg-gray-900 w-full p-10 grid grid-cols-2 justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-red-600">
              Lorem ipsum dolor <br /> sit amet consectetur adis maris
            </h1>
            <p className=" text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Quisquam voluptatum, quos, quod,
            </p>
            <div className=" bg-blue-300 text-black p-3 w-36 text-center">
              Get Started
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
              alt="hero"
              className="aspect-square size-80 object-cover"
            />
          </div>
        </div>
        <div className="p-10 flex flex-col gap-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-red-600 text-2xl font-medium">
              Latest Products
            </h2>
            <div className="flex flex-row gap-2">
              <ChevronLeft className="bg-red-600 text-white rounded-full size-6" />
              <ChevronRight className="bg-red-600 text-white rounded-full size-6" />
            </div>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {products.map((product) => (
                <div key={product.id} className="flex-none w-64 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_1fr] gap-10 p-10 bg-gray-200">
          <div className=" flex flex-col w-64">
            <div className="bg-red-600 text-white flex justify-start p-4 items-center">
              <span>Browse All Categories</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Appliances</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Sports Equipments</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Camputers / Electronics</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Office Supplies</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Health / Beauty</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Home / Garden</span>
            </div>
            <div className="text-gray-500 flex justify-start p-4 items-center">
              <span>Apparel</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 p-4 text-white">
              <span>Browse All Categories</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 flex flex-col gap-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-red-600 font-semibold">
                      {product.price}
                    </p>
                    <button className="bg-red-600 text-white py-2 px-4 mt-2 hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
