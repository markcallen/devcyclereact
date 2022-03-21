// Used to address the issue stated in 
// https://stackoverflow.com/questions/70147693/using-feature-flag-as-kill-switch-in-different-version-of-mobile-application

import React, { useEffect } from 'react';
import { useDVCVariable, useDVCClient } from '@devcycle/devcycle-react-sdk'

export default function AppVersion() {
  const variableKey = 'new-api-version'
  const defaultValue = '0.0'
  const featureVariable = useDVCVariable(variableKey, defaultValue)

  const client = useDVCClient()

  useEffect(() => {
    const newUser = {
      user_id: 'appversion_user_id',
      appVersion: '1.1'
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


