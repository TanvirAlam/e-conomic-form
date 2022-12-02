import Link from 'next/link'
import React from 'react'
import { EForms } from '../types/typings';

export default function ELinks({formData}: any) {
  return (
    <div className="mb-6">
        <p className="block text-white t`ext-sm mb-2">
            {formData.openLinkText}{" "}
            <Link className="border-b" href={formData.openLinkUrl}>{formData.openLinkName}</Link>
        </p>
    </div>
  )
}