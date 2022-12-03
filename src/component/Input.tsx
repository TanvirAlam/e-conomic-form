import React, { useContext } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import type { StateObject } from '../types/typings';
import { FormContext } from '../utils/FormContext';
import ProcessErrorMessage from '../utils/ProcessErrorMessage';
import Tooltip from '../utils/Tooltips';

export default function EInput({formData}: any) {
  const [state, setState] = useContext(FormContext)

  const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
    switch(e.target.id) {
      case "text":
        setState((state: StateObject) => ({ ...state, flName: e.target.value, isFLNameEmpty: !e.target.value }))
        break;
      case "number":
        setState((state: StateObject) => ({ ...state, phone: e.target.value, isPhoneEmpty: !e.target.value }))
        break;
      case "email":
        setState((state: StateObject) => ({ ...state, email: e.target.value, isEmailEmpty: !e.target.value }))
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
        {
          state.formSubmited && state.isFLNameEmpty ? <ProcessErrorMessage message={formData.flErrorMessage} /> : null
        }
        {
          state.formSubmited && state.isPhoneEmpty ? <ProcessErrorMessage message={formData.phErrorMessage} /> : null
        }
        {
          state.formSubmited && state.isEmailEmpty ? <ProcessErrorMessage message={formData.emErrorMessage} /> : null
        }
    </div>
  )
}
