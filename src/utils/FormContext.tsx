import React, { useState } from 'react'
import type { StateObject } from '../types/typings';

const FormContext = React.createContext({})

const FormProvider = ({ children }: any) => {

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

    const [state, setState] = useState<StateObject>(InitialStateValues)
    
    return (
        <FormContext.Provider value= {[state, setState]} >
          { children }
        </FormContext.Provider>
  )
}

export { FormContext, FormProvider }