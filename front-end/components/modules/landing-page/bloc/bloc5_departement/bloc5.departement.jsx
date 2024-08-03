"use client";

import {Card,CardHeader,CardBody,CardFooter,Typography,Button,}from "@material-tailwind/react"

export default Bloc5Departement; 
 

function Bloc5Departement() {
    
    return (
    <>
            <section className="hero">
        <div className="hero-content sm:flex sm:flex-col pb-4 md:flex md:flex-row bg-gray-1000">

         <div className="w-full md:w-1/2 flex flex-col ">
         <div className="pb-7 pt-1 pl-9">
             <Typography variant="h2"  >Departement</Typography>
         </div>
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/electricity-313716_960_720.webp"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
               Departement de Génie électrique
            </Typography>
         </div>
         </div>


         <div className="w-full md:w-1/2 pt-20 flex flex-col ">
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/depositphotos_9214295-stock-photo-technical-and-mechanical-engineering-concept.jpg"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
            Departement de Génie Mécanique
            </Typography>
         </div>
         </div>

         <div className="w-full md:w-1/2 pt-20 flex flex-col ">
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/PIC-RFP.jpg"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
            Departement de Génie Civils
            </Typography>
         </div>
         </div>

         </div>
  </section>

  
    </>);
}