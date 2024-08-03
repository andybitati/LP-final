import * as React from 'react';
import clsx from "clsx";

interface Props{ /* ceci est une creation d'une interface  typescript (props veut simplement dire quelle sont nos propriétes==> proprs*/
     variant?:"display" | "h1" |"h2" | "h3" | "h4" | "h5" | "lead" | "body-lg" | "body-base" | "body-sm" |"caption1"|"caption2"|"caption3"|"caption4"|"caption5"; /*ce sont des Attribut ou propriété de notre interface */
     component?:"h1" |"h2" |"h3" |"h4" |"h5" |"div"|"p" |"span";
     theme?:"black"|"gray"|"white"|"primary"|"secondary" | "danger" | "success" | "warning";
     weight?: "regular"|"medium" /*genre texte en gras */;
     className?: string;
     children: React.ReactNode; /*ce sont des Attribut ou propriété de notre interface */
}
export const Typography = ({variant="h3" /*ceci est une valeur par defaut en cas de non précision*/,  component:Component="div" /*idem ici*/, theme="black",  weight="regular", className ,children}:Props) => { /*ici on déclare nos propriétes et leur valeur par defaut */
    
    
    let variantStyles:string ="", colorStyles: string=""; /* creation d'une variable dans la quelle on vas introduire un style et ce style qu'on vas rendre dans notre composant et ("" lui donne une valeur par defaut)*/

    switch(variant){ /*conditions qui vas appliquer la proprietes quand on l'appel au cas contraire c'est la valeur par defaut */
        case "display":
            variantStyles= "text-8xl"; /*style du text de la config tailwind.config.js */
            break;
        case "h1":
            variantStyles= "text-7xl"; 
            break;
        case "h2":
            variantStyles= "text-6xl";
            break;
        case "h3": // style par defaut
            variantStyles= "text-5xl";
                break;
        case "h4":
            variantStyles= "text-4xl";
                break;
        case "h5":
            variantStyles= "text-3xl";
                break;
        case "lead":
            variantStyles="text-2xl";
                break;
        case "body-lg":
            variantStyles="text-lg";
                break;
        case "body-base":
            variantStyles="text-base";
                break;
        case "body-sm":
            variantStyles="text-sm";
                break;
        case "caption1":
            variantStyles="text-caption1";
                break;
        case "caption2":
            variantStyles="text-caption2";
                break;
        case "caption3":
            variantStyles="text-caption3";
                break;       
        case "caption4":
            variantStyles="text-caption4";
                break;      
    }
    
    switch (theme) {
        case "black": //theme par defaut couleur Noir
            colorStyles="text-gray";
            break;
        case "gray": // gris
            colorStyles="text-gray-700";
            break;
        case "white": // blanc
            colorStyles="text-white";
            break;
        case "primary":
            colorStyles="text-primary";
            break;
        case "secondary":
            colorStyles="text-secondary";
            break;
        case "danger":
            colorStyles="text-alert-danger";
            break;
        case "success":
            colorStyles="text-alert-success";
            break;
        case "warning":
            colorStyles="text-alert-warning";
            break;


    }
    
    return (
        <Component className={clsx /* <== clsx permet de faire des conditions*/(variantStyles,colorStyles, weight=="medium" && /* (&&) = alors */ "font-medium",className,)}>
            {children}
        </Component>
    )    
    
};