import Link from 'next/link'
import React from 'react'

export default function CInput() {
  return (
    <div className="mb-6 flex space-x-2 h-10 relative">
        <input type="checkbox" className="w-6 h-6 text-[#ef7d00] rounded-md" />
        <div>
            <p className="block text-white text-sm">* Jeg har læst og accepterer <Link className="border-b" href="#">vilkårene</Link> og <Link className="border-b" href="#">databehandleraftalen</Link></p>
            <p className="text-red-500 text-xs text-right">Abonnementsvilkårene er påkrævet</p>
        </div>

        {/* <div>
            <p className="block text-white text-sm mb-2">
                Tilmeld mig e-conomic nyhedsmails, der indeholder tips og tricks, invitationer til events, samt markedsføring om vores regnskabssystem og relateret software fra vores app-partnere. Jeg kan til enhver tid afmelde mig igen.
            </p>
        </div> */}
    </div>
  )
}