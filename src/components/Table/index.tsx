import { Check, Close, Delete, Edit } from "@mui/icons-material";
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Tooltip, Typography } from "@mui/material"


const fieldCel = ["E-mail", "Nome do Usuário", "Telefone", "cpf", "É admin", "Editar", "Excluir"]

const dataFetch = [{
    _id:1,
    username:"andrecrjr",
    email:"eroshi@roshi.com",
    phone: "1235254",
    cpf: "123535466",
    isAdmin:false
},{
    _id:1,
    username:"andrecrjr",
    email:"eroshi@roshi.com",
    phone: "1235254",
    cpf: "123535466",
    isAdmin:false
},{
    _id:1,
    username:"andrecrjr",
    email:"eroshi@roshi.com",
    phone: "1235254",
    cpf: "123535466",
    isAdmin:false
}]

interface UserData {
    _id:number;
    username:string;
    email:string;
    phone:string;
    cpf:string;
    isAdmin:boolean;
}



export const DataTable  = () =>{

    const HeaderTable = () =>{
        return (<TableHead>
            { fieldCel.map((item)=>{
                return <TableCell>{item}</TableCell>
            })}</TableHead>)
    }

    const BodyTable = () =>{
        return (
            <TableBody>
                { dataFetch.map((user:UserData)=>{
                    return (
                        <TableRow>
                            <TableCell>
                                <Typography>{user.email}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{user.username}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{user.cpf}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{user.phone}</Typography>
                            </TableCell>
                            <TableCell>
                                {user.isAdmin ? (<Tooltip title={`${user.username} is admin`}><Check/></Tooltip>) : (<Tooltip title={`${user.username} is not an admin`}><Close/></Tooltip>) }
                            </TableCell>
                            <TableCell>
                                <IconButton size="large"><Tooltip title={`Edit ${user.username}`}><Edit/></Tooltip></IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton size="large"><Tooltip title={`Delete ${user.username}`}><Delete/></Tooltip></IconButton>
                            </TableCell>
                        </TableRow>
                    )
                    })}
            </TableBody>
        )
    }

    const FooterTable = () =>{
        return (<TableFooter>
            {/* <TablePagination 
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={dataFetch.length}
              rowsPerPage={"5"}
              page={"0"}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}/> */}
        </TableFooter>)
    }
   return (
   <TableContainer >
        <Table sx={{minWidth:"700px"}}>
            {HeaderTable()}
            {BodyTable()}
            {FooterTable()}
        </Table> 
    </TableContainer> 
    )
}