import { Typography } from "components/typography/typography";
import { Container} from "components/container/container";
import Image from "next/image"
import { footerLinks } from "./footerlinks";
import { ActiveLink } from "./active-link";
import { AppLinks } from "components/navigation/paramètre/app-links";
import { LinkTypes } from "components/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";
import { FooterLinks } from "components/navigation/paramètre/app-links";

export const Footer = () => {




                               const currentYear = new Date().getFullYear(); // obtenir la date pour le bas de page
    
    /*isolation du code dans une constante */
                               const footerNavigationList /*on vas placer dans cet objets les information precis qui est le label de nos different tableau */= footerLinks.map(  (colomnLinks)/*une colonne des liens */  =>(<FooterLink data={colomnLinks}/>   ));



                                return(
                                          <div className=" bg-gray">
                                              <Container className="flex justify-between pt-16" /*on aura 2 noeud (justify-between) qui seront allignée l'un contre l'autre cad le 1e et 2ieme noeud */>

                                                  <div className="flex flex-col items-center gap-1" /*1er noeud (flex-col) alligné en colonne (items-center) et qu'il soit centrer */>
                                                       <Typography variant="caption1" theme="white" weight="medium">
                                                           Université de Kinshasa
                                                        </Typography>
                                                        <Typography variant="caption3" theme="gray">
                                                           Rejoins Nous
                                                        </Typography>


                                                        <a href="https://www.unikin.ac.cd" /*ici je met le lien d'un site quelconque (a et non link  car link c'est pour nos pages dans nos dossiers) */ target="_blank" /*(target) ouvrir une nouvelle fenetre */>
                                                           <Image src="/assets/images/logo1.png"  width={229} height={216} alt="Logo"/>
                                                        </a>                    
                                                  </div>



                                                  <div className="flex gap-7" /*2ieme noeud  avec appel de ma constante */>
                                                       {footerNavigationList}
                                                  </div>
                                              </Container>


                                              <Container className="pt-9 pb-11 space-y-11" /*element du bas */>
                                                 <hr className="text-gray-800"/* ceci est une barre de separation *//>
                
                                                 <div className="flex items-center justify-between">
                                                     <Typography variant="caption4" theme="gray">
                                                          Copyright © {currentYear} | Propulsed by Faculté Polytechnique
                                                     </Typography>


                                                     <div /*ici on vas mettre des bouton logo lien */ className="">
                                                        <SocialNetworksButtons theme="gray"/>
                                                     </div>
                                                 </div>
                                              </Container>
                                           </div>
    );};



interface footerLinkProps {
     data: FooterLinks;
}





const FooterLink = ({data} : footerLinkProps) => {


           //ici a partir des label qu'on a receuilli ont les transforme en lien
    const linksList /* on place dans cet objet les lien de nos label */= data.links.map((link) => ( // pour mapper le lien
                                                            <div /*les actions sur nos  liens */>      
                                                                   {link.type == LinkTypes.INTERNAL  && /* si on a affaire à un lien interne voila ce que tu vas faire */  ( <ActiveLink /*permet de faire un lien interne ou ecouter l'url de la page pour nous dire si nous sommes dans la page courante ou pas */ href={link.baseUrl}>{link.label}</ActiveLink>)}
                                                                   {link.type == LinkTypes.EXTERNAL /*utilisation de la librairie */  && /*si c'est un lien externe voila ce que tu vas faire */ (<a href={link.baseUrl}   target="_blank">{link.label}</a>)}
                                                            </div>     
                                                            
                                                            ));

                             return(
                                     <div className="min-w-[190px]">
                                        <Typography theme="white" variant="caption2" weight="medium" className="pb-5" /* (pb) paddig bottom ecarter le titre du noeud de la liste*/ >
                                             {data.label}
                                        </Typography>
                                        <Typography theme="gray" variant="caption3" className="space-y-4"/* espacer nos listes de lien de 4*/>
                                            {linksList}
                                        </Typography>
                                         
                                     </div>
                                   );
};