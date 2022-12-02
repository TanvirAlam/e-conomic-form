import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function EconomicInput() {
  return (
    <div className="mb-4">
        <label className="block text-white text-sm mb-2" htmlFor="firstLast">
            Fornavn og efternavn
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="firstLast" type="text" placeholder="Fornavn og efternavn" />
        <p className="text-red-500 text-xs text-right pt-1">Please choose</p>
    </div>
  )
}