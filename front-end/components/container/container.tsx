import clsx from "clsx";

interface Props{
    children: React.ReactNode; /*ce qu'il contient ces enfant en qlq sorte */
    className?: string; 
}

export const Container = ({children, className} : Props) =>{
    return(
        <div className={clsx(className, "w-full max-w-7xl py-10 mx-auto px-5 lg:px-10 ")}    /* (mx-auto) pour centrer notre page  et (space-y-5) separer suivant y de 5  c'est un peu comme un conteneur  et (lg) c'est pour l'adapter à un ecran de 1024px*/> 
            {children}
        </div>
    )
}