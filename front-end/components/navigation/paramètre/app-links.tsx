import { LinkType } from "components/lib/link-type";
import { IconType } from "react-icons";

export interface AppLinks{   // creation des proprietes de nos liens cad un type d'objets
    label: string;  // son nom
    baseUrl: string; // sont url https
    type: LinkType; //interne ou externe
    icon?: IconType;
}


export interface FooterLinks {
    label: string;
    links: AppLinks[]
}