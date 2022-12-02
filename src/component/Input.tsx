import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Tooltip from '../utils/Tooltips';

export default function EInput({formData}: any) {
  return (
    <div className="mb-4">
        <label className="text-white text-sm mb-2 flex items-center gap-2" htmlFor="firstLast">
            {formData.label} 
            {
              formData.toolkit && (
                  <Tooltip 
                    content={formData.toolkit}
                    direction="right"
                  >
                    <span role="img" className="cursor-pointer">
                      <AiOutlineQuestionCircle size={20} />
                    </span>
                  </Tooltip>
              )
            }
           
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" 
          id="firstLast" 
          type={formData.inputOptions} 
          placeholder={formData.label} 
        />
        <p className="text-red-500 text-xs text-right pt-1">{formData.error}</p>
    </div>
  )
}
