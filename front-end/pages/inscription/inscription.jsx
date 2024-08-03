
import Head from "next/head"; 
import Link from "next/link";
import {Entrainement2} from "../../components/entrainement/entrainement2";
import {Layout1} from '../../components/layout/layout';
import {Card,Input,Checkbox,Button,Typography,Select, Option} from "@material-tailwind/react";




export default Fac; 

function Fac() {
    


 


   

    return (<>
   <Head><title>Inscription</title></Head>
  
    <Layout1>

    <section className="hero">
        <div className="hero-content sm:flex sm:flex-col md:flex md:flex-row ">
         
         <div className="w-full md:w-1/2 text-5xl md:place-items-center grid font-bold py-3 px-10">
         <Card color="transparent" shadow={false}>
      <Typography variant="h1" color="blue-gray">
        Inscription !
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Veuillez saisir les informations  vous concernant!.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

         <Typography variant="h6" color="blue-gray" className="-mb-3">
            Post-Nom
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />



          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Prenom
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />


          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           <div className="mt-5 mb-5">
               <Select label="Departement">
                  <Option>Preparatoire</Option>
                  <Option>Génie électrique</Option>
                  <Option>Génie civils</Option>
                  <Option>Génie mécanique</Option>
                </Select>
            </div>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Je confirme mes informations
              
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button color="blue" className="mt-6  rounded w-full"  >
          S'inscrire
        </Button>
       
      </form>
         </Card>
          </div>

         <div className="w-full md:w-1/2 md:place-items-center grid sm:invisible md:visible   ">
         <img
       className="h-[900px] w-[900px]  rounded-lg object-cover object-center "
       src="/assets/images/20240728_143540.jpg"
       alt="nature image"/>
         </div>
         </div>
    </section>

   </Layout1>
    
   

         
  
           
        
       
        </>
    );
}







