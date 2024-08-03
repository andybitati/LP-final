import Head from "next/head";
import { Layout1 } from "../../components/layout/layout";
import {Card,Input,Checkbox,Button,Typography,Select, Option} from "@material-tailwind/react";


export default MotdePasse; 

function MotdePasse() {


 


   

    return (<>
    
   <Head><title>OTP</title></Head>
         
  
                <Layout1>
                
                <section className="hero">
        <div className="hero-content sm:flex sm:flex-col md:flex md:flex-row bg-gray-500 ">
         
         <div className="w-full md:w-[40%] text-5xl md:place-items-center grid font-bold mt-3 py-3">
         <Card color="transparent" shadow={false}>
      <Typography variant="h1" color="blue-gray">
        Mot de passe oublié ?      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Veuillez saisir vos informations ainsi que le nouveau mot de passe.
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
            Post-Nom
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />



          <Typography variant="h6" color="blue-gray" className="-mb-6">
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

            <Typography variant="h6" color="blue-gray" className="-mb-6">
            Nouveau Mot de passe
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Je confirme le nouveau mot de passe
              
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

        <Button variant="gradient" className="mt-6  rounded w-full"  >
          Nouveau 
        </Button>
       
      </form>
         </Card>
          </div>

         <div className="w-full md:w-[60%]  sm:invisible md:visible mt-[100px]  ">
         <img
       className="  rounded-lg object-cover object-center mr-3 "
       src="/assets/images/image5.png"
       alt="nature image"/>
         </div>
         </div>
                </section>


                </Layout1>
        
       
        </>
    );
}

