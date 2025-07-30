
import React from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faBolt, faBoltLightning, faBottleDroplet, faBox, faBuilding, faCar, 
  faCheckCircle, 
  faCheckSquare, 
  faClock, 
  faCube, 
  faCubes, 
  faDesktop, faFlask, faFlaskVial, faGasPump, faGlobe, faHammer, faIndustry, faLeaf, faLock, faRecycle, faRobot, faSeedling, faShirt, faShoppingCart, 
  faStethoscope, faTags, faThLarge, faTruck, faTruckFast, faUtensils,
  faWarehouse} from 
  '@fortawesome/free-solid-svg-icons';
  function App() {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white min-h-screen pt-11 pb-12 px-4 md:px-[73px]"
        style={{
          backgroundImage: "url('/bg-ship.jpg')"
        }}>

        {/* Navbar */}
        <header className="bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center md:h-20 
        font-poppins font-medium text-base md:text-[22px] leading-[24px] rounded-2xl max-w-full md:w-[1200px] mx-auto space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Hefgro" className="h-[50px] md:h-[60px] w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-[#141F29] sticky top-0 left-0 z-50">
            <div className="cursor-pointer hover:text-blue-600">Smart Business suite</div>
            <div className="cursor-pointer hover:text-blue-600">Industries we serve</div>
            <div className="cursor-pointer hover:text-blue-600">Ecommerce</div>
            <div className="cursor-pointer hover:text-blue-600">Services</div>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-2 text-sm">
            <button className="text-black border border-white px-4 py-1 rounded-md hover:bg-white hover:text-[#001e3c] transition">
              Login
            </button>
            <button className="text-white bg-[#05258f] font-semibold px-4 py-1 rounded-xl hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </header>
      

    <div className="max-w-4xl m-0 text-left px-4 md:px-0">
  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-8 max-w-full md:max-w-[670px]">
    Smart RFQs & Fast Delivery for Your Raw Materials
  </h1>
  <p className="text-sm md:text-base mb-6 max-w-full md:max-w-[450px]">
    Easily Source Raw Materials, Get Production Help, Use Smart Business Tools,
    and Enjoy Fast Delivery — Manage your supply chain and grow your MSME or large business with HEFGRO.
  </p>
</div>
{/* Join Button */}
<button className="group flex items-center bg-green-500 hover:bg-green-600
  rounded-xl font-semibold text-white px-6 py-4 transition">
  Join Free Today

  {/* Arrow In */}
  <svg xmlns="http://www.w3.org/2000/svg"  
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className="w-6 ml-2 group-hover:hidden">
    <path strokeLinecap="round" 
      strokeLinejoin="round" 
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>

  {/* Arrow Out */}
  <svg xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className="w-6 ml-2 hidden group-hover:block">
    <path strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
</button>

{/* Cards Section */}
<div className="flex justify-center md:justify-end px-4">
  <div className="w-full max-w-6xl mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-7">
    
    {/* Card 1 */}
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Industries sectors</h3>
      <p className="text-4xl font-bold">20+</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Raw Materials</h3>
      <p className="text-4xl font-bold">100+</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Location</h3>
      <p className="text-4xl font-bold">70+</p>
    </div>
  </div>
</div>

</section>

<div className="bg-white px-4 md:pl-14 text-left">
  <h1 className="text-[#1E3A8E] text-3xl md:text-6xl font-bold leading-tight mt-8 max-w-full md:max-w-[870px]">
    Empowering Businesses with Smart Sourcing & Operations
  </h1>

  <p className="text-black mt-6 text-base md:text-lg max-w-full md:max-w-[410px]">
    We provide high-quality raw materials, optimized procurement, and seamless 
    supply chain solutions across multiple industries.
  </p> 

  <div className="flex justify-end mt-6">
    <button className="flex items-center bg-green-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold text-white transition">
      View All
      <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="w-6 h-6 ml-2">
        <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-28 py-5 text-black text-center">
  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faSeedling} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Agriculture & Agri tech
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faUtensils} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Food & Beverage
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faHammer} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Mining & Metals
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faBoltLightning} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Energy & Power
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faBuilding} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Construction & Infrastructure
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faFlask} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Chemicals & Specialty
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faShirt} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Textile & Apparel
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faIndustry} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Manufacturing & Heavy Industries
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faStethoscope} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Pharmaceuticals & Healthcare
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faRecycle} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Recycling & Waste Management
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faTags} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Wholesale & Distribution
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faShoppingCart} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Retail & E-Commerce
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faTruck} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Transportation & Logistics
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faDesktop} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Electronics & Electrical
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faCar} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Automobile & Parts Manufacturing
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>
</div>

<div className="bg-white pl-4 md:pl-14 text-left">
  <h1 className="text-[#1E3A8E] text-3xl md:text-6xl font-bold leading-tight max-w-[870px] mt-8">
    Essential Raw Materials & Products for Every Industry
  </h1>
  <p className="text-black mt-6 text-[16px] md:text-[20px] max-w-[589px]">
    Discover top-quality materials and supplies designed to fuel your business 
    growth and streamline your operations
  </p> 
  <div className="flex justify-end mr-4 md:mr-28">
    <button className="flex items-center gap-2 bg-green-500 hover:bg-blue-600 px-6 py-3 mt-6
      rounded-xl font-semibold text-white">
      View All
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
xl:grid-cols-6 gap-6 px-4 md:px-14 py-10 text-black text-center">
  
  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faSeedling} className="mb-2 text-3xl text-green-600" />
    Grains, Spices, Edible-Oils
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 
  rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faUtensils} className="mb-2 text-3xl text-green-600" />
    Food Additives
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 
  rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faWarehouse} className="mb-2 text-3xl text-green-600" />
    Animal Feeds
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faLeaf} className="mb-2 text-3xl text-green-600" />
    Fertilizers
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faCubes} className="mb-2 text-3xl text-green-600" />
    Raw Minerals & Ores
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faGasPump} className="mb-2 text-3xl text-green-600" />
    Petroleum & Refinery Products
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faBolt} className="mb-2 text-3xl text-green-600" />
    Energy materials
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faThLarge} className="mb-2 text-3xl text-green-600" />
    Building Materials (Cement, Bricks, Steel)
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faFlaskVial} className="mb-2 text-3xl text-green-600" />
    Industrial Chemicals & Specialty Products
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faBottleDroplet} className="mb-2 text-3xl text-green-600" />
    Specialty Coatings & Adhesives
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faShirt} className="mb-2 text-3xl text-green-600" />
    Textiles & Fabrics
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faStethoscope} className="mb-2 text-3xl text-green-600" />
    Pharmaceutical Ingredient
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faRecycle} className="mb-2 text-3xl text-green-600" />
    Recycling Raw Materials
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faTruckFast} className="mb-2 text-3xl text-green-600" />
    Wholesale Bulk Supplies
  </div>

</div>

<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-6 text-[22px]">
  <button className="group flex items-center bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white px-6 py-4">
    Get Started Today
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 group-hover:hidden"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 hidden group-hover:block"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </button>

  <button className="font-semibold text-black text-sm border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#001e3c] transition">
    Contact us
  </button>
</div>

<section className="py-16 px-4 md:px-6 bg-white">
  <h4 className="uppercase text-gray-500 text-sm mb-2 text-center md:text-left">Why You Choose Us</h4>
  <h1 className="text-3xl text-gray-900 font-bold mb-8 text-center md:text-left">
    Turning Pain Points into Power Plays
  </h1>

  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left side buttons */}
    <div className="flex flex-col gap-3 flex-1">
      <button className="bg-green-500 text-white font-semibold px-4 py-3 rounded-md text-left">
        1. Supplier Research
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        2. Effortless RFQ Management
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        3. Quality Control
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        4. Payment Transaction Security
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        5. Logistics & Delivery Solutions
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        6. Smart Business Suite
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">
        7. Sell Your Final Products
      </button>
    </div>

    {/* Right side content */}
    <div className="flex-1 flex flex-col gap-6">
      <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-red-500">
        <h3 className="text-lg font-semibold text-red-600 flex items-center gap-2">
          <span className="text-xl">✖</span> Challenges of Unreliable Vendor Searches
        </h3>
        <p className="mt-2 text-gray-700">
          Searching marketplaces or reaching out to unknown vendors often wastes time and leads to inconsistent
          quality, uncertain pricing, and late deliveries.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-lg font-semibold text-green-600 flex items-center gap-2">
          <span className="text-xl">✔</span> HEFGRO Pre-Verified Raw Material Supply sources
        </h3>
        <p className="mt-2 text-gray-700">
          HEFGRO delivers raw materials from verified global partners. Every supplier is vetted for quality,
          reliability, and on-time delivery. We manage the sourcing process so you don’t have to worry about risky
          suppliers.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-green-500 text-white text-center py-12 px-4 md:px-6 mt-16 rounded-lg">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
    Register Free as a Buyer – Unlock Smart Sourcing, Business Tools & Expert Support
  </h2>
  <p className="mb-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
    Join HEFGRO now to get optimized quotes, secure payments, seamless sourcing management,
    plus powerful business tools and expert guidance – all designed to simplify your operations and accelerate your growth.
  </p>
  <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-green-100 transition">
    Register Now – It's Free →
  </button>
</section>

<section className="text-center py-12 px-4 md:px-6">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">
    HEFGRO Smart Business Suite
  </h2>
  <p className="text-gray-700 mb-6 text-sm md:text-base max-w-2xl mx-auto">
    Going Beyond Raw Material Supply — A Complete Smart Suite for Your Business
  </p>
  <button className="bg-green-500 text-white px-6 py-3 font-semibold rounded-md hover:bg-green-600 transition">
    Get Started with Smart Suite →
  </button>
</section>

<section className="text-center px-4 py-12">
  <div className="text-[#1E3A8E] text-4xl md:text-6xl font-bold">
    HEFGRO Smart Business Suite
  </div>
  <div className="text-[#141F29] text-lg md:text-xl mt-4">
    Going Beyond Raw Material Supply — A Complete Smart Suite for Your Business
  </div>
  <div className="mt-8">
    <button className="group inline-flex items-center bg-green-500 hover:bg-green-600
      rounded-xl font-semibold text-white px-6 py-3">
      Get Started with Smart Suite
      <svg xmlns="http://www.w3.org/2000/svg"  
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="w-6 ml-2 group-hover:hidden">
        <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="w-6 ml-2 hidden group-hover:block">
        <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>
  </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-center gap-6 mt-28 px-6">
  {/* Left Card */}
  <div className="px-5 max-w-md">
    <ul className="p-6 md:p-9 border border-[#22C55E] rounded-2xl">
      <li className="text-[#141F29] text-xl md:text-2xl font-bold">
        Unlock Our Business Suite at No Extra Cost
      </li>
      <li className="text-[#6B7280] mt-2 text-sm md:text-base">
        Get a Smarter, More Advanced Way to Manage Your Business.  
        Free access upon a successful raw material purchase or supply with us!
      </li>
    </ul>
  </div>

  {/* Center Image */}
  <img src="/MacBook.png" alt="Hefgro" className="w-full max-w-sm h-auto px-5" />

  {/* Right Card */}
  <div className="px-5 max-w-md">
    <ul className="p-6 md:p-9 border border-[#22C55E] rounded-2xl">
      <li className="text-[#141F29] text-xl md:text-2xl font-bold">
        Business Suite Access Without Buying? Yes, You Can
      </li>
      <li className="text-[#6B7280] mt-2 text-sm md:text-base">
        Even if you do not purchase raw materials from us, 
        you can still benefit from our Business Suite through flexible plans.
      </li>
    </ul>
  </div>
</section>

<div className="flex justify-center mt-10">
  <button className="text-sm text-white bg-[#05258f] font-bold px-6 py-2 rounded-xl">
    See Pricing
  </button>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 px-12">
  {/* CARD 1 */}
  <div className="flex flex-col bg-white rounded-[16px] px-6 py-8 shadow-md">
    <img src="/Dashboard.jpg" alt="Hefgro" 
      className="w-full h-[277px] object-cover border border-[#22C55E] rounded-[10px]" />
    
    <div className="mt-6">
      <p className="text-[22px] font-semibold text-[#141F29] mb-2">Smart Inventory Management</p>
      <p className="text-[#6B7280] text-[18px]">
        AI-driven Inventory tracking & warehouse optimization.
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="flex flex-col bg-white rounded-[16px] px-6 py-8 shadow-md">
    <img src="/Dashboard.jpg" alt="Hefgro" 
      className="w-full h-[277px] object-cover border border-[#22C55E] rounded-[10px]" />
    
    <div className="mt-6">
      <p className="text-[22px] font-semibold text-[#141F29] mb-2">Production Planning & Monitoring</p>
      <p className="text-[#6B7280] text-[18px]">
        Automate workflows & track real-time efficiency.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="flex flex-col bg-white rounded-[16px] px-6 py-8 shadow-md">
    <img src="/Dashboard.jpg" alt="Hefgro" 
      className="w-full h-[277px] object-cover border border-[#22C55E] rounded-[10px]" />
    
    <div className="mt-6">
      <p className="text-[22px] font-semibold text-[#141F29] mb-2">Smart Accounting & Cost Control</p>
      <p className="text-[#6B7280] text-[18px]">
        Tax automation, profit tracking & expense management.
      </p>
    </div>
  </div>
</section>

<h2 className="text-center text-2xl md:text-3xl text-[#6B7280]">
  E-Commerce
</h2>

<p className="mt-6 md:mt-10 text-[#1E3A8E] text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-[95%] md:max-w-[90%] lg:max-w-[1100px] mx-auto px-4">
  Showcase Your Final Products to the World
</p>


<section className="w-full max-w-[1296px] mx-auto rounded-[32px] bg-[#ffffff] mt-20 px-4 md:px-10 lg:px-20">

  {/* Top Text Section */}
  <div className="flex flex-col w-full md:w-[649px] mt-10 md:mt-[39.81px] ml-0 md:ml-[48px] gap-10">
    <div className="flex flex-col gap-4">
      <p className="text-[24px] md:text-[32px] font-bold text-[#141F29]">
        Why use our show case?
      </p>
      <p className="text-[14px] text-[#6B7280] max-w-[470px]">
        Find quality finished products from trusted manufacturers worldwide. Whether you're shopping for yourself or buying in bulk for your business, our platform helps you get the best products at the best prices.
      </p>

      <button className="group flex items-center w-[220px] h-[48px] bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white px-3 py-3 mt-8">
        List Your Products Now 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 group-hover:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 hidden group-hover:block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>
  </div>

  {/* Features Cards */}
  <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 ml-0 md:ml-[48px]">

    {/* Card 1 */}
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon icon={faCube} className="text-2xl text-green-600" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Global Reach
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          Your products become visible to buyers worldwide, expanding your market effortlessly.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon icon={faCube} className="text-2xl text-green-600" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Direct Manufacturer Access
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          Buyers connect directly with you, ensuring better prices and transparent communication.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon icon={faCube} className="text-3xl text-green-600 rounded-full" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Simple & Effective
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          A clean, easy-to-navigate online display that highlights your product details, images, and pricing.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon icon={faCube} className="text-2xl text-green-600" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Wholesale & Retail Friendly
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          Cater to both bulk buyers and retail customers with flexible options.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-[32px] px-6 py-10 w-full max-w-[1296px] mx-auto">

  {/* Left Content */}
  <div className="flex flex-col w-full lg:w-1/2 lg:ml-[40px]">
    <div className="flex flex-col mt-5 w-full">
      <div className="flex flex-col gap-5 w-full">
        <h4 className="text-[24px] lg:text-[32px] font-medium text-[#141F29] leading-snug text-center lg:text-left">
          Shop Direct from Manufacturers – Perfect for Retail & Wholesale!
        </h4>
        <p className="text-[14px] text-[#6b7280] text-center lg:text-left px-2 lg:px-0">
          Find quality finished products from trusted manufacturers worldwide.
          Whether you're shopping for yourself or buying in bulk for your business,
          our platform helps you get the best products at the best prices.
        </p>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="group flex items-center bg-[#05258f] rounded-xl font-semibold text-white px-6 py-3 mt-3 text-[16px]">
            shopnow
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 ml-2 group-hover:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 ml-2 hidden group-hover:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Feature List with Tick Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-2 lg:px-0">
      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Wide Selection for Everyone</p>
          <p className="text-[#6b7280] text-[14px]">Shop a variety of products that fit both personal and business needs.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Trusted Suppliers You Can Rely On</p>
          <p className="text-[#6b7280] text-[14px]">All manufacturers are verified to ensure quality and on-time delivery.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Save Money by Buying Direct</p>
          <p className="text-[#6b7280] text-[14px]">No middlemen means better prices and clear costs.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Shop Anytime, Anywhere</p>
          <p className="text-[#6b7280] text-[14px]">Our platform is open 24/7 and easy to use from anywhere in the world.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 w-full lg:w-[476px]">
    <img src="/Frame.png" alt="Hefgro" className="max-h-[400px] w-auto object-contain" />
  </div>
</section>

<section className="flex flex-col bg-white pt-10 mt-16 px-4 lg:px-0">

  {/* Top section: text + card */}
  <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1300px] w-full mx-auto relative gap-10">
    
    {/* Left Text */}
    <div className="flex flex-col w-full lg:w-1/2">
      <h4 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-[#05258f] leading-tight">
        Business Support Services
      </h4>
      <p className="text-[#6b7280] mt-6 text-[16px] sm:text-[18px] max-w-[400px]">
        More Than Just Raw Material Supply — Expert Solutions to 
        Boost Your Production and Drive Business Growth
      </p>
    </div>

    {/* Right card with tick points */}
    <div className="flex flex-col bg-[#f9fafb] rounded-[20px] shadow-md p-6 gap-5 w-full lg:w-[500px] z-10">
      
      <div className="flex gap-4 items-start">
        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
        <div>
          <h4 className="text-[20px] sm:text-[24px] text-[#141F29] font-semibold">Work More Efficiently</h4>
          <p className="text-[16px] text-[#6b7280]">Make your production and processes smoother.</p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
        <div>
          <h4 className="text-[20px] sm:text-[24px] text-[#141F29] font-semibold">Grow Sales</h4>
          <p className="text-[16px] text-[#6b7280]">Reach more customers with better marketing.</p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
        <div>
          <h4 className="text-[20px] sm:text-[24px] text-[#141F29] font-semibold">Save Money</h4>
          <p className="text-[16px] text-[#6b7280]">Cut costs with smart buying and resource use.</p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
        <div>
          <h4 className="text-[20px] sm:text-[24px] text-[#141F29] font-semibold">Know Your Competition</h4>
          <p className="text-[16px] text-[#6b7280]">Stay ahead with useful market and competitor research.</p>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom banner section */}
  <div className="relative w-full mt-20">
    <img src="/Container.jpg" alt="Hefgro" className="w-full h-[300px] sm:h-[380px] object-cover" />
    
    <div className="absolute top-1/2 left-4 sm:left-16 transform -translate-y-1/2 text-white text-[20px] sm:text-[32px] font-bold max-w-[600px]">
      We provide expert support and smart solutions to improve how you run your business.
    </div>
  </div>
</section>

<section className="flex flex-col w-full bg-white pt-14 px-4 sm:px-6 lg:px-16 mt-20">
  <div className="w-full max-w-[1240px] mx-auto bg-[#1E3A8A] rounded-[36px] flex flex-col lg:flex-row px-6 sm:px-10 lg:px-[56px] py-10 gap-10">

    {/* Left Text Content */}
    <div className="flex flex-col w-full lg:w-1/2 gap-10">
      <div className="flex flex-col gap-7">
        <p className="text-white text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-snug">
          Become a Supplying Partner - Grow Your Raw Material Sales with HEFGRO
        </p>

        <div className="flex flex-col gap-5 text-[#F9FAFB] text-[16px] font-normal">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
            <p>
              Join our network of verified suppliers and get free access to smart tools,
              expert support, secure payments, and customized contracts that protect your business.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600 mt-1" />
            <p>
              Boost your sales with verified manufacturing and wholesale
              buyers, while HEFGRO handles sourcing, payments, and contracts
              for you.
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="group flex items-center bg-white rounded-xl font-semibold text-black px-6 py-3 text-[16px] sm:text-[18px] mt-5">
          Start Selling Globally - It's Free
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 ml-2 group-hover:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 ml-2 hidden group-hover:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img src="/Containr1.jpg" alt="Hefgro"
        className="w-full max-w-[500px] h-auto rounded-[28px] object-cover" />
    </div>
  </div>
</section>

<div className="mt-10 px-4 sm:px-6 lg:px-0 w-full flex flex-col items-center text-center">
  <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1E3A8A] font-semibold max-w-[700px]">
    Accelerate Your Business with HEFGRO
  </h4>
  <p className="text-base sm:text-lg lg:text-xl text-[#6b7280] mt-5 max-w-[600px]">
    More Than Just Raw Material Supply — Expert Solutions to 
    Boost Your Production and Drive Business Growth
  </p>
</div>

<section className="px-4 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
    
    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faGlobe} className="text-6xl text-green-600" />
      <h5 className="text-2xl text-[#141F29] mt-6">Global Reach</h5>
      <p className="text-[#6b7280] mt-4 text-base">Get raw materials from trusted suppliers worldwide</p>
    </div>
    
    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faBox} className="text-6xl text-green-600" />
      <h4 className="text-2xl text-[#141F29] mt-6">No Order Minimums</h4>
      <p className="text-[#6b7280] mt-4 text-base">Buy exactly what you need.</p>
    </div>

    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faLock} className="text-6xl text-green-600" />
      <h4 className="text-2xl text-[#141F29] mt-6">Secure Payments</h4>
      <p className="text-[#6b7280] mt-4 text-base">Buy exactly what you need.</p>
    </div>

    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faClock} className="text-6xl text-green-600" />
      <h4 className="text-2xl text-[#141F29] mt-6">Cost & Time Saving Procurement</h4>
      <p className="text-[#6b7280] mt-4 text-base">Get materials faster and cheaper</p>
    </div>

    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faCheckSquare} className="text-6xl text-green-600" />
      <h4 className="text-2xl text-[#141F29] mt-6">All-in-One Platform</h4>
      <p className="text-[#6b7280] mt-4 text-base">Manage everything easily.</p>
    </div>

    <div className="w-full max-w-[386px] h-auto rounded-[20px] p-[24px] bg-[#ffffff] shadow-md mx-auto">
      <FontAwesomeIcon icon={faRobot} className="text-6xl text-green-600" />
      <h4 className="text-2xl text-[#141F29] mt-6">Smart Tech</h4>
      <p className="text-[#6b7280] mt-4 text-base">AI-powered quotes and tools.</p>
    </div>

  </div>
</section>

<div className="mt-10 px-4 max-w-screen-md mx-auto text-center">
  <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E3A8A] font-semibold">
    What Our Clients Say?
  </h4>
  <p className="text-base sm:text-lg md:text-xl text-[#6b7280] mt-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>

<div className="w-full bg-[#22C55E] rounded-[36px] px-6 py-12 mt-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Text Block */}
    <div>
      <p className="text-white text-3xl md:text-5xl font-bold leading-snug">
        Manage Your Business Anywhere<br />
        with Our Mobile App
      </p>
    </div>

    {/* Image Block */}
    <div className="flex justify-center">
      <img
        src="/Mobile.png"
        alt="Hefgro Mobile App"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</div>

<div className="mt-10 px-4 md:px-12 lg:px-24 text-center">
  <h4 className="text-3xl md:text-5xl lg:text-6xl text-[#1E3A8A] font-semibold max-w-4xl mx-auto">
    Get Started with HEFGRO Today!
  </h4>
  <p className="text-base md:text-lg lg:text-xl text-[#6b7280] mt-4 max-w-2xl mx-auto">
    Transform Your Business, Scale Faster & Stay Ahead
  </p>
</div>

<section className="px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
    
    {/* Grid Item 1 */}
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid1.jpg" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
        Stay Ahead with Business Trends & Strategies
      </div>
    </div>

    {/* Grid Item 2 */}
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid2.png" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
        Stay Ahead with Business Trends & Strategies
      </div>
    </div>

    {/* Grid Item 3 */}
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid3.png" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
       Stay Ahead with Business Trends & Strategies
      </div>
    </div>

  </div>
</section>

<section className="w-full bg-gray-100 mt-20 px-4 py-10">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg bg-white">

    {/* Left Side Image - Fixed Properly */}
    <div className="w-full lg:w-1/2 h-[250px] lg:h-auto">
      <img
        src="/Form.jpg"
        alt="Partner With Us"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Right Side Form */}
    <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Let's Build Success Together <br /> Partner with Us!
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below, and our team will connect with you.
      </p>

      <form className="space-y-4">
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-md" />
        </div>
        <div>
          <label>Your Email Address</label>
          <input type="email" placeholder="Your Email Address" className="w-full border p-3 rounded-md" />
        </div>
        <div>
          <label>Company Name</label>
          <input type="text" placeholder="Company Name" className="w-full border p-3 rounded-md" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-md" />
        </div>
        <div>
          <label>Select Your Country</label>
          <input type="text" placeholder="Select your country" className="w-full border p-3 rounded-md" />
        </div>
        <div>
          <label>Your Message</label>
          <textarea placeholder="Your Message" className="w-full border p-3 rounded-md h-24"></textarea>
        </div>

        <div>
          <label className="block mb-2">Select Partnership</label>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Investor</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Finance</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Logistics</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Technology</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Supplier</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Legal</button>
            <button type="button" className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">General</button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree" className="text-sm text-gray-600">
            I agree to receive updates and communications.
          </label>
        </div>

        <button className="group flex items-center bg-[#05258f] rounded-xl font-semibold text-white px-6 py-3 mt-3 text-[16px] hover:bg-[#041c73] transition">
          shopnow
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 group-hover:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 hidden group-hover:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>


</div>
  );
}

export default App

{/* function App() {
  return (
    <div className="font-poppins"> 
     Hero Section 
      <section
        className="bg-cover bg-center text-white h-[770px] pt-11 pb-12 px-[73px] "
        style={{
          backgroundImage: "url('/bg-ship.jpg')"
        }}>

          
        <header className="bg-white px-6 py-4 flex justify-between items-center h-20 
        font-poppins font-medium text-[22px] leading-[24px] rounded-2xl w-[1200px]">
        <div className="flex items-center h-[80px]">
        
        <img src="/logo.png" alt="Hefgro" className="w-auto h-[60px]"/></div>

        <nav className="hidden md:flex space-x-6  text-[#141F29]  sticky top-0 left-0 z-50 ">
          <div className="cursor-pointer hover:text-blue-600">Smart Business suite</div>
          <div className="cursor-pointer hover:text-blue-600">Industries we serve</div>
          <div className="cursor-pointer hover:text-blue-600">Ecommerce</div>
          <div className="cursor-pointer hover:text-blue-600">Services</div>
        </nav>
        <div className="space-x-2 text-22px">
          <button className="  text-black text-sm border border-white px-4 py-1 rounded-md
           hover:bg-white hover:text-[#001e3c] transition">
            Login
          </button>
          <button className="text-sm text-white h-13 w-33 bg-[#05258f] font-semibold px-4 py-1 rounded-xl
           hover:bg-blue-800 transition">
            Get Started
          </button>
          </div>
      </header> /*}

        <div className="max-w-4xl m-0 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 w-[670px]  mt-8">
            Smart RFQs & Fast Delivery for Your Raw Materials
          </h1>
          <p className="text-12px  mb-6 w-[450px]">
            Easily Source Raw Materials, Get Production Help, Use Smart Business Tools,
            and Enjoy Fast Delivery — Manage your supply chain and grow your MSME or large business with HEFGRO.
          </p>
          
 <button className="group flex bg-green-500 hover:bg-green-600
          rounded-xl font-semibold text-white px-6 py-4">
            Join Free Today 
            <svg xmlns="http://www.w3.org/2000/svg"  
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
  
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 hidden group-hover:block ">
           <path stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg>

</button>
        </div>
         
         
      
        <div className="flex justify-end">
        <div className=" w-2xl mt-6 gap-6
        grid grid-cols-1 md:grid-cols-3 p-7">
          <div className="bg-white/40 rounded-xl pt-25 pl-5 pb-6 shadow-md 
          text-left">
            <h3 className="text-1xl font-semibold m-2">Industries sectors</h3>
            <p className="text-6xl font-bold">20+</p>
          </div>
          <div className=" bg-white/40 rounded-xl pt-25 pl-5 shadow-md text-left">
            <h3 className="text-1xl font-semibold m-2">Raw Materials</h3>
            <p className="text-6xl font-bold">100+</p>
          </div>
          <div className="bg-white/40 rounded-xl pt-25 pl-5 shadow-md text-left">
            <h3 className="text-1xl font-semibold m-2">Location</h3>
            <p className="text-6xl font-bold">70+</p>
          </div>
        </div>
    </div>
       </section>

       
       <div className="bg-white  pl-14 text-left">
          <h1 className="text-[#1E3A8E]  md:text-6xl font-bold leading-tight w-[870px] mt-8">
            Empowering Businesses with Smart Sourcing & Operations
          </h1>
          <p className="text-black mt-6 text-1xl w-[410px]">
            We provide high-quality raw materials, optimized procurement, and seamless 
            supply chain solutions across multiple industries.
          </p> 
          <div className="flex justify-end mr-30">
          <button className=" flex bg-green-500 hover:bg-blue-600 px-6 py-3 mt-6
          rounded-xl font-semibold text-white ">
            View All
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>


          </button>
          </div>
        </div>

<div className="  grid grid-cols-2 md:grid-cols-4 gap-6 px-28 py-5 text-black text-center">
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon = {faSeedling} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400 " />
      Agriculture & Agri tech
      <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70  py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faUtensils} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Food & Beverage
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30  "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faHammer} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Mining & Metals
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faBoltLightning} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Energy & Power
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faBuilding} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Construction & Infrastructure
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
    <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faFlask} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Chemicals & Specialty
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faShirt} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Textile & Apparel
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faIndustry} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Manufacturing & Heavy Industries
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faStethoscope} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Pharmaceuticals & Healthcare
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faRecycle} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Recycling & Waste Management
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faTags} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Wholesale & Distribution
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faShoppingCart} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Retail & E-Commerce
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faTruck} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Transportation & Logistics
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    
    <FontAwesomeIcon icon = {faDesktop} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Electronics & Electrical
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all  shadow-md">
    <FontAwesomeIcon icon = {faCar} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Automobile & Parts Manufacturing
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
</div>


       <div className="bg-white  pl-14 text-left">
          <h1 className="text-[#1E3A8E] md:text-6xl font-bold leading-tight w-[870px] mt-8">
            Essential Raw Materials & Products for Every Industry
          </h1>
          <p className="text-black mt-6 text-[20px] w-[589px]">
            Discover top-quality materials and supplies designed to fuel your business 
            growth and streamline your operations
          </p> 
          <div className="flex justify-end mr-30">
          <button className="flex bg-green-500 hover:bg-blue-600 px-6 py-3 mt-6
          rounded-xl font-semibold text-white ">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          </div>
        </div>


<div class="grid grid-cols-6 grid-rows-3  gap-6 mx-3 p-6 px-14 text-black text-center">
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faSeedling} className="px-8 py-4 text-2xl text-green-600"/>
    Grains, Spices, Edible-Oils
    </div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faUtensils} className="px-8 py-4 text-2xl text-green-600"/>
    Food Additives</div>
  <div className="  hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faWarehouse} className="px-8 py-4 text-2xl text-green-600"/>
    Animal Feeds</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faLeaf} className="px-8 py-4 text-2xl text-green-600"/>
    Fertilizers</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faCubes} className="px-8 py-4 text-2xl text-green-600"/>
    Raw Minerals & Ores</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faGasPump} className="px-8 py-4 text-2xl text-green-600"/>
    Petroleum & Refinery Products</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faBolt} className="px-8 py-2 text-2xl text-green-600"/>
    Energy materials</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faThLarge} className="px-8 py-0 text-2xl text-green-600"/>
    Building Materials (Cement, Bricks, Steel)</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faFlaskVial} className="px-8 py-0 text-2xl text-green-600"/>
    Industrial Chemicals & Specialty Products</div>
  
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faBottleDroplet} className="px-8 py-2 text-2xl text-green-600"/>
    Specialty Coatings & Adhesives</div>

  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faShirt} className="px-8 py-2 text-2xl text-green-600"/>
    Textiles & Fabrics</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faStethoscope} className="px-8 py-2 text-2xl text-green-600"/>
    Pharmaceutical Ingredient</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faRecycle} className="px-8 py-2 text-2xl text-green-600"/>
    Recycling Raw Materials</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl  shadow-md">
    <FontAwesomeIcon icon = {faTruckFast} className="px-8 py-2 text-2xl text-green-600"/>
    Wholesale Bulk Supplies</div>

</div>


    <div className="bg-white   text-center text-[#1E3A8E]   mt-6">
            <div className="text-center text-5xl md:text-5xl font-bold leading-tight">Large-Scale Industries,</div>
             
             <div className="text-5xl font-bold"> Reliable,Safe & Cost-Effective </div>
          <div className="text-5xl font-bold">Sourcing</div>
          <p className="text-black text-1xl text-center mt-6  pl-30 w-[1200px]">
            One Vendor. Bulk Supply. Zero Risks. Smart Sourcing for Industrial Production.
          </p> 
    </div>      

    <div className="space-x-2 text-22px">
      <button className="group flex mt-6 ml-110 bg-green-500 hover:bg-green-600
          rounded-xl font-semibold text-white px-6 py-4">
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg"  
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
  
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 hidden group-hover:block ">
           <path stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg>

</button>
<button className="  text-black text-sm border border-white px-4 py-1 rounded-md
           hover:bg-white hover:text-[#001e3c] transition">
            Contact us
          </button>
    </div>

    <section className="py-16 px-6 bg-white">
  <h4 className="uppercase text-gray-500 text-sm mb-2">Why You Choose Us</h4>
  <h1 className="text-3xl text-gray-900 font-bold mb-8">Turning Pain Points into Power Plays</h1>  <div className="flex flex-wrap gap-10">
    <div className="flex flex-col gap-3 flex-1">
      <button className="bg-green-500 text-white font-semibold px-4 py-3 rounded-md">1. Supplier Research</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">2. Effortless RFQ Management</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">3. Quality Control</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">4. Payment Transaction Security</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">5. Logistics & Delivery Solutions</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">6. Smart Business Suite</button>
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-left">7. Sell Your Final Products</button>
    </div><div className="flex-1 flex flex-col gap-6">
  <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-red-500">
    <h3 className="text-lg font-semibold text-red-600 flex items-center gap-2">
      <span className="text-xl">✖</span> Challenges of Unreliable Vendor Searches
    </h3>
    <p className="mt-2 text-gray-700">
Searching marketplaces or reaching out to unknown vendors often wastes time and leads to inconsistent quality, uncertain pricing, and late deliveries.
    </p>
  </div>

  <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-green-500">
    <h3 className="text-lg font-semibold text-green-600 flex items-center gap-2">
      <span className="text-xl">✔</span> HEFGRO Pre-Verified Raw Material Supply sources
    </h3>
    <p className="mt-2 text-gray-700">
      HEFGRO delivers raw materials from verified global partners. Every supplier is vetted for quality, reliability, and on-time delivery. We manage the sourcing process so you don’t have to worry about risky suppliers.
    </p>
  </div>
</div>

  </div>
</section><section className="bg-green-500 text-white text-center py-12 px-6 mt-16 rounded-lg">
  <h2 className="text-2xl font-bold mb-4">
    Register Free as a Buyer – Unlock Smart Sourcing, Business Tools & Expert Support
  </h2>
  <p className="mb-6">
    Join HEFGRO now to get optimized quotes, secure payments, seamless sourcing management,
plus powerful business tools and expert guidance – all designed to simplify your operations and accelerate your growth.
  </p>
  <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-green-100">
    Register Now – It's Free →
  </button>
</section><section className="text-center py-12 px-6">
  <h2 className="text-3xl font-bold mb-2">HEFGRO Smart Business Suite</h2>
  <p className="text-gray-700 mb-6">
    Going Beyond Raw Material Supply — A Complete Smart Suite for Your Business
  </p>
  <button className="bg-green-500 text-white px-6 py-3 font-semibold rounded-md hover:bg-green-600">
    Get Started with Smart Suite →
  </button>
</section><section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-6">
  <div className="bg-white shadow rounded-xl p-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2">Bulk Orders, From One Source</h3>
    <p className="text-gray-600">Get optimized quotes for high-quality raw materials. Save time and cost by avoiding multiple vendors.</p>
  </div>
  <div className="bg-white shadow rounded-xl p-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2">Certified Quality</h3>
    <p className="text-gray-600">Every shipment is backed by standardized inspection reports, ensuring transparency and consistency.</p>
  </div>
</section>

<section>
  <div className=" mt-6 text-[#1E3A8E] text-7xl text-center">
    HEFGRO Smart Business Suite </div>
  <div className=" mt-2 text-[#141F29] text-xl text-center">
    Going Beyond Raw Material Supply — A Complete Smart Suite for Your Business
  </div>
  <div>
     <button className="group flex bg-green-500 hover:bg-green-600
          rounded-xl font-semibold text-white px-6 py-3 ml-130 mt-8">
            Get Started with Smart Suite 
            <svg xmlns="http://www.w3.org/2000/svg"  
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
  
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 hidden group-hover:block ">
           <path stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg>

</button>
  </div>
</section>

<section className="flex mt-28 px-12">
<div className="px-5">
  <ul className = " p-9 pl-20 border border-[#22C55E] rounded-2xl ">
  <li className = "text-[#141F29] text-2xl font-bold w-53 ">Unlock Our Business Suite at No Extra Cost</li>
  <li className ="text-[#6B7280] mt-2 w-53">Get a Smarter, More Advanced Way to Manage Your Business, 
    Get free access upon a successful raw material purchase or supply with us!</li>
  </ul>
</div>
    
  <img src="/MacBook.png" alt="Hefgro" className="w-130 h-[340px] px-5"/>
    
    <div className ="px-5">
    <ul className = "p-9 pl-20 border border-[#22C55E] rounded-2xl">
    <li className = "text-[#141F29] text-2xl w-48 font-bold">Business Suite Access Without Buying? Yes, You Can</li>
      <li className ="text-[#6B7280] mt-2 w-53 ">Even if you do not purchase raw materials from us, 
      you can still benefit from our Business Suite through flexible plans</li>
      </ul>
    </div>
        
</section>
  <div className="pl-150 mt-10">
          <button className=" text-sm text-white h-13 w-39 bg-[#05258f] font-bold px-4 py-1 rounded-xl">
            See Pricing
          </button>
 </div>
          
          <section className="flex flex-row w-[1297px] h-[512.19px] gap-3 mt-20 mx-12">
            
            <div className="flex flex-col w-[419px] h-512.19px] rounded-[16px] px-[28px] py-[36px] gap-[56px] ">
              <div className="flex flex-col w-[363px] h-[440.19px] gap-[4px]">
                
                <img src="/Dashboard.jpg" alt="Hefgro" 
                className="w-[360px] h-[277.19px] border-[0.99px] border-[#22C55E] rounded-[9.92px]"/>
                
                <div className="flex flex-col w-[353px] h-[123px] gap-9 p-4 rounded-lg">
                 
                  <div className="flex flex-col w-[363px] h-[87px] gap-2">
                    <p className="w-[363px] h-[33px] font-semibold text-[22px] text-[#141F29]">
                      Smart Inventory Management</p>
                    <p className="w-[363px] h-[46px] size-[18px] text-[#6B7280]">
                      AI-driven Inventory tracking & warehouse optimization.</p>
                  </div>
              
                </div>
            </div>
          </div>
            
            
            <div className="flex flex-col w-[419px] h-512.19px] rounded-[16px] px-[28px] py-[36px] gap-[56px] ">
              <div className="flex flex-col w-[363px] h-[440.19px] gap-[4px]">
                
                <img src="/Dashboard.jpg" alt="Hefgro" 
                className="w-[360px] h-[277.19px] border-[0.99px] border-[#22C55E] rounded-[9.92px]"/>
                <div className="flex flex-col w-[353px] h-[123px] gap-9 p-4 rounded-lg">
                  
                  <div className="flex flex-col w-[363px] h-[87px] gap-2">
                  <p className="w-[363px] h-[33px] font-semibold text-[22px] text-[#141F29]">
                    Production Planning & Monitoring</p>
                  <p className="w-[363px] h-[46px] size-[18px] text-[#6B7280]">
                    Automate workflows & track real-time efficiency.</p>
                  </div>
                </div>
                </div>
            </div>
            
            <div className="flex flex-col w-[419px] h-512.19px] rounded-[16px] px-[28px] py-[36px] gap-[56px] ">
              <div className="flex flex-col w-[363px] h-[440.19px] gap-[4px]">
                <img src="/Dashboard.jpg" alt="Hefgro" 
                className="w-[360px] h-[277.19px] border-[0.99px] border-[#22C55E] rounded-[9.92px]"/>
                <div className="flex flex-col w-[353px] h-[123px] gap-9 p-4 rounded-lg">
                  
                  <div className="flex flex-col w-[363px] h-[87px] gap-2">
                    <p className="w-[363px] h-[33px] font-semibold text-[22px] text-[#141F29]">
                      Smart Accounting & Cost Control</p>
                    <p className="w-[363px] h-[46px] size-[18px] text-[#6B7280]">
                      Tax automation, profit tracking & expense management.</p>
                  </div>
                
                </div>
              </div>
            </div>

          </section>

          <h2 className="text-center text-2xl text-[#6B7280]">E-Commerce</h2>
          <p className="mt-10 text-[#1E3A8E] text-6xl font-bold text-center w-[1100px] pl-70">
            Showcase Your Final Products to the World
          </p>

          <section className="w-[1296px] h-[607px] rounded-[32px] bg-[#ffffff] mt-20 px-20">

            <div className="flex flex-col w-[649px] h-[205px]  mt-[39.81px] ml-[48px] gap-[40px]">
              <div className="flex flex-col w-[649px] h-auto gap-4">
                <p className="w-[568px] h-[41px] font-bold text-[32px] text-[#141F29]">
                  Why use our show case?
                </p>
                <p className="w-[470px] h-[60px] text-[14px] text-[#6B7280]">
                  Find quality finished products from trusted manufacturers worldwide. 
                  Whether you're shopping for yourself or buying in bulk for your business, 
                  our platform helps you get the best products at the best prices.
                </p>

                <button className="group flex  w-[220px] h-[48px] bg-green-500 hover:bg-green-600
          rounded-xl font-semibold text-white px-3 py-3  mt-8">
            List Your Products Now 
            <svg xmlns="http://www.w3.org/2000/svg"  
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 group-hover:hidden">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
  
           <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 hidden group-hover:block ">
           <path stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg>

</button>
</div>
 </div>    
 
 <div className="flex flex-row w-[1200px] h-[260px]  ml-[48px]">
  <div className="flex flex-row w-[288px] h-[260px] rounded-[20px] p-[24px] mt-10 gap-[19px] bg-[#ffffff]">
    <div className="flex flex-col w-[240px] h-auto ">
      <div className="flex flex-col w-[240px] h-[126px] ">
        <FontAwesomeIcon icon = {faCube} className="text-2xl text-green-600"/>
        <h5 className="w-236px] h-[60px] font-medium pt-6 text-[24px] text-[#141f29]">
          Global Reach
        </h5>
        <p className="w-[180px] h-[60px]  font-normal text-[14px] text-[#6b7280]">
          Your products become visible to buyers worldwide, expanding your market effortlessly.
        </p>
      </div>
    </div>
  </div>

  <div className="flex flex-row w-[288px] h-[260px] rounded-[20px] p-[20px] mt-10  bg-[#ffffff]">
     <div className="flex flex-col w-[240px] h-auto ">
      <div className="flex flex-col w-[240px] h-[126px] ">

        <FontAwesomeIcon icon = {faCube} className="text-2xl text-green-600 "/>
        <h5 className="w-[200px] h-[60px] font-medium pt-8 text-[24px] text-[#141f29]">
          Direct Manufacturer Access
        </h5>
        <p className="w-[180px] h-[60px]  font-normal mt-20 text-[14px] text-[#6b7280]">
          Buyers connect directly with you, ensuring better prices and transparent communication.
        </p>
      </div>
    </div>
  </div>

  <div className="flex flex-row w-[288px] h-[260px] rounded-[20px] p-[24px] mt-10 gap-[19px] bg-[#ffffff]">
    <div className="flex flex-col w-[240px] h-auto gap-4">
      <div className="flex flex-col w-[240px] h-[126px]">

        <FontAwesomeIcon icon = {faCube} className="text-3xl text-green-600  rounded-full"/>
        <h5 className="w-[236px] h-[60px] font-medium pt-6 text-[24px] text-[#141f29]">
          Simple & Effective
        </h5>
        <p className="w-[180px] h-[60px]  font-normal  text-[14px] text-[#6b7280]">
          A clean, easy-to-navigate online display that highlights your product details, images, and pricing.
        </p>
      </div>
    </div>
  </div>

  <div className="flex flex-row w-[288px] h-[260px] rounded-[20px] p-[24px] mt-10 gap-[19px] bg-[#ffffff]">
    <div className="flex flex-col w-[240px] h-auto ">
      <div className="flex flex-col w-[240px] h-[126px]">

        <FontAwesomeIcon icon = {faCube} className="text-2xl text-green-600"/>
        <h5 className="w-[200px] h-[60px] font-medium pt-6 text-[24px] text-[#141f29]">
          Wholesale & Retail Friendly
        </h5>
        <p className="w-[180px] h-[60px]  font-normal mt-10 text-[14px] text-[#6b7280] ">
          Cater to both bulk buyers and retail customers with flexible options.
        </p>
      </div>
    </div>
  </div>

 </div>
</section>


<section className="flex w-[1296px] h-[609px] rounded-[32px] bg-[#ffffff] px-8 py-10">


  <div className="flex flex-col w-[820px] ml-[100px]">
    <div className="flex flex-col mt-[40px] ">
      <div className="flex flex-col w-[600px] h-[230px] gap-[20px]">
        <h4 className="w-[694px] h-[82px] font-medium text-[32px] text-[#141F29]">
          Shop Direct from Manufacturers - Perfect for Retail & Wholesale!
        </h4>
        <p className="w-[617px] h-[60px] font-normal text-[14px] text-[#6b7280]">
          Find quality finished products from trusted manufacturers worldwide.
          Whether you're shopping for yourself or buying in bulk for your business,
          our platform helps you get the best products at the best prices.
        </p>
<div>
          <button className="group flex bg-[#05258f] 
            rounded-xl font-semibold text-white px-6 py-3 mt-3 text-[18px]">
            shopnow
            <svg xmlns="http://www.w3.org/2000/svg"  
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 group-hover:hidden">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 hidden group-hover:block">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
</button>
        </div>
      </div>
    </div>

  
    <div className="grid grid-cols-2 grid-rows-2  mt-20 mb-40 ml-10 w-[694px]">
      <div className="flex flex-col ">
        <p className="w-[291px]font-medium text-[16px] text-[#141F29]">
          Wide Selection for Everyone
        </p>
        <p className="text-[#6b7280] w-[260px]">
          Shop a variety of products that fit both personal and business needs.
        </p>
      </div>

      <div className="flex flex-col ">
        <p className="w-[291px]  font-medium text-[16px] text-[#141F29]">
          Trusted Suppliers You Can Rely On
        </p>
        <p className="text-[#6b7280]  w-[280px]">
          All manufacturers are verified to ensure quality and on-time delivery.
        </p>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-2  w-[694px] ">
<div className="flex flex-col">
        <p className="w-[291px]  font-medium text-[16px] text-[#141F29]">
          Save Money by Buying Direct
        </p>
        <p className="text-[#6b7280]  w-[260px]">
          No middlemen means better prices and clear costs.
        </p>
      </div>

      <div className="flex flex-col ">
        <p className="w-[291px] font-medium text-[16px] text-[#141F29]">
          Shop Anytime, Anywhere
        </p>
        <p className="text-[#6b7280]  w-[270px]">
          Our platform is open 24/7 and easy to use from anywhere in the world.
        </p>
      </div>
      </div>
    </div>
  </div>

  
  <div className="flex items-center justify-center w-[476px]">
    <img src="/Frame.png" alt="Hefgro" className="h-[580px] " />
  </div>
</section>

<section className="flex flex-col w-[1300px] h-[742.94px] bg-white pt-[56px] mt-16 relative">
   <div className="flex flex-row w-[1268px] h-[380px] ml-[72px] ">
  
  <div className="flex flex-col w-[655px] h-[198px]">
  <h4 className="text-[56px] font-bold text-[#05258f] w-[655px] h-[138px]">
    Business Support Services
  </h4>
  <p className="text-[#6b7280] mt-8 w-[380px]">
    More Than Just Raw Material Supply — Expert Solutions to 
    Boost Your Production and Drive Business Growth
  </p>
</div>

<div className="flex flex-col w-[538px] h-[480px] rounded-[20px]  pl-8 gap-4 bg-[#f9fafb]
   absolute top-[80px] right-[72px] z-10 shadow-md ">


<div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600  m-6 rounded-full" />
 <div>
 <h4 className="text-[26px]  text-[#141F29] w-[455px] ">Work More Efficiently</h4>
<p className="text-[20px] text-[#6b7280]  w-[340px]">Make your production and processes smoother.</p>
</div>
</div>

<div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600 m-6 rounded-full" />
<div>
  <h4  className="text-[26px]  text-[#141F29] w-[455px]">Grow Sales</h4>
<p className="text-[20px] text-[#6b7280]  w-[340px]">Reach more customers with better marketing.</p>
</div>
</div>

<div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600 m-6 rounded-full" />
<div>
  <h4 className="text-[26px]  text-[#141F29] w-[455px] ">Save Money</h4>
<p className="text-[20px] text-[#6b7280]  w-[390px]">Cut costs with smart buying and resource use.</p>
</div>
</div>

<div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600  m-6 rounded-full" />
<div>
  <h4 className="text-[26px]  text-[#141F29] w-[455px] ">Know Your Competition</h4>
<p className="text-[20px] text-[#6b7280]  w-[340px]">Stay ahead with useful market and competitor research.</p>
</div>
</div>

</div>

</div>

<div className="relative w-[1320px] h-[383px]  bg-[#141F29]/40 mt-[80px]"> 
 <div className="absolute top-70 left-[63px] w-[1213px] h-[0px] border-1 border-white "> 
 </div>
 
 <div className="absolute top-70 left-[63px] w-[613px] h-[0px] mt-10 text-4xl text-white font-bold">
  We provide expert support and smart solutions to improve how you run your business.
 </div>
 
  <img src="/Container.jpg" alt="Hefgro" 
  className="w-[1440px] h-[453px]"/>
</div>

</section>


<section className="flex flex-col w-[1240px] h-[685px] pt-[56px] pr-[72px] pb-[56px] pl-[72px] gap-2 mt-20 bg-white">
  <div className="w-[1196px] h-[573px] rounded-[36px] bg-[#1E3A8A] flex  px-[56px] pt-[40px]">
    <div className="flex flex-col w-[610px] h-[409px] ml-[56px] gap-[40px]">
    <div className="flex flex-col w-[610px] h-[321px] gap-[28px]">
    <p className="w-[540px] h-[129px] font-medium text-[36px] text-white">
      Become a Supplying Partner - Grow Your Raw Material Sales with HEFGRO
</p>
<div className="flex flex-col w-[490px] h-[164px] gap-[20px] mt-9 font-normal text-[16px] text-[#F9FAFB]">
  
  <div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600  m-4 rounded-full" />
  <p>
    Join our network of verified suppliers and get free access to smart tools,
    expert support, secure payments, and customized contracts that protect your business.
  </p>
  </div>

  <div className="flex">
  <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600  m-4 rounded-full" />
  <p>
    Boost your sales with verified manufacturing and wholesale
    buyers, while HEFGRO handles sourcing, payments, and contracts
    for you.
  </p>
  </div>

</div>
</div>
<div>
<button className="group flex bg-[#FFFFFF] 
            rounded-xl font-semibold text-black px-6 py-3 ml-5 text-[18px] mt-5">
            Start Selling Globally - Its' Free

            <svg xmlns="http://www.w3.org/2000/svg"  
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 group-hover:hidden">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 hidden group-hover:block">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
</button>
</div>
</div>


<div className="">
  <img src="/Containr1.jpg" alt="Hefgro" 
  className=" h-[500px] rounded-[28px]" />
</div>
  
</div>

</section>

<div className="mt-7 pl-[370px]">
  <h4 className="text-6xl text-[#1E3A8A] text-center w-[650px] font-semibold">Accelerate Your Business with HEFGRO</h4>
<p className="text-[20px] text-[#6b7280] text-center  w-[600px] pl-16 mt-5">More Than Just Raw Material Supply — Expert Solutions to 
Boost Your Production and Drive Business Growth</p>
</div>

<section>
  <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[1200px] h-[560px] m-10 ml-20">
   
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]  bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faGlobe} className="text-7xl text-green-600  rounded-full" />
    <h5 className="text-3xl text-[#141F29] mt-10">Global Reach</h5>
    <p className="text-[#6b7280] mt-7 text-1xl">Get raw materials from trusted suppliers worldwide</p>
  </div>
  
  
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]   bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faBox} className="text-7xl text-green-600  rounded-full" />
    <h4 className="text-3xl text-[#141F29] mt-10">No Order Minimums</h4>
    <p className="text-[#6b7280] mt-7 text-1xl">Buy exactly what you need.</p>
  </div>
  
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]   bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faLock} className="text-7xl text-green-600  rounded-full" />
    <h4 className="text-3xl text-[#141F29] mt-10">Secure Payments</h4>
    <p className="text-[#6b7280] mt-7 text-1xl">Buy exactly what you need.</p>
  </div>
  
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]   bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faClock} className="text-7xl text-green-600  rounded-full" />
    <h4 className="text-3xl text-[#141F29] mt-10">Cost & Time Saving Procurement</h4>
    <p className="text-[#6b7280] mt-7 text-1xl">Get materials faster and cheaper</p>
  </div>
  
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]   bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faCheckSquare} className="text-7xl text-green-600  rounded-full" />
    <h4 className="text-3xl text-[#141F29] mt-10">All-in-One Platform</h4>
    <p className="text-[#6b7280] mt-7 text-1xl">Manage everything easily.</p>
  </div>

 <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px]   bg-[#ffffff] shadow-md">
    <FontAwesomeIcon icon={faRobot} className="text-7xl text-green-600  rounded-full" />
    <h4 className="text-3xl text-[#141F29] mt-10">Smart Tech</h4>
    <p className="text-[#6b7280] mt-7 text-1xl">AI-powered quotes and tools.</p>
  </div>
</div>
</section>

<div className="mt-7 pl-[370px]">
  <h4 className="text-6xl text-[#1E3A8A] text-center w-[650px] font-semibold">What Our Clients Say?</h4>
<p className="text-[20px] text-[#6b7280] text-center  w-[600px] pl-16 mt-5">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>

<div className="w-[1296px] h-[531.22px] ml-9">
  <div className="w-[1296px] h-[400px] mt-[131px] rounded-[36px] bg-[#22C55E]">
  <section>
  <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[1200px] h-[560px] m-10 ml-20">
   
  <div className="w-[340px] h-[250px] p-[24px]">
    <p className="text-[#ffffff] mt-5 text-5xl font-bold">Manage Your
Business Anywhere
with Our Mobile App</p>
  </div>
  
  
  <div className="w-[450px] h-[162px] mt-2 mb-22 ">
  <div className="">
  <img src="/Mobile.png" alt="Hefgro" 
  className=" w-[468px] h-[531px] mb-60 mr-50" />
</div>
    
  </div>
  
  <div className="w-[386.67px] h-[262px] rounded-[20px] p-[24px] ">
    
    
  </div>
  
</div>
</section>
</div>
</div>

<div className="mt-7 pl-[190px]">
  <h4 className="text-6xl text-[#1E3A8A] text-center w-[950px] font-semibold">
    Get Started with HEFGRO Today!</h4>
<p className="text-[20px] text-[#6b7280] text-center  w-[700px] pl-46 mt-5">
  Transform Your Business, Scale Faster & Stay Ahead</p>
</div>


<section>
  <div className="grid grid-cols-3 w-[1345px]  mt-10">

   
    <div className="relative w-full h-[383px] bg-[#141F29]/40  overflow-hidden">
      <img src="/Grid1.jpg" alt="Hefgro"
        className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-xl font-semibold w-[380px]">
        We provide expert support and smart solutions to improve how you run your business.
      </div>
    </div>

  
   <div className="relative w-full h-[383px] bg-[#141F29]/40 overflow-hidden">
      <img src="/Grid2.png" alt="Hefgro"
        className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-xl font-semibold w-[380px]">
        We provide expert support and smart solutions to improve how you run your business.
      </div>
    </div>

  
   <div className="relative w-full h-[383px] bg-[#141F29]/40  overflow-hidden">
      <img src="/Grid3.png" alt="Hefgro"
        className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-xl font-semibold w-[380px]">
        We provide expert support and smart solutions to improve how you run your business.
      </div>
    </div>

  </div>
</section>


<section className="w-full h-[700px] flex items-center justify-center bg-gray-100 mt-20">
  <div className="w-[1000px] h-full flex rounded-3xl overflow-hidden shadow-lg bg-white">

   
    <div className="w-600 h-full">
      <img src="/Form.jpg" alt="Partner With Us" className="w-100 h-full " />
    </div>

   
    
    <div className="w-600 p-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Let's Build Success Together <br /> Partner with Us!
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below, and our team will connect with you.
      </p>

 <form className="space-y-4">
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-md" />
        <label>Your Email Address</label>
        <input type="email" placeholder="Your Email Address" className="w-full border p-3 rounded-md" />
        <label>Compant Name</label>
        <input type="text" placeholder="Company Name" className="w-full border p-3 rounded-md" />
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-md" />
        <label>Select Your Country</label>
        <input type="text" placeholder="Select your country" className="w-full border p-3 rounded-md" />
        <label>Your Message</label>
        <textarea placeholder="Your Message" className="w-full border p-3 rounded-md h-24"></textarea>

        
        <div className="space-x-2 flex flex-wrap">
          <label>Select Partnership</label>
          <div>
          <button type="button" className="border px-3 py-1 rounded-md">Investor</button>
          <button type="button" className="border px-3 py-1 rounded-md">Finance</button>
          <button type="button" className="border px-3 py-1 rounded-md">Logistics</button>
<button type="button" className="border px-3 py-1 rounded-md">Technology</button>
<button type="button" className="border px-3 py-1 rounded-md">Supplier</button>
<button type="button" className="border px-3 py-1 rounded-md">Legal</button>
<button type="button" className="border px-3 py-1 rounded-md">General</button>
        </div>
</div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree" className="text-sm text-gray-600">
            I agree to receive updates and communications.
          </label>
        </div>

        <button className="group flex bg-[#05258f] 
            rounded-xl font-semibold text-white px-6 py-3 mt-3 text-[18px]">
            shopnow
            <svg xmlns="http://www.w3.org/2000/svg"  
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 group-hover:hidden">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 ml-2 hidden group-hover:block">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
</button>
      </form>
    </div>
  </div>
</section>

  </div>

  )
}

export default App */}
