
import { Container } from "components/container/container"
import { Typography } from "components/typography/typography"
import { Button} from "components/button/button"
import Link from "next/link"
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/router'
import {LogoUnikin} from "components/logo_unikin/logo.unikin"
import {ButtonConnexion} from "components/button/button.connexion"
import { ActiveLink } from "./active-link";
interface Props{}


export const Navigation = ({}:Props) => {

    const router = useRouter()
    return(
        <div className="border-b-2 border-gray-400 " /* (border-b-2) barre de navigation de 2pix */> 
            <div className="flex items-center justify-between  py-[2px] gap-7" /* ici on met un noeud à gauche et l'autre à droite */>
                
                <Link href="/" /*lien vers la page d'acceuil qui est sur le logo de l'application */> 
                    <div className="flex items-center gap-2.5 px-5">
                      <LogoUnikin/>
                    <div className="flex flex-col">

                        <div className=" font-extrabold text-[24px] sm:invisible md:visible lg:visible xl:visible " /* c'est ici qu'on ecrit le nom de l'application */>
                              FACULTE POLYTECHNIQUE
                        </div>
                        <div className=" sm:absolute sm:mt-2 font-extrabold text-[24px] sm:visible md:invisible lg:invisible xl:invisible " /* c'est ici qu'on ecrit le nom de l'application */>
                              DELIFAC
                        </div>
                        
                        <Typography className="sm:absolute sm:mt-12 md:mt-9"  variant="caption3" component="span" theme="gray"  weight="medium" /*texte qui ce trouve un peu en bas du titre */>
                            U N I K I N
                        </Typography>
                        

                    </div>
                    </div>
                </Link>


                <div className="md:flex md:items-center md:gap-7 sm:flex sm:items-center sm:gap-2" /* ici on cree le menu */>
                    <Typography variant="caption2" component="div" className="flex items-center gap-7 ">
                      
                      <ActiveLink href="/">
                        Acceuil
                        </ActiveLink>              
                        <ActiveLink href="/inscription/inscription">
                       Inscription
                       </ActiveLink>              
                       <ActiveLink href="/about/about">
                        A-propos
                        </ActiveLink> 
                        
                        <div className=" pr-4">
                         <Link href="/connexion/login">
                        <ButtonConnexion/>
                        </Link>
                    </div>
                      
                    </Typography>




                </div>
            </div>
        </div>
    )
}


