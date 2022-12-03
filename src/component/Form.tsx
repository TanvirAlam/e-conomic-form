import React, { useContext } from 'react'
import type { EForms } from '../types/typings';
import CInput from './CInput';
import ELinks from './ELinks';
import EInput from './Input';

import { FormContext } from '../utils/FormContext';

type Props = {
    eFromData: EForms[]
}

export default function EconomicForm({eFromData}: Props) {
    const [state, setState] = useContext(FormContext)

    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log("Form submitted:>>>", state)
    }

    return (
        <section className="bg-[#2d2b34] w-full lg:w-[480px] rounded-lg">
            <div className="w-full">
                <form onSubmit={handleSubmitForm} className="shadow-md rounded px-8 pt-6 mb-4">
                    {
                        eFromData?.sort((a:any, b:any) => (a.sortNum > b.sortNum) ? 1 : -1)
                            .map((formData: any) => {
                                switch(formData.inputOptions) {
                                    case "text":
                                        return (<EInput key={formData._id} formData={formData} />)
                                        break;
                                    case "number":
                                        return (<EInput key={formData._id} formData={formData} />)
                                        break;
                                    case "email":
                                        return (<EInput key={formData._id} formData={formData} />)
                                        break;
                                    case "link":
                                        return (<ELinks key={formData._id} formData={formData} />)
                                        break;
                                    case "cMust":
                                        return (<CInput key={formData._id} formData={formData} />)
                                        break;
                                    case "cNormal":
                                        return (<CInput key={formData._id} formData={formData} />)
                                        break;
                                    default:
                                        console.log("Form Data")
                                }
                        })
                    }
                    <div className="flex items-center justify-center relative p-10">
                        <button type="submit" className="bg-[#ef7d00] hover:bg-[#ef7d00]/50 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </form>
                <p className="text-center text-white text-xs bg-red-400 rounded-md">
                    &copy;2022 Tanvir Alam
                </p>
            </div>
        </section>
    )
}