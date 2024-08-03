import { AppLinks } from "components/navigation/paramètre/app-links";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

  // creation des differents tableau de liste de notre footer
const footerApplicationLinks : AppLinks[] = [{label: "Accueil",  baseUrl:"/", type:"internal",}];


const footerUsersLinks : AppLinks[] = [{label:"Connexion",baseUrl:"/connexion/login", type:"internal",},     {label:"Inscription", baseUrl:"/inscription/inscription", type:"internal",},    {label:"Mot de passe oublié",  baseUrl:"/motdepass/motdepass", type:"internal"},];


const footerInformationLinks : AppLinks[] = [{label:"A-propos", baseUrl:"/about/about", type:"internal",},    {label:"Contactez-Nous",  baseUrl:"/contact/contact", type:"internal"},];


export const footerSocialNetworksLinks : AppLinks[] = [{label: "Youtube",  baseUrl:"https://google.com", type:"external",  icon: RiYoutubeFill,},          {label:"Linkedin",baseUrl:"https://www.linkedin.com", type:"external", icon:RiLinkedinFill}, ];


export const footerLinks /*objet qui vas comprendre tout les liens */ =[
    {
        label:"Application",
        links: footerApplicationLinks,
    },
    {
        label:"Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label:"Information",
        links: footerInformationLinks,
    },
    {
        label:"Réseaux",
        links: footerSocialNetworksLinks,
    }
]

