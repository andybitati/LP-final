"use client";
import {Card,CardHeader,CardBody,CardFooter,Typography,Input,Checkbox,Button,} from "@material-tailwind/react";
import Link from "next/link";
import {LogoUnikin} from "components/logo_unikin/logo.unikin";

export default LoginAdmin; 
 function LoginAdmin() {
    return (


        <div className="flex justify-center mt-[200px] ">
   

      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Administrateur <LogoUnikin/>
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
        <Link href="/admin/administration/administration">
          <Button variant="gradient" fullWidth>
            Connexion
          </Button>
          </Link>
          <Link href="/">
          <Button variant="gradient" fullWidth className="mt-2">
            Cancel
          </Button>
          </Link>

        </CardFooter>
      </Card>

      </div>
    );
  }