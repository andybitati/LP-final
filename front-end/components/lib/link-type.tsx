// creation d'une librairie type de lien pour rendre internal et external en proprietes reperable par le code
// bref on securise le code
export type LinkType = "internal" |"external";

export const LinkTypes:Record<string,LinkType> = {
    INTERNAL : "internal",
    EXTERNAL : "external",

}