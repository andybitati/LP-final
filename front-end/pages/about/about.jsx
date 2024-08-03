
"use client";
import Head from "next/head"; 
import { Layout1 } from "../../components/layout/layout";
import { Typography } from "@material-tailwind/react";
import {Bloc2View} from "../../components/modules/landing-page/bloc/bloc2/bloc2.view";
export default About; 




function About() {
    


 


   

    return (<>
   <Head><title>About</title></Head>
   
   <Layout1>

   <Bloc2View/>
   <div className=" w-full max-w-7xl py-10 mx-auto px-5 lg:px-10">
   <Typography variant="lead">
                 DELIFAC est une application Web de la Faculté polytechnique developpé par les étudiants de troisième graduat de la 
        faculté Polytechnique sur l'impulsion du Professeur KUTI superviser par l'assistant MOBISA à fin de permettre aux étudiants
        de cette faculté de résevoir entre autre les information  personnels leur concernant; des évenements à venir tel que la 
        prochaine date de déliberation ou encore des conférence à venir ; de s'insrire sans avoir à se deplacer sur place et résevoir 
        un message de confirmation d'inscription et ainsi consulter à temps réel son coupon lors d'une deliberation en etant en ordre
        avec divers réglementation imposé par la faculté, sur tout terminal informatique pouvant accéder sur internet.    
        </Typography>


        <Typography variant="lead" className="mt-4">


        Ce projet a été mené par une équipe composée de deux groupes,
        l'un étant résponsable du BAKEND et l'autre du FRONTED. 
        </Typography>

       

        </div>

        <section className="hero">
        <div className="hero-content sm:flex sm:flex-col  pb-4  md:flex md:flex-row  bg-gray-1000">
        <div className=" sm:w-full md:ml-[100px] flex flex-col ">
           <div className="pb-7 pt-1 pl-9">
             <Typography variant="h2"  >Groupe FRONTED</Typography>
           </div>
           <div className="sm:w-full md:w-1/2 flex flex-col">
               <div className="w-[500px] h-[500px] md:pl-[50px] sm:pl-[70px]">
                  <img
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                          src="/assets/images/20240719_145157.jpg"
                            alt="nature image"/>
       
                </div> 
                <div className=" md:pl-[150px] sm:pl-[150px] md:pt-4 sm:pt-6">
                     <Typography variant="h4">
                        Mr. Nelson Ngombo
                     </Typography>
               </div>
            </div>
        </div>

        <div className="sm:w-full  sm:pt-10  md:pt-20 flex flex-col ">
           <div className="w-[500px] sm:pl-[70px] h-[500px]  ">
             <img
                className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                src="/assets/images/Gouv-5.jpg"
                alt="nature image"/>
            </div> 
            <div className=" md:pl-[180px] sm:pl-[180px] md:pt-4 sm:pt-6  ">
               <Typography variant="h4">
                  Mr. Joseph Dzapili
                </Typography>
            </div>
        </div>
        
         </div>
        </section>


        <section className="hero">
        <div className="hero-content sm:flex sm:flex-col pb-4 md:flex md:flex-row bg-gray-901">

         <div className="w-full md:w-1/2 flex flex-col ">
         <div className="pb-7 pt-1 pl-9">
             <Typography variant="h2"  >Groupe BACKEND</Typography>
         </div>
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/20240802_015540.jpg"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
            Mr. Andy BITATI
            </Typography>
         </div>
         </div>


         <div className="w-full md:w-1/2 pt-20 flex flex-col ">
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/20240802_015355.jpg"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
            Mr. Arsel WATENDA
            </Typography>
         </div>
         </div>

         <div className="w-full md:w-1/2 pt-20 flex flex-col ">
         <div className="w-[500px] h-[500px] pl-10 ">
       <img
       className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
       src="/assets/images/20240802_015530.jpg"
       alt="nature image"/>
          </div> 
          <div className=" pl-20 pt-4">
            <Typography variant="h4">
            Mr. Joel MFWAMBA
            </Typography>
         </div>
         </div>

         </div>
            </section>

   </Layout1>
      

        
       
        </>
    );
}







