import React from 'react'

type Props = {
    message: string
}

export default function ProcessErrorMessage({ message }: Props) {
  return (
        <p className={`text-red-500 text-xs text-right pt-2`}>{message}</p>
  )
}