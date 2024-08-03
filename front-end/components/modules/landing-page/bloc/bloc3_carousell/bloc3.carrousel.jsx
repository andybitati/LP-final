"use client";
import { Button ,Typography} from "@material-tailwind/react";
import { Navigation} from "../../../../navigation/navigation";
import { Carousel } from "@material-tailwind/react";
import { MdArrowForward } from "react-icons/md";
export default Bloc3Carrousel; 

function Bloc3Carrousel() {
    
    return (
    <>
    <div>
    <Carousel className="rounded-xl"   transition={{ duration: 2 }} autoplay={true} loop={true}>
      <div className="relative h-full w-full">
        <img
          src="/assets/images/20240627_110840.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full bg-black/50">
        {/**<Navigation/>*/}
          <div className="w-3/4 absolute bottom-0 left-0 pb-40 pl-6  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4  "
            >
              BIENVENUE SUR LE SITE
              DE DELIBEARTION EN LIGNE
              DE LA FACULTE POLYTECHNIQUE

            </Typography>

           
          
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/assets/images/20240627_110654.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/30">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              LA NUMERISATION EN MARCHE !
            </Typography>
            
    
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/assets/images/20240627_110557.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Université de Kinshasa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Fondée en 1954 sous la dénomination Université 
              Lovanium par l’Université Catholique de Louvain 
              en collaboration avec le Gouvernement Belge, 
              elle est devenue, par les réformes de 1971 et 1981,
               respectivement Université Nationale du Zaire (UNAZA), 
               Campus de Kinshasa et Université de Kinshasa…
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" >
              <div className="flex items-center gap-1 text-black">
              <MdArrowForward />
                 EXPLORE
               </div>
              </Button>
  
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
    </>);
}