import { useState } from 'react'
import { Button, Alert } from '@mui/material'
import Board from './components/Board/Board'
import DoneIcon from '@mui/icons-material/Done'

function App() {
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('')
  const [type, setType] = useState('outlined')

  return (
    <div className={`App `}>
      <div className='btn-container'>
        {type === 'contained' ? (
          <Button
            startIcon={<DoneIcon />}
            variant='contained'
            onClick={() => {
              setType('contained')
            }}>
            contained
          </Button>
        ) : (
          <Button
            variant='contained'
            onClick={() => {
              setType('contained')
            }}>
            contained
          </Button>
        )}
        {type === 'outlined' ? (
          <Button
            startIcon={<DoneIcon />}
            variant='outlined'
            onClick={() => {
              setType('outlined')
            }}>
            Outlined
          </Button>
        ) : (
          <Button
            variant='outlined'
            onClick={() => {
              setType('outlined')
            }}>
            Outlined
          </Button>
        )}
      </div>
      {winner && (
        <Alert
          className='alert'
          variant='outlined'
          severity='info'
          action={
            <Button
              variant='outlined'
              color='info'
              size='small'
              onClick={() => {
                setReset(true)
              }}>
              Reset
            </Button>
          }>
          {winner}
        </Alert>
      )}
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        type={type}
      />
    </div>
  )
}

export default App
