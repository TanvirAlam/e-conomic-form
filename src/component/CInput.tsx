import Link from 'next/link'
import React from 'react'

export default function CInput({formData}: any) {
  return (
    <div className="mb-6 flex space-x-2 h-10 relative">
        <input type="checkbox" className="w-6 h-6 text-[#ef7d00]" />
        {
            formData.inputOptions === "cMust" && (<AcceptenceInput formData={formData} />) 
        }
        {
            formData.inputOptions === "cNormal" && (<NewsletterAcceptence formData={formData} />) 
        }
    </div>
  )
}

const AcceptenceInput = ({formData}: any) => {
    return (
        <div>
            <p className="block text-white text-sm">
                {formData.checkboxLinkText}{" "}
                <Link className="border-b" href={formData.checkboxLinkName1url}>{formData.checkboxLinkName1}</Link>{" "}og{" "} 
                <Link className="border-b" href={formData.checkboxLinkName2url}>{formData.checkboxLinkName2}</Link></p>
            <p className="hidden text-red-500 text-xs text-right">{formData.checkboxLinkError}</p>
        </div>
    )
}

const NewsletterAcceptence = ({formData}: any) => {
    return (
        <div>
            <p className="block text-white text-sm mb-2">
                {
                    formData?.newletter.map((item: any) => {
                        return item.children[0].text
                    })
                }
            </p>
        </div>
    )
}