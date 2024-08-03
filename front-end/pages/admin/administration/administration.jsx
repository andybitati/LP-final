
"use client";

import Head from "next/head";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {Card,CardHeader,Input,Typography,Button,CardBody,Chip,CardFooter,Tabs,TabsHeader,Tab,Avatar, IconButton,Tooltip,} from "@material-tailwind/react";
import Link from "next/link";
import { LogoUnikin } from "../../../components/logo_unikin/logo.unikin";

export default Administration; 

const TABS = [
    {
      label: "Membres",
      value: "all",
    },
    {
      label: "Utilisateurs",
      value: "monitored",
    },
    {
      label: "Etudiants",
      value: "unmonitored",
    },
  ];
   
  const TABLE_HEAD = ["Membre", "Role", "Status", "Date de Modification", ""];
   
  const TABLE_ROWS = [
    {
      img: "https://demos.creativetest/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "nom",
      email: "***@gmail.com",
      job: "etudiant",
      org: "",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://ive-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "nom",
      email: "***@gmail.com",
      job: "etudiant",
      org: "",
      online: false,
      date: "23/04/18",
    },
    {
      img: "https://demos.creatiorate-ui-dashboard/assets/img/team-1.jpg",
      name: "nom",
      email: "***@gmail.com",
      job: "etudiant",
      org: "",
      online: false,
      date: "19/09/17",
    },
    {
      img: "https://demos.creativeporate-ui-dashboard/assets/img/team-4.jpg",
      name: "nom",
      email: "***@gmail.com",
      job: "etudiant",
      org: "",
      online: false,
      date: "24/12/08",
    },
    {
      img: "https://demos.c/corporate-ui-da/team-5.jpg",
      name: "nom",
      email: "***@gmail.com",
      job: "etudiant",
      org: "",
      online: false,
      date: "04/10/21",
    },
  ];

function Administration() {
    


 


   

    return (<>
   <Head><title>Administration</title></Head>

   <Card className="h-full w-full">
   <CardHeader floated={false} shadow={false} className="rounded-none">
     <div className="mb-8 flex items-center justify-between gap-8">
       <div className="flex flex">
         
         <LogoUnikin></LogoUnikin>
        
         <Typography color="gray" className="mt-5 ml-2 " variant="h4">
           ADMINISTRATION FACULTE POLYTECHNIQUE
         </Typography>
       </div>
       <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
         <Button variant="outlined" size="sm">
           voir tout le monde
         </Button>
         <Button className="flex items-center gap-3" size="sm">
           <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> ajouter un membre
         </Button>
         <Link href="/admin/admin"> 
         <Button variant="outlined" size="sm">
           Se deconnecter
         </Button>
         </Link>
       </div>
     </div>
     <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
       <Tabs value="all" className="w-full md:w-max">
         <TabsHeader>
           {TABS.map(({ label, value }) => (
             <Tab key={value} value={value}>
               &nbsp;&nbsp;{label}&nbsp;&nbsp;
             </Tab>
           ))}
         </TabsHeader>
       </Tabs>
       <div className="w-full md:w-72">
         <Input
           label="Search"
           icon={<MagnifyingGlassIcon className="h-5 w-5" />}
         />
       </div>
     </div>
   </CardHeader>
   <CardBody className="overflow-scroll px-0">
     <table className="mt-4 w-full min-w-max table-auto text-left">
       <thead>
         <tr>
           {TABLE_HEAD.map((head) => (
             <th
               key={head}
               className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
             >
               <Typography
                 variant="small"
                 color="blue-gray"
                 className="font-normal leading-none opacity-70"
               >
                 {head}
               </Typography>
             </th>
           ))}
         </tr>
       </thead>
       <tbody>
         {TABLE_ROWS.map(
           ({ img, name, email, job, org, online, date }, index) => {
             const isLast = index === TABLE_ROWS.length - 1;
             const classes = isLast
               ? "p-4"
               : "p-4 border-b border-blue-gray-50";

             return (
               <tr key={name}>
                 <td className={classes}>
                   <div className="flex items-center gap-3">
                     <Avatar src={img} alt={name} size="sm" />
                     <div className="flex flex-col">
                       <Typography
                         variant="small"
                         color="blue-gray"
                         className="font-normal"
                       >
                         {name}
                       </Typography>
                       <Typography
                         variant="small"
                         color="blue-gray"
                         className="font-normal opacity-70"
                       >
                         {email}
                       </Typography>
                     </div>
                   </div>
                 </td>
                 <td className={classes}>
                   <div className="flex flex-col">
                     <Typography
                       variant="small"
                       color="blue-gray"
                       className="font-normal"
                     >
                       {job}
                     </Typography>
                     <Typography
                       variant="small"
                       color="blue-gray"
                       className="font-normal opacity-70"
                     >
                       {org}
                     </Typography>
                   </div>
                 </td>
                 <td className={classes}>
                   <div className="w-max">
                     <Chip
                       variant="ghost"
                       size="sm"
                       value={online ? "online" : "offline"}
                       color={online ? "green" : "blue-gray"}
                     />
                   </div>
                 </td>
                 <td className={classes}>
                   <Typography
                     variant="small"
                     color="blue-gray"
                     className="font-normal"
                   >
                     {date}
                   </Typography>
                 </td>
                 <td className={classes}>
                   <Tooltip content="Edit User">
                     <IconButton variant="text">
                       <PencilIcon className="h-4 w-4" />
                     </IconButton>
                   </Tooltip>
                 </td>
               </tr>
             );
           },
         )}
       </tbody>
     </table>
   </CardBody>
   <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
     <Typography variant="small" color="blue-gray" className="font-normal">
       Page 1 of 10
     </Typography>
     <div className="flex gap-2">
       <Button variant="outlined" size="sm">
         Precedant
       </Button>
       <Button variant="outlined" size="sm">
         Suivant
       </Button>
     </div>
   </CardFooter>
 </Card>
      
  
       
        </>
    );
}
