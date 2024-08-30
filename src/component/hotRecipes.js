import React from 'react';

function HotRecipes() {
  return (
    <div className="flex bg-blue-100 rounded-3xl overflow-hidden shadow-lg mt-10 ml-6">
      {/* Left Section */}
      <div className="p-6 space-y-4 flex-1">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black py-3 px-5 rounded-full shadow-md font-bold ml-6 mt-6">
            <span role="img" aria-label="hot">📜</span> Hot Recipes
          </div>
        </div>
        <h2 className="text-7xl font-bold text-black mt-4 ml-6">
          Spicy delicious 
        </h2>
        <h2 className="text-7xl font-bold text-black mt-4 ml-6">
          chicken wings
        </h2>

        {/* Moved description */}
        <div className="mt-10">
          <p className="text-gray-600 text-lg font-semibold ml-4 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Additional spacing for the description */}
        <div className="flex space-x-4 mt-20">
          {/* Updated height values */}
          <div className="flex items-center text-gray-500 mt-6 ml-5 bg-blue-200 rounded-full w-[15%] h-[50px]">
            
           <span color='#000000'>⏱︎</span> 30 Minutes
          </div>
          <div className="flex items-center text-gray-500 mt-6 bg-blue-200 rounded-full w-[15%] h-[50px]">
            
          🍴 Chicken
          </div>
        </div>
        <div className="mt-40">
          <div className="flex items-center space-x-2 mt-40">
            <img src="data:image/jpeg;base64,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" alt="Author" className="rounded-full w-16 h-16 ml-4" />
            <div>
              <p className="font-bold text-black text-lg ">John Smith</p>
              <p className="text-gray-500 text-lg font-semibold">15 March 2022</p>
            </div>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-2xl shadow-md hover:bg-gray-800 flex items-center mt-[-10%] ml-[70%] font-bold">
            View Recipes<span className='ml-2'> ▶️</span>
            <svg xmlns="" className="h-16 w-16 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="" />
            </svg>
          </button>

        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS77KSi6q8RCqLmM89nEaCKgnZl8pSVcsF-_6Z_VT7MUmLtyPSP" alt="Dish" className="w-full h-full object-cover" />
      </div>
      
    </div>
  );
}

export default HotRecipes;
