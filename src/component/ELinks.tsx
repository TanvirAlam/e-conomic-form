import Link from 'next/link'
import React from 'react'

export default function ELinks() {
  return (
    <div className="mb-6">
        <p className="block text-white t`ext-sm mb-2">
            Dine oplysninger behandles i overensstemmelse med vores <Link className="border-b" href="#">privatlivspolitik</Link>
        </p>
    </div>
  )
}