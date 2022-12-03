import React from 'react'

type Props = {
    message: string
}

export default function processErrorMessage({ message }: Props) {
  return (
        <p className={`text-red-500 text-xs text-right`}>{message}</p>
  )
}