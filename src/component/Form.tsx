import Link from 'next/link';
import React from 'react'
import CInput from './CInput';
import ELinks from './ELinks';
import EInput from './Input';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export default function EconomicForm({}: Props) {
  return (
    <section className="bg-[#2d2b34] w-full lg:w-[480px] rounded-lg">
        <div className="w-full">
            <form className="shadow-md rounded px-8 pt-6 mb-4">
                <EInput />
                <ELinks />
                <CInput />
                <div className="flex items-center justify-center relative p-10">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs bg-red-400">
                &copy;2022 Tanvir Alam
            </p>
        </div>
    </section>
  )
}