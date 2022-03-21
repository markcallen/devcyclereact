// Used to address the issue stated in 
// https://stackoverflow.com/questions/69679929/are-feature-flags-good-for-authorisation-permissions

import React, { useEffect } from 'react';
import { useDVCVariable, useDVCClient } from '@devcycle/devcycle-react-sdk'

export default function AppVersion() {
const variableKey = 'admin-permission'                             
const defaultValue = false                                        
const featureVariable = useDVCVariable(variableKey, defaultValue) 
                                                                  
const client = useDVCClient()                                     
                                                                  
useEffect(() => {                                                 
  const newUser = {                                               
    user_id: 1,                                
    email: 'test@example.com',                                             
  }                                                               
  if (client) {                                                   
    client.identifyUser(newUser)                                  
        .then((variables) => {                                    
          console.log('Updated Variables:', variables)            
        })                                                        
  }                                                               
}, [client]);  

  if (! featureVariable) {
    return (<></>)
  }

  console.log(featureVariable.value)

  return (
    <div>
      Using API: /api/{featureVariable.value}/
    </div>
   )
}



