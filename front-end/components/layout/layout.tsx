
import { Footer } from "../navigation/footer"
import { Navigation} from "../navigation/navigation"

interface Props {
    children : React.ReactNode // contenue de nos pages
    isdisplayBreadcrumbs?:boolean;
}
    

export const Layout1 =({children, isdisplayBreadcrumbs=true}:Props) => { // sera  constitué de la navigation et du footer quand on vas l'appeler dans nos pages pour mettre nos contenues
    return(
        <>
          <Navigation/>  {/*ceci est la barre de navigation */}
             {children}
          <Footer/> {/*ceci est le pied de navigation */}  
        </>
    )
}