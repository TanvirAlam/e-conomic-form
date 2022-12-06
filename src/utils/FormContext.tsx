import type { Dispatch} from 'react';
import React, { useState } from 'react'
import type { StateObject } from '../types/typings';

const InitialStateValues = {
  formSubmited: false,
  flName: '',
  isFLNameEmpty: true,
  phone: 0,
  isPhoneEmpty: true,
  email: '',
  isEmailEmpty: true,
  acceptence: false,
  newsletter: false
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const FormContext = React.createContext<[StateObject,Dispatch<any>]>([InitialStateValues,()=>{}]);

const FormProvider = ({ children }: any) => {
    const [state, setState] = useState<StateObject>(InitialStateValues)
    
    return (
        <FormContext.Provider value= {[state, setState]} >
          { children }
        </FormContext.Provider>
  )
}

export { FormContext, FormProvider }