import React from 'react'
import { Space } from '../Space'
import styles from './Input.module.css'

interface IInteractionInputProps {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const InteractionInput: React.FC<IInteractionInputProps> = ({
  label,
  value,
  setValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Space />
      <h4>{label}</h4>
      <input
        className={styles['input']}
        type="text"
        name={label}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
