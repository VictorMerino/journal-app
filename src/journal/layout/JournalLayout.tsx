import { Box } from '@mui/material'
import React, { ReactElement } from 'react'

import { Navbar, SideBar } from '../components'

const drawerWidth = 240

export const JournalLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*Toolbar*/}
        {children}
      </Box>
    </Box>
  )
}
