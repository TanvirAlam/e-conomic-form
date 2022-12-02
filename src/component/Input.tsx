import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Tooltip from '../utils/Tooltips';

export default function EconomicInput() {
  return (
    <div className="mb-4">
        <label className="text-white text-sm mb-2 flex items-center gap-2" htmlFor="firstLast">
            Fornavn og efternavn 
            <Tooltip 
              content="Ved at oplyse dit telefonnummer, kan vi kontakte dig og sørge for, at du får mest muligt ud af din prøveperiode." 
              direction="right"
            >
              <span role="img" className="cursor-pointer">
                <AiOutlineQuestionCircle size={20} />
              </span>
            </Tooltip>
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="firstLast" type="text" placeholder="Fornavn og efternavn" />
        <p className="text-red-500 text-xs text-right pt-1">Please choose</p>
    </div>
  )
}
