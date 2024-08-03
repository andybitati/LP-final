import { Container } from "components/container/container"
import { Typography } from "components/typography/typography"
import Image from "next/image"

export const Bloc2View = () => {
    return(
        <Container className="flex justify-between">
            <div /*ecrit à gauche */ className="flex flex-col justify-center max-w-2xl space-y-10" >
                 <Typography variant="h2" component="h2">
                    Que la peur quitte vos esprits
                 </Typography>

                 <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Consulter votre deliberation en temps
                    réel grace à cette application web
                    partout où vous vous trouver !
                 </Typography>

            </div>

            <div /*image à droite */ className="relative w-[600px] h-[400px] ">
                <Image fill src="/assets/images/image1.jpg" alt ="image" />

            </div>
        </Container>
    )
}