import { IconProps} from "components/navigation/paramètre/iconProps" // exportation de l'interface type icone
import clsx from "clsx";

import { LinkType, LinkTypes } from "components/lib/link-type";
import Link from "next/link";

interface Props{
    size?: "small" |"medium" |"large";
    variant?: "accent" | "secondary" |"outline" |"disabled"|"ico";
    icon?:IconProps; //type d'element provenant de react qu'on a creer et exporter
    iconTheme?: "accent" | "secondary" |"gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string,
    linkType? : LinkType,
    action?: Function,
    type?: "button" | "submit"; // pour avoir deux type de bouton cad un lien et un autre de validation
    fullWith?:boolean // pour savoir si on veut que notre bouton occupe l'espace de tout le bloc oui ou non

}
export const Button =({size="medium",variant="accent",icon,type="button",fullWith =false,iconTheme="accent",iconPosition="right",disabled,isLoading,children,baseUrl,linkType="internal",action=() => {} /*par defaut quand on lui donne une action il ne fait rien */,}:Props) => { // declaration
    
    
    let variantStyles : string="", 
        sizeStyles : string="" ,
        icoSize: number = 0;
    
    
    switch (variant) {
        case "accent": // style par defaut
            variantStyles="bg-primary   hover:bg-primary-400     text-white     rounded";  //ici on donne les caractéristiques du bouton cad un fond(bg = back ground) primary(mauve) et des ecrits blanc et (rounded) la forme du bouton un carre arrondi dans les cotes et aussi (hover) un effet de couleur de survole quand on pointe le curseur sur le bouton 
            break;

        case "secondary":
            variantStyles="bg-primary-200     hover:bg-primary-300/50    text-primary    rounded";  //300/50 c'est aujouter un peu d'opacité  
            break;

        case "outline":
            variantStyles="bg-white   hover:bg-gray-400/50    border    border-gray-500    text-gray-900     rounded"; 
            break;

        case "disabled":
            variantStyles="bg-gray-400    border   border-gray-500      text-gray-600     rounded    cursor-not-allowed";   
            break;
        
        case "ico":
            if (iconTheme == "accent") { // valeur par defaut
                variantStyles="bg-primary   hover:bg-primary-400     text-white     rounded-full"; // un rond parfait
            }


            if(iconTheme == "secondary"){
                variantStyles="bg-primary-200     hover:bg-primary-300/50    text-primary    rounded-full";
            }

            if (iconTheme=="gray"){
                variantStyles="bg-gray-800        hover:bg-gray-700           text-white     rounded-full"
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles="text-caption3  font-medium   px-[14px]  py-[12px]";  //gerer px et py les padding(decalage entre x et y) à l'interieure du bouton pour qu'il soit bien centré
            icoSize = 18; // taille du logo      
            break;

        case "medium":; // valeur par defaut
            sizeStyles="text-caption2  font-medium   px-[18px]  py-[15px]";
            icoSize = 20;                 
            break;

        case "large":;
            sizeStyles="text-caption1  font-medium   px-[22px]  py-[18px]";
            icoSize = 24;                 
            break;
    }
    

// ici c'est le contenu du bouton qu'on place dans un objet
    const buttonContent = (
    <>
         {isLoading && (<div className="absolute inset-0 flex items-center justify-center"></div>)}
              <div className={clsx(isLoading && "invisible")}>
                   {icon /*si on a une icone(logo) en propriété */    && /*et que */      variant=="ico"/*définie sur icone */     ? /*(?ternaire) dans ce cas là */   (<icon.icon size={icoSize}/*on applique la propriete size(dimension) */ />)/*<--tu fais ceci */      :/*si non */   (<div className={clsx(icon && "flex items-center gap-1")}>{icon && iconPosition =="left" && (<icon.icon size={icoSize}/>)}     {children}        {icon && iconPosition =="right" && (<icon.icon size={icoSize}/>)}</div>) /*<-- tu fais cela avec une condition de bouton avec texte et logo dont le logo est place à gauche ou à droite du texte */ }
              </div>
    </>
);




//creation de la fonction d'action
const  handleClick = () => {
    if(action){
        action()
    }
}





// ici on creer le bouton qu'on place dans un objet
    const buttonElement = (
    <button type={type} className={clsx(variantStyles,sizeStyles,icoSize,isLoading && "cursor-wait",fullWith && "w-full","relative animate")}  onClick /*il fait quoi quand il est cliqué => */ ={handleClick} disabled={disabled || isLoading ? true : false}>
         {buttonContent}     
    </button>
);


    if(baseUrl){ // si le bouton est un lien 
        if(linkType ==LinkTypes.EXTERNAL){
            return(<a href={baseUrl} target="_blank">{buttonElement}</a>)
        }

        else{
            return<Link href={baseUrl}>{buttonElement}</Link>
        }

    }
    
    return buttonElement // si non tu me retourne ca


 
};