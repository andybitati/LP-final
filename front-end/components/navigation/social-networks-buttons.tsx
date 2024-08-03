import { Button } from "components/button/button";
import { footerSocialNetworksLinks } from "./footerlinks"
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";


interface Props {
    theme? :"gray" | "accent" |"secondary";
    className? : string
}


export const SocialNetworksButtons = ({className,theme="accent",}:Props) => {


     const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
        <Button   variant="ico"    iconTheme={theme}      icon={{icon: socialNetwork.icon ? socialNetwork.icon:RiFacebookBoxFill,}}   baseUrl={socialNetwork.baseUrl} linkType={socialNetwork.type} /> // si on oublie de preciser l'icone alors il me renvoie l'icone de facebook par defaut
    ));



    return(
        <div className={clsx(className,"flex items-center gap-2.5")}>
            {icoList}
        </div>
        )
};