
import Head from "next/head";

import { Layout1 } from "../components/layout/layout";
import {LandingPageContainer} from "../components/modules/landing-page/landing-page.container"
import Bloc3Carrousel from "../components/modules/landing-page/bloc/bloc3_carousell/bloc3.carrousel";
import Bloc4ActualitéEvenements from "../components/modules/landing-page/bloc/bloc4_actualité_evenement/bloc4.actualité.evenement";
import Bloc5Departement from "../components/modules/landing-page/bloc/bloc5_departement/bloc5.departement";

export default function Acceuil(){
    return(
        <>
        <div>
            <Head>
                <title>DELIFAC</title>
            </Head> 
            <Layout1>

               {/**<LandingPageContainer/>   <---les blocs 1 et 2 sont dans cet objet   */   } 


             <Bloc3Carrousel/>

             <Bloc4ActualitéEvenements/>

             <Bloc5Departement/>

            </Layout1>
           
        </div>
        </>
    )
}