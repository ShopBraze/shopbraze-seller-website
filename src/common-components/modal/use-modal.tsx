import { useState } from 'react'

const useModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpenToggle = () => {
    setOpen(!open)
  }

  return { open, handleOpenToggle }
}

export default useModal