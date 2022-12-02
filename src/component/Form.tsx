import React from 'react'
import { EForms } from '../types/typings';
import CInput from './CInput';
import ELinks from './ELinks';
import EInput from './Input';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    eFromData: EForms[]
}

export default function EconomicForm({eFromData}: Props) {
    console.log(eFromData)
  return (
    <section className="bg-[#2d2b34] w-full lg:w-[480px] rounded-lg">
        <div className="w-full">
            <form className="shadow-md rounded px-8 pt-6 mb-4">
                <EInput />
                <ELinks />
                <CInput />
                <div className="flex items-center justify-center relative p-10">
                    <button className="bg-[#ef7d00] hover:bg-[#ef7d00]/50 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline" type="button">
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