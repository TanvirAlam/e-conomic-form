import React, { useContext } from 'react'
import Link from 'next/link'
import { FormContext } from '../utils/FormContext'
import ProcessErrorMessage from '../utils/ProcessErrorMessage'

export default function CInput({formData}: any) {
    const [state, setState] = useContext(FormContext)

    const handleInputChange = (e: any) => {
        switch(e.target.id) {
            case "cMust":
                setState((state: any) => ({ ...state, acceptence: !state.acceptence }))
                break;
            case "cNormal":
                setState((state: any) => ({ ...state, newsletter: !state.newsletter }))
                break;
            default:
                console.log('App is running')
        }
    }

    return (
        <div className="mb-6 flex space-x-2 h-14 relative">
            <input type="checkbox" className="w-6 h-6 text-[#ef7d00]" id={formData.inputOptions} onChange={handleInputChange} />
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
                <ProcessErrorMessage message={formData.checkboxLinkError} />
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