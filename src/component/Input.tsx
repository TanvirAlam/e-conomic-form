import React, { useContext } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FormContext } from '../utils/FormContext';
import ProcessErrorMessage from '../utils/ProcessErrorMessage';
import Tooltip from '../utils/Tooltips';

export default function EInput({formData}: any) {
  const [state, setState] = useContext(FormContext)

  const handleInputChange = (e: any) => {
    switch(e.target.id) {
      case "text":
        setState((state: any) => ({ ...state, flName: e.target.value }))
        break;
      case "number":
        setState((state: any) => ({ ...state, phone: e.target.value }))
        break;
      case "email":
        setState((state: any) => ({ ...state, email: e.target.value }))
        break;
      default:
        console.log('App is running')
    }
  }

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
          id={formData.inputOptions} 
          type={formData.inputOptions} 
          placeholder={formData.label} 
          onChange={handleInputChange}
        />
        <ProcessErrorMessage message={formData.error} />
    </div>
  )
}
