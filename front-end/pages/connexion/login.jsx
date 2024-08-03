
import Head from "next/head"; 
import { Navigation } from "../../components/navigation/navigation";
import { Footer } from "../../components/navigation/footer";
import FormConnexion from "../../components/formulaire/form.connexion";





export default Login; 

function Login() {


 


   

    return (<>
   <Head><title>Connexion</title></Head>
         
  
            <Navigation></Navigation>
            
             <FormConnexion/>
            
             
              
           

            <Footer/>
        
       
        </>
    );
}



