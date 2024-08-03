"use client";

import {Card,CardHeader,CardBody,CardFooter,Typography,Button,}from "@material-tailwind/react"

export default Bloc4ActualitéEvenements; 
 

function Bloc4ActualitéEvenements() {
    
    return (
    <>

<section className="hero">


         <div className="hero-content bg-gray-901  md:flex md:flex-row    sm:flex sm:flex-col sm:w-full  text-5xl">
          <div className='hero-content  md:w-2/3 sm:w-full   md:grid md:grid-cols-2  sm:flex sm:flex-col'>
             
             <div className="  sm:w-full "> {/** 1 ligne et 1 colonne */}
                       <div className="pb-7 pt-1 pl-9">
                       <Typography variant="h2"  >Actualités</Typography>
                       </div>
                    <div className="">
            <div className="w-[400px] h-[400px]  pl-10 ">
            <img
               className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50         transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
               src="/assets/images/FB_IMG_1719498234127.jpg"
               alt="nature image"/>
             </div>
             <div className="w-[400px] h-[400px] pl-10 pt-4">
             <Typography variant="lead">
        Le Doyen de la Faculté Polytechnique le
        Professeur JEAN MARIE BEYA se dit satisfait
        de la marche horaire académique de la Faculté
        Polytechnique.
           </Typography>
           <div className="pt-20"><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>
             </div>

              
                    </div>
              </div>

              <div className="  sm:w-full">{/** 1 ligne et 2 colonne */}
              <div className="pt-[70px]">
        <div className="w-[400px] h-[400px] pl-10 ">
            <img
               className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50         transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
               src="/assets/images/misterdan_on-___2901360635665186921_9751297684___-.jpg"
               alt="nature image"/>
             </div>
             <div className="w-[400px] h-[400px] pl-10 pt-4">
             <Typography variant="lead">
        Le nouveau delegué Facultaire de la 
        Faculté Polytechnique Mr. DANIEL MUHASSA
        invite les étudiants de consulter leur
        coupons via l'application web en ligne
        developpée par les étudiants de 3ième
        Graduat Génie électrique.

      </Typography>
      <div className=""><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>
             </div>
        </div>
              
              </div>


              <div className=" sm:w-full"> {/** 2 ligne et 1 colonne */}
              <div className="">
            <div className="w-[400px] h-[400px] pl-10 ">
            <img
               className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50           transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
               src="/assets/images/6107de73cfd03_photo papier tech.jpg"
               alt="nature image"/>
             </div>
             <div className="w-[400px] h-[400px] pl-10 pt-4">
             <Typography variant="lead">
        Par l'initiative du professeur KUTI LUSALA
        les étudiants de 3ième Graduat lance la 
        première Apllication Web de déliberation
        en ligne
           </Typography>
           <div className="pt-20"><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>
             </div>

              
        </div>
                </div>

              <div className=" sm:w-full">{/** 2 ligne et 2 colonne */}
              <div className="">
        <div className="w-[400px] h-[400px] pl-10 ">
            <img
               className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50         transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
               src="/assets/images/Honoris-Felix-6.jpg"
               alt="nature image"/>
             </div>
             <div className="w-[400px] h-[400px] pl-10 pt-4">
             <Typography variant="lead">
             L'Université de Kinshasa octroie un diplôme
             Honoris Causa à son Excellence le 
             Président de la République Démocratique du
             Congo Mr. FELIX ANTOINE TSHISEKEDI TSHILOMBO

      </Typography>
      <div className=""><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>
             </div>
        </div>
              </div>

          </div>
          <div className=" md:w-1/3 sm:w-full   flex flex-col ">
          <Typography variant="h2" className="pt-2 pb-4">Evenements</Typography>
          <div className=" flex flex-row gap-4 pb-7">
             <div className="bg-red w-[80px] h-[80px]  items-center flex flex-col">
             <Typography variant="h4" color="white">4</Typography>
             <Typography variant="h4" color="white">Juillet</Typography>
              </div>
              <div className="flex flex-col gap-7">
                   <Typography variant="h6">
                     Delibération de la promotion L1 et L2 (LMD)
                   </Typography>
                   <div className=""><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>

                </div>
          </div>

          <div className=" flex flex-row gap-4 pb-7">
             <div className="bg-red w-[80px] h-[80px]  items-center flex flex-col">
             <Typography variant="h4" color="white">8</Typography>
             <Typography variant="h4" color="white">Juillet</Typography>
              </div>
              <div className="flex flex-col gap-7">
                   <Typography variant="h6">
                     Delibération de la promotion G3
                   </Typography>
                   <div className=""><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>

                </div>
          </div>

          <div className=" flex flex-row gap-4 pb-7">
             <div className="bg-red w-[80px] h-[80px]  items-center flex flex-col">
             <Typography variant="h4" color="white">12</Typography>
             <Typography variant="h4" color="white">Juillet</Typography>
              </div>
              <div className="flex flex-col gap-7">
                   <Typography variant="h6">
                     Delibération de la promotion TECH1
                   </Typography>
                   <div className=""><Typography variant="h6" color="blue-gray">21/07/2024</Typography></div>

                </div>
          </div>
          </div>
     
  
     
         </div>
        
        </section>




   
    </>);
}