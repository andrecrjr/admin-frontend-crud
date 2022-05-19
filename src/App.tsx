import { Container } from '@mui/system'
import { useState } from 'react'
import { Header } from './components/Header'
import { DataTable } from './components/Table'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function App() {

  return (
    <>
    <Header/>
      <Container >
        <Box component="section" >
          <Typography variant='h5' sx={{fontWeight:"bold"}} component="h2" mt={2}>Listagem de usuários</Typography>
          <DataTable/>
        </Box>
      </Container>
    </>
  )
}

export default App
