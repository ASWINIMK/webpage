
import React from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faBolt, faBoltLightning, faBottleDroplet, faBuilding, faCar, 
  faCube, 
  faCubes, 
  faDesktop, faFlask, faFlaskVial, faGasPump, faHammer, faIndustry, faLeaf, faRecycle, faSeedling, faShirt, faShoppingCart, 
  faStethoscope, faTags, faThLarge, faTruck, faTruckFast, faUtensils,
  faWarehouse} from 
  '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="font-poppins"> 
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white h-[770px] pt-11 pb-12 px-[73px] "
        style={{
          backgroundImage: "url('/bg-ship.jpg')"
        }}>

          {/* Navbar */}
        <header className="bg-white px-6 py-4 flex justify-between items-center h-20 
        font-poppins font-medium text-[22px] leading-[24px] rounded-2xl w-[1200px]">
        <div className="flex items-center h-[80px]">
        
        <img src="/logo.png" alt="Hefgro" className="w-auto h-[60px]"/></div>
        <nav className="hidden md:flex space-x-6  text-[#05258f]  sticky top-0 left-0 z-50 ">
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
      </header>

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
         
         {/* Feature Cards */}
      
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
          <h1 className="text-blue-800  md:text-6xl font-bold leading-tight w-[870px] mt-8">
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
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faSeedling} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
      Agriculture & Agri tech
      <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70  py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faUtensils} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Food & Beverage
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30  "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faHammer} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Mining & Metals
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all"><FontAwesomeIcon icon = {faBoltLightning} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Energy & Power
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faBuilding} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Construction & Infrastructure
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
    <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faFlask} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Chemicals & Specialty
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faShirt} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Textile & Apparel
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faIndustry} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Manufacturing & Heavy Industries
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faStethoscope} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Pharmaceuticals & Healthcare
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faRecycle} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Recycling & Waste Management
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faTags} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Wholesale & Distribution
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faShoppingCart} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Retail & E-Commerce
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faTruck} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Transportation & Logistics
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    
    <FontAwesomeIcon icon = {faDesktop} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Electronics & Electrical
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
  <div className=" hover:bg-green-500 hover:text-white 
  h-70 px-4 py-9 text-2xl flex flex-col items-center justify-between
  rounded-3xl transition-all">
    <FontAwesomeIcon icon = {faCar} className="mr-40 p-4
     bg-white rounded-full text-4xl  text-green-400"/>
    Automobile & Parts Manufacturing
    <FontAwesomeIcon icon = {faArrowRight} className="ml-30 "/>
    </div>
  
</div>


       <div className="bg-white  pl-14 text-left">
          <h1 className="text-blue-800  md:text-6xl font-bold leading-tight w-[870px] mt-8">
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
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faSeedling} className="px-8 py-4 text-2xl text-green-600"/>
    Grains, Spices, Edible-Oils
    </div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faUtensils} className="px-8 py-4 text-2xl text-green-600"/>
    Food Additives</div>
  <div className="  hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faWarehouse} className="px-8 py-4 text-2xl text-green-600"/>
    Animal Feeds</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faLeaf} className="px-8 py-4 text-2xl text-green-600"/>
    Fertilizers</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faCubes} className="px-8 py-4 text-2xl text-green-600"/>
    Raw Minerals & Ores</div>
  <div className=" hover:bg-green-500 hover:text-white h-40 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faGasPump} className="px-8 py-4 text-2xl text-green-600"/>
    Petroleum & Refinery Products</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faBolt} className="px-8 py-2 text-2xl text-green-600"/>
    Energy materials</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faThLarge} className="px-8 py-0 text-2xl text-green-600"/>
    Building Materials (Cement, Bricks, Steel)</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faFlaskVial} className="px-8 py-0 text-2xl text-green-600"/>
    Industrial Chemicals & Specialty Products</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faBottleDroplet} className="px-8 py-2 text-2xl text-green-600"/>
    Specialty Coatings & Adhesives</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faShirt} className="px-8 py-2 text-2xl text-green-600"/>
    Textiles & Fabrics</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faStethoscope} className="px-8 py-2 text-2xl text-green-600"/>
    Pharmaceutical Ingredient</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faRecycle} className="px-8 py-2 text-2xl text-green-600"/>
    Recycling Raw Materials</div>
  <div className=" hover:bg-green-500 hover:text-white h-44 p-10  rounded-2xl ">
    <FontAwesomeIcon icon = {faTruckFast} className="px-8 py-2 text-2xl text-green-600"/>
    Wholesale Bulk Supplies</div>

</div>


    <div className="bg-white   text-center text-blue-800    mt-6">
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
    </div>

  )
}

export default App
