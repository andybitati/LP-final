"use client";
import {Card,Input,Checkbox,Button,Typography,} from "@material-tailwind/react";
import Link from "next/link";


export default FormConnexion; 
 

function FormConnexion() {
    
    return (
    <> 
            <section className="hero">
        <div className="hero-content sm:flex sm:flex-col  md:ml-[400px] container md:flex md:flex-row ">
         <div className="w-full  md:pl-10 md:w-1/3 ">
         <Card color="transparent" shadow={false}>
   <Typography className="pt-4" variant="h1" color="blue-gray">
  Connexion
</Typography>
<Typography color="gray" className="mt-1 font-normal">
  Veuillez remplir le formulaire
</Typography>
<form className="mt-8 mb-2  md:w-full sm:w-96">
  <div className="mb-1 flex flex-col gap-6">
    
    <Typography variant="h6" color="blue-gray" className="-mb-3">
      Email
    </Typography>
    <Input
      size="lg"
      placeholder="name@mail.com"
      className=" !border-t-blue-gray-200 focus:!border-t-gray-600"
      labelProps={{
        className: "before:content-none after:content-none",
      }}
    />
    <Typography  variant="h6" color="blue-gray" className="-mb-3 ">
      Mot de passe
    </Typography>
    <Input
      type="password"
      size="lg"
      placeholder="********"
      className=" !border-t-blue-gray-200 focus:!border-t-gray-600"
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
        J'accepte
        <a
          href="#"
          className="font-medium transition-colors hover:text-gray"
        >
          &nbsp;les Terms et conditions
        </a>
      </Typography>
    }
    containerProps={{ className: "-ml-2.5" }}
  />
  <Link href='/utilisateur/utilisateur'>
  <Button color="blue" className="mt-6 rounded" fullWidth>
    Se-connecter
  </Button>
  </Link>
  <Link href='/motdepass/motdepass'>
  <Typography color="blue" className="mt-4 text-center font-normal hover:underline">
    Mot de passe oublié?
  </Typography>
  </Link>
</form>
         </Card>
         </div>
         
         <div className="w-full  md:w-2/3 ">
         <div className="">
       <img
       className="h-[700px] w-[700px]  rounded-lg object-cover object-center"
       src="/assets/images/Capture décran 2024-06-29 152209.jpg"
       alt="nature image"/>
          </div> 
         </div>
         </div>
        </section>
   

    </>);
}


