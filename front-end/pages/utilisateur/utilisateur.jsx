
import Head from "next/head"; 
import Link from "next/link";

import Bloc1Sidebar from "./blocUser/bloc1.sidebar";
import Bloc2NavbarUser from "./blocUser/bloc2.navbar";
import { Button, Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";




export default Utilisateur; 

function Utilisateur() {
    

    return (<>
   <Head><title>Utilisateur</title></Head>


   <div className="flex">
      <div className="lg:w-[18%] md:w-[18%] xl:w-[18%] sm:w-[32%] bg-gray-500">
      <Bloc1Sidebar/>
      </div>
      <div className="lg:w-[82%] md:w-[82%] xl:w-[82%] sm:w-[68%]">
      <div><Bloc2NavbarUser/></div>






      <Carousel className="rounded-xl h-[400px]"   transition={{ duration: 2 }} autoplay={true} loop={true}>
      <div className="relative h-full w-full">
      <div className="    ">
      <img
       className=" rounded-lg object-cover object-center mt-4 w-full h-[400px]"
       src="/assets/images/20240527_211731.jpg"
       alt="nature image"/>
             </div>
        
      </div>
   
      <div className="relative h-full w-full">
      <img
       className=" rounded-lg object-cover object-center h-[400px] "
       src="/assets/images/bandeau-contact.jpg"
       alt="nature image"/>

    
      </div>
    </Carousel>

      



      <section className="hero pt-10">
        <div className="hero-content sm:flex sm:flex-col md:flex md:flex-row ">
         
         <div className="w-full md:w-1/2    py-3">
         <div className="text-4xl ml-4 font-bold">Telecharger votre coupon ou le visualiser 
          sur l'application web en cliquant sur le
          lien ci dessous.</div>
          
          <div className="flex items-center ml-4 gap-4 pt-[50px]">
          <div>
             <Button variant="gradient" className="flex items-center gap-3 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Telecharger coupon
             </Button>
          </div>
          <div>
          <Button color="blue" className="rounded">Visualiser coupon</Button>
          </div>

          </div>
          
          </div>
         <div className="w-full md:w-1/2 border-2 border-gray-500 shadow py-3">
         <div></div>
              <div className="font-bold text-4xl ">
              Mes Information étudiants
              </div>
              <div className="font-bold text-2xl pt-5 flex flex-col gap-4 ">
              <div>Nom:</div>
              <div>Post-Nom:</div>
              <div>Prenoms:</div>
              <div>Promotion:</div>
              <div>Option:</div>
               
               
               
               
               
              </div>
         </div>
         </div>

        
        
        </section>
      </div>
    </div>

    <footer className="flex w-full flex-row flex-wrap items-center justify-center bg-gray gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="white" className="font-normal ml-10">
        Copyright &copy; 2024 FACULTE POLYTECHNIQUE UNIKIN
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
       
       
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 mr-10"
          >
            License
          </Typography>
        </li>
        
      </ul>
    </footer>

   
    
       
        </>
    );
}







