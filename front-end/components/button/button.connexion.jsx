"use client";
import { Button } from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";
export function ButtonConnexion() {
    return (
      
        
        <Button   variant="outlined"  className="rounded-full " ripple={true} size="sm" >
          <div className="flex items-center gap-1 text-black">
         <FaUser /> connexion
         </div>
        </Button>
        
        
    );
  }