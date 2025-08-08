
import React from 'react'
import './App.css'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faBolt, faBoltLightning, faBottleDroplet, faBox, faBuilding, faCar, 
  faCheckCircle, 
  faCheckSquare, 
  faClock, 
  faCube, 
  faCubes, 
  faDesktop, faFlask, faFlaskVial, faGasPump, faGlobe, faHammer, faIndustry, faLeaf,
  faLock, faRecycle, faRobot, faSeedling, faShirt, faShoppingCart, 
  faStethoscope, faTags, faThLarge, faTruck, faTruckFast, faUtensils,
  faWarehouse} from 
  '@fortawesome/free-solid-svg-icons';

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const PhoneNumber = /^[0-9]+/;

  const basicSchema = Yup.object().shape({
    FullName:Yup.string()
    .min(2,"Too short")
    .max(50,"Too long")
    .required("This field is required"),
    
    Email: Yup.string()
    .email("Please enter the valid address")
    .required("This field is required"),

    PhoneNumber: Yup.string()
    .min(10,"invalid number")
    .max(10,"invalid number")
    .matches(PhoneNumber)
    .required("This field is required"),

    Password: Yup.string()
    .min(8, "Minimum  8 characters required")
    .matches(passwordRules)
    .required("This field is required"),

    ConfirmPassword : Yup
    .string()
    .oneOf([Yup.ref("Password"),null], "Password and Confirm Password are not matching")
    .required("This field is required"),

    CompanyName : Yup
    .string()
    .required("This field is required"),

    Checkbox : Yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),

    Country: Yup
    .string()
    .required("This field is required"),

    Message: Yup
    .string()
    .required("This field is required"),

    Partnership: Yup.string()
    .required("Please select a partnership type"),


  }) ;

  const onSubmit = async (values,actions) =>{
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve,100))
    actions.resetForm()
  };
  
  const WebPage = () => {
  const [showAll, setShowAll] = useState(false);

  const {values, handleChange, handleBlur,errors, touched, isSubmitting, handleSubmit} = useFormik({
    initialValues:{
      FullName:'',
      Email:'',
      Password:'',
      ConfirmPassword:'',
      PhoneNumber:'',
      CompanyName:'',
      Checkbox: '',
      Message: '',
      Country: '',
      Partnership: '',
    },
    
   validationSchema: basicSchema ,
   onSubmit,
  
  });
  
   console.log(touched);

  return (
    <div className="font-poppins">
      
      <section
        className="bg-cover bg-center text-white min-h-screen pt-11 pb-12 px-4 md:px-[73px]"
        style={{
          backgroundImage: "url('/bg-ship.jpg')"
        }}>

        
        <header className="bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row 
        justify-between items-center md:h-20 
        font-poppins font-medium text-base md:text-[22px] leading-[24px] rounded-2xl 
        max-w-full md:w-[1200px] mx-auto space-y-4 md:space-y-0">
          
         
          <div className="flex items-center">
            <img src="/logo.png" alt="Hefgro" className="h-[50px] md:h-[60px] w-auto" />
          </div>

          
          <nav className="hidden md:flex space-x-6 text-[#141F29] sticky top-0 left-0 z-50">
            <div className="cursor-pointer hover:text-blue-600">Smart Business suite</div>
            <div className="cursor-pointer hover:text-blue-600">Industries we serve</div>
            <div className="cursor-pointer hover:text-blue-600">Ecommerce</div>
            <div className="cursor-pointer hover:text-blue-600">Services</div>
          </nav>

          
          <div className="flex space-x-2 text-sm">
            <button className="text-black border border-white px-4 py-1 rounded-md
             hover:bg-white hover:text-[#001e3c] transition">
              Login
            </button>
            <button className="text-white bg-[#05258f] font-semibold px-4 py-1 
            rounded-xl hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </header>
      

    <div className="max-w-4xl m-0 px-4 md:px-0 text-center md:text-left">
  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-8 max-w-full 
  md:max-w-[670px] mx-auto md:mx-0">
    Smart RFQs & Fast Delivery for Your Raw Materials
  </h1>
  <p className="text-sm md:text-base mb-6 max-w-full md:max-w-[450px] mx-auto md:mx-0">
    Easily Source Raw Materials, Get Production Help, Use Smart Business Tools,
    and Enjoy Fast Delivery — Manage your supply chain and grow your MSME or large business with HEFGRO.
  </p>
</div>

<div className="flex justify-center sm:justify-start">
  <button className="group flex items-center 
    bg-green-500 hover:bg-green-600
    rounded-xl font-semibold text-white px-6 py-4 transition">
    Join Free Today

    
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



<div className="flex justify-center md:justify-end px-4">
  <div className="w-full max-w-6xl mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-7">
    
    
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Industries sectors</h3>
      <p className="text-4xl font-bold">20+</p>
    </div>

    
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Raw Materials</h3>
      <p className="text-4xl font-bold">100+</p>
    </div>

    
    <div className="bg-white/40 rounded-xl pt-6 pl-5 pb-6 shadow-md text-left">
      <h3 className="text-lg font-semibold mb-2">Location</h3>
      <p className="text-4xl font-bold">70+</p>
    </div>
  </div>
</div>

</section>

<div className="bg-white px-4 md:pl-14 text-left">
 <h1 className="text-[#1E3A8E] text-3xl md:text-6xl font-bold 
 leading-tight mt-8 max-w-full md:max-w-[870px] text-center md:text-left mx-auto md:mx-0">
  Empowering Businesses with Smart Sourcing & Operations
</h1>

<p className="text-black mt-6 text-base md:text-lg max-w-full 
md:max-w-[410px] text-center md:text-left mx-auto md:mx-0">
  We provide high-quality raw materials, optimized procurement, and seamless 
  supply chain solutions across multiple industries.
</p>


  <div className="flex justify-end mt-6">
    <button  onClick={() => setShowAll(!showAll)}

    className="flex items-center bg-green-500 hover:bg-blue-600 
    px-6 py-3 rounded-xl font-semibold text-white transition">

      { showAll ? "Show Less" : "View All"}

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

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
gap-6 px-6 md:px-28 py-5 text-black text-center">
  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 
  py-9 text-2xl flex flex-col items-center justify-between rounded-3xl 
  transition-all shadow-md">
    <FontAwesomeIcon icon={faSeedling} className="p-4 mb-4 bg-white rounded-full 
    text-4xl text-green-400" />
    Agriculture & Agri tech
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl
   flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faUtensils} className="p-4 mb-4 bg-white rounded-full
     text-4xl text-green-400" />
    Food & Beverage
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faHammer} className="p-4 mb-4 bg-white rounded-full 
    text-4xl text-green-400" />
    Mining & Metals
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md" >
    <FontAwesomeIcon icon={faBoltLightning} className="p-4 mb-4 bg-white 
    rounded-full text-4xl text-green-400" />
    Energy & Power
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

{showAll && (
  <>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faBuilding} className="p-4 mb-4 bg-white 
    rounded-full text-4xl text-green-400" />
    Construction & Infrastructure
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faFlask} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Chemicals & Specialty
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faShirt} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Textile & Apparel
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faIndustry} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Manufacturing & Heavy Industries
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl flex
   flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faStethoscope} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Pharmaceuticals & Healthcare
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faRecycle} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Recycling & Waste Management
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faTags} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Wholesale & Distribution
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faShoppingCart} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Retail & E-Commerce
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faTruck} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Transportation & Logistics
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl 
  flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faDesktop} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Electronics & Electrical
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>

  <div className="hover:bg-green-500 hover:text-white h-[270px] px-4 py-9 text-2xl
   flex flex-col items-center justify-between rounded-3xl transition-all shadow-md">
    <FontAwesomeIcon icon={faCar} className="p-4 mb-4 bg-white rounded-full text-4xl text-green-400" />
    Automobile & Parts Manufacturing
    <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
  </div>
    </>
  )}
</div>

<div className="bg-white pl-4 md:pl-14 text-left">
  <h1 className="text-[#1E3A8E] text-3xl md:text-6xl font-bold leading-tight 
  max-w-[870px] mt-8 text-center md:text-left mx-auto md:mx-0">
  Essential Raw Materials & Products for Every Industry
</h1>

<p className="text-black mt-6 text-[16px] md:text-[20px] max-w-[589px] text-center md:text-left mx-auto md:mx-0">
  Discover top-quality materials and supplies designed to fuel your business 
  growth and streamline your operations
</p>
 
  <div className="flex justify-end mr-4 md:mr-28">
    <button   onClick={() => setShowAll(!showAll)}
    className="flex items-center gap-2 bg-green-500 hover:bg-blue-600 px-6 py-3 mt-6
      rounded-xl font-semibold text-white">
      
      { showAll ? "Show Less" : "View All"}

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

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl
   shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faLeaf} className="mb-2 text-3xl text-green-600" />
    Fertilizers
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faCubes} className="mb-2 text-3xl text-green-600" />
    Raw Minerals & Ores
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faGasPump} className="mb-2 text-3xl text-green-600" />
    Petroleum & Refinery Products
  </div>

  {showAll && (
  <>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faBolt} className="mb-2 text-3xl text-green-600" />
    Energy materials
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl
   shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faThLarge} className="mb-2 text-3xl text-green-600" />
    Building Materials (Cement, Bricks, Steel)
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faFlaskVial} className="mb-2 text-3xl text-green-600" />
    Industrial Chemicals & Specialty Products
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl
   shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faBottleDroplet} className="mb-2 text-3xl text-green-600" />
    Specialty Coatings & Adhesives
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faShirt} className="mb-2 text-3xl text-green-600" />
    Textiles & Fabrics
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faStethoscope} className="mb-2 text-3xl text-green-600" />
    Pharmaceutical Ingredient
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faRecycle} className="mb-2 text-3xl text-green-600" />
    Recycling Raw Materials
  </div>

  <div className="hover:bg-green-500 hover:text-white min-h-[170px] p-6 rounded-2xl 
  shadow-md flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faTruckFast} className="mb-2 text-3xl text-green-600" />
    Wholesale Bulk Supplies
  </div>
</>
  )}
</div>

<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-6 text-[22px]">
  <button className="group flex items-center bg-green-500 hover:bg-green-600 
  rounded-xl font-semibold text-white px-6 py-4">
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

  <button className="font-semibold text-black text-sm border border-white px-4 py-2 
  rounded-md hover:bg-white hover:text-[#001e3c] transition">
    Contact us
  </button>
</div>

<section className="py-16 px-4 md:px-6 bg-white">
  <h4 className="uppercase text-gray-500 text-sm mb-2 text-center md:text-left">Why You Choose Us</h4>
  <h1 className="text-3xl text-gray-900 font-bold mb-8 text-center md:text-left">
    Turning Pain Points into Power Plays
  </h1>

  <div className="flex flex-col lg:flex-row gap-10">
    
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
    plus powerful business tools and expert guidance – all designed to simplify your 
    operations and accelerate your growth.
  </p>
  <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md
   hover:bg-green-100 transition">
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
  <button className="bg-green-500 text-white px-6 py-3 font-semibold rounded-md 
  hover:bg-green-600 transition">
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

 
  <img src="/MacBook.png" alt="Hefgro" className="w-full max-w-sm h-auto px-5" />

  
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

<p className="mt-6 md:mt-10 text-[#1E3A8E] text-3xl md:text-5xl lg:text-6xl 
font-bold text-center max-w-[95%] md:max-w-[90%] lg:max-w-[1100px] mx-auto px-4">
  Showcase Your Final Products to the World
</p>


<section className="w-full max-w-[1296px] mx-auto rounded-[32px] bg-[#ffffff]
 mt-20 px-4 md:px-10 lg:px-20">

  
  <div className="flex flex-col w-full md:w-[649px] mt-10 md:mt-[39.81px] ml-0 md:ml-[48px] gap-10">
    <div className="flex flex-col gap-4">
      <p className="text-[24px] md:text-[32px] font-bold text-[#141F29]">
        Why use our show case?
      </p>
      <p className="text-[14px] text-[#6B7280] max-w-[470px]">
        Find quality finished products from trusted manufacturers worldwide.
         Whether you're shopping for yourself or buying in bulk for your business, 
         our platform helps you get the best products at the best prices.
      </p>

      <button className="group flex items-center w-[220px] h-[48px]
       bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white px-3 py-3 mt-8">
        List Your Products Now 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 group-hover:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 hidden group-hover:block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>
  </div>

  
  <div className="flex flex-wrap flex-col-4 justify-center md:justify-start gap-6 mt-10 ml-0 md:ml-[48px]">

    
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className="gap-4">
        <FontAwesomeIcon icon={faCube} className="text-2xl text-green-600" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Global Reach
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          Your products become visible to buyers worldwide, expanding your market effortlessly.
        </p>
      </div>
    </div>

    
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className=" gap-4">
        <FontAwesomeIcon icon={faCube} className="text-2xl text-green-600" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Direct Manufacturer Access
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          Buyers connect directly with you, ensuring better prices and transparent communication.
        </p>
      </div>
    </div>

    
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className=" gap-4">
        <FontAwesomeIcon icon={faCube} className="text-3xl text-green-600 rounded-full" />
        <h5 className="font-medium pt-2 text-[24px] text-[#141f29]">
          Simple & Effective
        </h5>
        <p className="text-[14px] text-[#6b7280]">
          A clean, easy-to-navigate online display that highlights your product details, images, and pricing.
        </p>
      </div>
    </div>

   
    <div className="w-full sm:w-[300px] h-auto rounded-[20px] p-[24px] bg-[#ffffff]">
      <div className=" gap-4">
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

<section className="flex flex-col lg:flex-row items-center justify-between bg-white 
rounded-[32px] px-6 py-10 w-full max-w-[1296px] mx-auto">

  
  <div className="flex flex-col w-full lg:w-1/2 lg:ml-[40px]">
    <div className="flex flex-col mt-5 w-full">
      <div className="flex flex-col gap-5 w-full">
        <h4 className="text-[24px] lg:text-[32px] font-medium text-[#141F29] 
        leading-snug text-center lg:text-left">
          Shop Direct from Manufacturers – Perfect for Retail & Wholesale!
        </h4>
        <p className="text-[14px] text-[#6b7280] text-center lg:text-left px-2 lg:px-0">
          Find quality finished products from trusted manufacturers worldwide.
          Whether you're shopping for yourself or buying in bulk for your business,
          our platform helps you get the best products at the best prices.
        </p>

       
        <div className="flex justify-center  lg:justify-start">
          <button className="group flex items-center bg-[#05258f] rounded-xl font-semibold
           text-white px-6 py-3 mt-3 text-[16px]">
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

   
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-2 lg:px-0">
      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Wide Selection for Everyone</p>
          <p className="text-[#6b7280] text-[14px]">Shop a variety of products that fit both personal 
            and business needs.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg mt-1" />
        <div>
          <p className="font-medium text-[16px] text-[#141F29]">Trusted Suppliers You Can Rely On</p>
          <p className="text-[#6b7280] text-[14px]">All manufacturers are verified to 
            ensure quality and on-time delivery.</p>
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
          <p className="text-[#6b7280] text-[14px]">Our platform is open 24/7 and easy to use 
            from anywhere in the world.</p>
        </div>
      </div>
    </div>
  </div>

  
  <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 w-full lg:w-[476px]">
    <img src="/Frame.png" alt="Hefgro" className="max-h-[400px] w-auto object-contain" />
  </div>
</section>

<section className="flex flex-col bg-white pt-10 mt-16 px-4 lg:px-0">

  
  <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1300px] 
  w-full mx-auto relative gap-10">
    
    
    <div className="flex flex-col w-full lg:w-1/2">
      <h4 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-[#05258f] leading-tight">
        Business Support Services
      </h4>
      <p className="text-[#6b7280] mt-6 text-[16px] sm:text-[18px] max-w-[400px]">
        More Than Just Raw Material Supply — Expert Solutions to 
        Boost Your Production and Drive Business Growth
      </p>
    </div>

    
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

  
  <div className="relative w-full mt-0">
    <img src="/Container.jpg" alt="Hefgro" className="w-full h-[300px]  sm:h-[380px] object-cover" />
    
    <div className="absolute top-1/2 left-4 sm:left-16 transform -translate-y-1/2
     text-white text-[20px] sm:text-[32px] font-bold max-w-[600px]">
      We provide expert support and smart solutions to improve how you run your business.
    </div>
  </div>
</section>

<section className="flex flex-col w-full bg-white pt-14 px-4 sm:px-6 lg:px-16 mt-20">
  <div className="w-full max-w-[1240px] mx-auto bg-[#1E3A8A] rounded-[36px] 
  flex flex-col lg:flex-row px-6 sm:px-10 lg:px-[56px] py-10 gap-10">

    
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
        <button className="group flex items-center bg-white rounded-xl font-semibold 
        text-black px-6 py-3 text-[16px] sm:text-[18px] mt-5">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
  gap-6 max-w-screen-xl mx-auto">
    
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
    
    
    <div>
      <p className="text-white text-3xl md:text-5xl font-bold leading-snug">
        Manage Your Business Anywhere<br />
        with Our Mobile App
      </p>
    </div>

    
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
    
    
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] 
    bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid1.jpg" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
        Stay Ahead with Business Trends & Strategies
      </div>
    </div>

    
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] 
    bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid2.png" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
        Stay Ahead with Business Trends & Strategies
      </div>
    </div>

    
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px]
     bg-[#141F29]/40 overflow-hidden rounded-xl">
      <img src="/Grid3.png" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute bottom-6 left-6 text-white text-lg sm:text-xl font-semibold max-w-xs">
       Stay Ahead with Business Trends & Strategies
      </div>
    </div>

  </div>
</section>



<div className="mt-10 px-4 md:px-12 lg:px-24 text-center">
  <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#1E3A8A] font-semibold max-w-4xl mx-auto">
    Blogs and news
  </h4>
  
  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6b7280] mt-4 mx-auto max-w-md sm:max-w-xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>


<div className="mt-8 flex justify-center lg:justify-start">
  <button className="group inline-flex items-center bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white px-6 py-3">
    Read All Blogs

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 group-hover:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 hidden group-hover:block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  </button>
</div>


<section className="px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">

    
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] rounded-xl overflow-hidden">
      <img src="/last.jpg" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 rounded-xl">
        <p className="text-lg md:text-[28px] font-semibold text-white">
          Stay Ahead with Business Trends & Strategies
        </p>
        <p className="text-sm md:text-[18px] text-gray-200 mt-1">
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive.
        </p>
      </div>
    </div>

    

    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] rounded-xl overflow-hidden">
      <img src="/last.jpg" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 rounded-xl">
        <p className="text-lg md:text-[28px] font-semibold text-white">
          Stay Ahead with Business Trends & Strategies
        </p>
        <p className="text-sm md:text-[18px] text-gray-200 mt-1">
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive.
        </p>
      </div>
    </div>

    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[383px] rounded-xl overflow-hidden">
      <img src="/last.jpg" alt="Hefgro" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 rounded-xl">
        <p className="text-lg md:text-[28px] font-semibold text-white">
          Stay Ahead with Business Trends & Strategies
        </p>
        <p className="text-sm md:text-[18px] text-gray-200 mt-1">
          Stay informed with the latest business trends, strategies, and insights to keep your company competitive.
        </p>
      </div>
    </div>

  </div>
</section>





<section className="flex flex-col lg:flex-row w-full mt-0 py-10 justify-center items-center lg:items-start lg:mt-10">

    
  <div className="w-full  lg:h-full p-7">
  <img
    src="/Form.jpg"
    alt="Partner With Us"
    className="w-full h-[200px]  object-cover rounded-3xl lg:rounded-3xl lg:h-[1280px] lg:w-170"
  />
</div>


   

<section className="rounded-3xl w-full lg:w-[1100px] p-4">
    <div className="  bg-gray-100 rounded-3xl p-8  shadow-lg">
  <h2 className="text-center text-xl font-semibold">
    Fill out the form below, and our team will connect with you.
  </h2>

  <form onSubmit={handleSubmit}
  className="space-y-6 max-w-3xl mx-auto rounded-3xl">

    {/*  Name */}
    <div>
      <label className="block mb-1 text-gray-700"> Full Name</label>
      <input 
      id="FullName" 
      name="FullName" 
      type="text" 
      placeholder="Enter Your Name"
       value={values.FullName}
       onChange={handleChange}
       onBlur={handleBlur}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 
        " />
        {touched.FullName && errors.FullName && 
        <p className = "text-red-500 text-sm">{errors.FullName}</p>} 

    </div>

    {/* Email */}
    <div>
      <label className="block mb-1 text-gray-700">Email</label>
      <input 
      id = ""
      name="Email" 
      type="email" 
      placeholder="Your email address"
      value={values.Email}
      onChange={handleChange}
      onBlur={handleBlur}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 " />
       {touched.Email && errors.Email && 
        <p className = "text-red-500 text-sm">{errors.Email}</p>}
    </div>

     {/* Password */}
    <div>
      <label className="block mb-1 text-gray-700">Password</label>
      <input name="Password" type="Password" placeholder="Enter Your Password"
      value={values.Password}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full px-4 py-3 rounded-xl border border-gray-300
        " />

        {touched.Password && errors.Password && 
        <p className = "text-red-500 text-sm">{errors.Password}</p>} 

    </div>

 {/* Confirm Password */}
    <div>
      <label className="block mb-1 text-gray-700">Confirm Password</label>
      <input name="ConfirmPassword" type="Password" placeholder=" Enter Your Confirm Password"
      value={values.ConfirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full px-4 py-3 rounded-xl border border-gray-300
        " />

         {touched.ConfirmPassword && errors.ConfirmPassword && 
        <p className = "text-red-500 text-sm">{errors.ConfirmPassword}</p>} 

    </div>

    {/* Company Name */}
    <div>
      <label className="block mb-1 text-gray-700">Company Name</label>
      <input 
      id = "CompanyName"
      name="CompanyName" 
      type="text" 
      placeholder="Company name"
        value={values.CompanyName}
        onChange={handleChange}
        onBlur={handleBlur} 
        className="w-full px-4 py-3 rounded-xl border border-gray-300 " />

        {touched.CompanyName && errors.CompanyName && 
        <p className = "text-red-500 text-sm">{errors.CompanyName}</p>} 
    </div>

    {/* Phone Number */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      
      <div className="flex items-center gap-2 border  px-3 py-2 rounded-xl bg-white">
        🇮🇳
        <select className="outline-none text-sm">
          <option>+91</option>
          <option>+1</option>
        </select>
      </div>
      <input name="PhoneNumber" type="text" placeholder="8023456789"
      value={values.PhoneNumber}
        onChange={handleChange}
        onBlur={handleBlur} 
        className="w-full px-4 py-3 rounded-xl border border-gray-300 
        " />

         {touched.PhoneNumber && errors.PhoneNumber && 
        <p className = "text-red-500 text-sm">{errors.PhoneNumber}</p>}
    </div>

    {/* WhatsApp Checkbox */}
    <div className="flex items-center gap-3">
      <input type="checkbox" 
      name ="Checkbox" 
      id="whatsapp"
      value={values.Checkbox}
        onChange={handleChange}
        onBlur={handleBlur} 
        className="w-5 h-5 " />
      <label htmlFor="whatsapp" className="flex items-center gap-2 text-gray-700">
        <img src="/whatsapp-icon.png" alt="whatsapp" className="w-5 h-5" 
        />
        Given number is your WhatsApp number
      </label>
    </div>

    {/* Country */}
    <div>
      <label className="block mb-1 text-gray-700">Select your country</label>
      <select 
      name = "Country"
      value={values.Country}
        onChange={handleChange}
        onBlur={handleBlur} 
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white">
        <option>Select</option>
        <option>India</option>
        <option>USA</option>
      </select>
      {touched.Country && errors.Country && 
        <p className = "text-red-500 text-sm">{errors.Country}</p>}
    </div>

    {/* Message */}
    <div>
      <label className="block mb-1 text-gray-700">Your Message</label>
      <textarea placeholder="Type your message"
      name = "Message"
      value={values.Message}
        onChange={handleChange}
        onBlur={handleBlur} 
        className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32 resize-none" />

        {touched.Message && errors.Message && 
        <p className = "text-red-500 text-sm">{errors.Message}</p>}
    </div>

    {/* Partnership Buttons */}
    <div>
  <label className="block mb-2 text-gray-700">Select Partnership</label>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    {["Investor", "Finance", "Logistics", "Technology", "Supplier", "Legal", "General"].map((type) => (
      <button
        key={type}
        type="button"
        onClick={() => handleChange({ target: { name: "Partnership", value: type } })}
        className={`px-4 py-2 rounded-xl border text-sm 
          ${values.Partnership === type ? "bg-green-500 text-white" : "border-gray-300 hover:bg-green-500"}`}
      >
        {type}
      </button>
    ))}
  </div>
  {touched.Partnership && errors.Partnership && (
    <p className="text-red-500 text-sm">{errors.Partnership}</p>
  )}
</div>


    {/* Updates Checkbox */}
    <div className="flex items-start gap-3">
      <input type="checkbox" name = "Checkbox"
      value={values.Email}
      onChange={handleChange}
      onBlur={handleBlur}
      className="mt-1 w-5 h-5 text-green-500 rounded" />

      {touched.Checkbox && errors.Checkbox && 
        <p className = "text-red-500 text-sm">{errors.Checkbox}</p>} 

      <p className="text-gray-700">
        I agree to receive updates and communications from HEFGRO.
      </p>
    </div>

    {/* Submit */}
   <div className="mt-8 flex justify-center sm:justify-start">
  <button
    type="submit"
    disabled={isSubmitting}
    className="group w-full sm:w-full inline-flex items-center justify-center
     bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white px-6 sm:px-12 py-3 text-lg"
  >
    Submit
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 group-hover:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 ml-2 hidden group-hover:block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  </button>
</div>


  </form>
</div>
    </section>
  
</section>




</div>
  );
}

export default WebPage;

