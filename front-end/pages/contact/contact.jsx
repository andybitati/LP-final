import { Layout1 } from "../../components/layout/layout";
import Head from "next/head";
import {Card,Input,Checkbox,Button,Typography,Select, Option,Textarea, IconButton} from "@material-tailwind/react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default Contact; 

function Contact() {


 


   

    return (<>
   <Head><title>Contactez Nous</title></Head>
         
  
            <Layout1>
            <section className="hero">
        <div className="hero-content sm:flex sm:flex-col md:flex md:flex-row bg-gray-500 ">
         
         <div className="w-full md:w-1/2 text-5xl md:place-items-center grid  py-3">
         <Card color="transparent" shadow={false}>

      <Typography variant="h1" color="blue-gray" className="ml-5">
      Contactez-Nous !     </Typography>
      
      
      <Typography variant="h5" color="blue-gray" className="flex flex-row gap-3 mt-10">
      <BsEnvelopeAtFill />Polytechnique_UNIKIN@gmail.com
      </Typography>
    
      <Typography variant="h5" color="blue-gray" className="flex flex-row gap-3 mt-2 ">
      <FaPhoneVolume /> +243 00000000
      </Typography>

      <Typography variant="h5" color="blue-gray" className="flex flex-row gap-3 mt-2 ">
      <IoLocationSharp /> Republique Démoratique du congo;
                           Kinshasa; UNIKIN C/LEMBA
      </Typography>

      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-6">
            Nom
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

        



          <Typography variant="h6" color="blue-gray" className="-mb-6">
            Email
          </Typography>
          <Input
            size="lg"
            color="gray"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

       <div className="relative w-[32rem] mt-5">
         <Textarea color="gray" label="Message" />
           <div className="  py-1.5">
           <Button size="sm" className="rounded w-full  ">
            Envoyer
            </Button>
         </div>
         </div>
             
        </div>   
      </form>
         </Card>

      
        
          </div>

         <div className="w-full md:w-1/2  sm:invisible md:visible   ">
         <img
       className="h-[700px] w-[700px]  rounded-lg object-cover object-center "
       src="/assets/images/contactez_nous_primobox.png"
       alt="nature image"/>
         </div>
         </div>
                </section>
            </Layout1>
        
       
        </>
    );
}

