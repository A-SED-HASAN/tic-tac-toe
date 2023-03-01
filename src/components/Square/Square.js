import React from 'react'
import { Button } from '@mui/material'

const Square = ({ draw, index, type }) => {
  if (type === 'outlined') {
    return (
      <Button
        className='square'
        variant={type}
        onClick={(e) => {
          draw(e, index)
        }}></Button>
    )
  } else {
    return (
      <Button
        className='square withe'
        variant={type}
        onClick={(e) => {
          draw(e, index)
        }}></Button>
    )
  }
}

export default Square
