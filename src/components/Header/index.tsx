import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {MenuOutlined} from "@mui/icons-material/"
import React, { useState } from 'react';



export const Header = () =>{
    const [openDraw, setDraw] = useState(false)

    const toggleDrawer = (open:boolean) =>
         (event:React.KeyboardEvent | React.MouseEvent)=>{
            if(event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')){
                return
            }
        console.log(event)
        setDraw(!open)
        }
    
    const list = () =>{
       return (
        <List sx={{width:275}}>
            {["Lista de Usuários", "Lista de Membros"].map((item, key)=>(<ListItem key="a"  disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>

        )
    }
    return (
        <Box onClick={toggleDrawer(false)}>
            <MenuOutlined onClick={toggleDrawer(false)}/>
            <Drawer variant="temporary" 
                anchor={"left"} 
                open={openDraw}
                >
                {list()}
            </Drawer>
        </Box>
    )
}