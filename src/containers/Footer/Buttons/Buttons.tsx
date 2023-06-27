import { Button, Stack } from '@mui/material'
import React from 'react'

export const Buttons = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} maxWidth={"760px"}>
      <Button variant='outlined'>Публичный договор</Button>
      <Button variant='outlined'>Политика приватности</Button>
      <Button variant='outlined'>Polityka cookies</Button>
    </Stack>
  )
}
