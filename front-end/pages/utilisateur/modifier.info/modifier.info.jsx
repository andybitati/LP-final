
import Head from "next/head"; 
import Link from "next/link";

import Bloc1Sidebar from "../blocUser/bloc1.sidebar";
import Bloc2NavbarUser from "../blocUser/bloc2.navbar";
import {   Card,Input,Checkbox,Button,Typography,} from "@material-tailwind/react";





export default ModifierInfo; 

function ModifierInfo() {
    

    return (<>
   <Head><title>Modifier mes infos</title></Head>


   <div className="flex">
      <div className="lg:w-[18%] md:w-[18%] xl:w-[18%] sm:w-[32%] bg-gray-500 ">
      <Bloc1Sidebar/>
      </div>
      <div className="lg:w-[82%] md:w-[82%] xl:w-[82%] sm:w-[68%]">
      <div><Bloc2NavbarUser/></div>



         <div className="md:place-items-center mb-10 grid mt-10 sm:ml-3">
         <div> 
         <Card color="transparent" shadow={false}>
      <Typography variant="h1" color="blue-gray">
        Modifier mes informations
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Veuillez saisir les modifications 
        à effectuer vous concernant!.
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
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Mot de passe
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
              Je confirme mes nouvelles informations
              
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6">
          Modifier
        </Button>
       
      </form>
         </Card>
    </div>
         </div>
             
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
