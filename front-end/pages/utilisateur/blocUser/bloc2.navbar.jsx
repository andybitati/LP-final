"use client";
import React from "react";
import {Navbar,MobileNav,Typography,Button,IconButton,} from "@material-tailwind/react";
import {LogoUnikin1} from "../../../components/logo_unikin/logo.unikin";
import { FaRegUser } from "react-icons/fa6";

export default Bloc2NavbarUser;
function Bloc2NavbarUser() {

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
 
        <div className="flex items-center">
          Bonjour <FaRegUser />.........
        </div>
        
      </Typography>
      
    </ul>
  );


  return (


    <Navbar className="mx-auto max-w-screen-xl rounded-full px-4 py-4 lg:px-8 lg:py-4" color="gray" >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
           <div className="flex items-center gap-2.5 px-5">
             <div className="mr-4  py-1.5 font-medium">
           <LogoUnikin1/>
             </div>
             <div className=" font-extrabold text-[24px] sm:invisible md:visible lg:visible xl:visible " /* c'est ici qu'on ecrit le nom de l'application */>
                FACULTE POLYTECHNIQUE
             </div>
             <div className=" sm:absolute sm:mt-2 sm:ml-[80px] font-extrabold text-[24px] sm:visible md:invisible lg:invisible xl:invisible " /* c'est ici qu'on ecrit le nom de l'application */>
                DELIFAC
             </div>
       </div>

        
        <div className="hidden lg:block">{navList}</div>
      
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>

  );
}

