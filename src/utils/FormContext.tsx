import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const FormContext = React.createContext([{}, () => { }])

const FormProvider = ({ children }: any) => {
    const [state, setState] = useState({})
    
    return (
        <FormContext.Provider value= {[state, setState]} >
          { children }
        </FormContext.Provider>
  )
}

export { FormContext, FormProvider }