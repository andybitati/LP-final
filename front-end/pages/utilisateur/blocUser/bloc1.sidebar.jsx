

import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip,} from "@material-tailwind/react";
import {PresentationChartBarIcon,ShoppingBagIcon,UserCircleIcon,Cog6ToothIcon,InboxIcon,PowerIcon,} from "@heroicons/react/24/solid";
import Link from "next/link";
import { ActiveLink } from "../../../components/navigation/active-link";

export default Bloc1Sidebar; 
 

function Bloc1Sidebar() {
    
    return (
    <>
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] bg-gray-500 p-4 ">
      <div className="mb-2 p-4">
        <Typography variant="h2" color="blue-gray">
          MENU
        </Typography>
      </div>
      <List>
      <ActiveLink href='/utilisateur/utilisateur'>
        <ListItem>
          <ListItemPrefix >
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        </ActiveLink>
      
        <ActiveLink href='/utilisateur/modifier.info/modifier.info'>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Modifier mes infos
        </ListItem>
        </ActiveLink>

        <ActiveLink href='/connexion/login'>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        </ActiveLink>
      </List>
    </Card>



    </>);
}