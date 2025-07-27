
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
        className="bg-cover bg-center text-white h-[770px] pt-11 pb-12 px-[73px] "
        style={{
          backgroundImage: "url('/bg-ship.jpg')"
        }}>

          {/* Navbar */}
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
    <img src="/Frame.png" alt="Hefgro" className="h-[580px] object-contain" />
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

<div className="w-[1296px] h-[531.22px]">
  <div className="w-[1296px] h-[400px] mt-[131px] rounded-[36px] bg-[#22C55E]">
  
</div>
</div>
  </div>

  )
}

export default App
