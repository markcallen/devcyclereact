import React from 'react';
import { useDVCVariable } from '@devcycle/devcycle-react-sdk';

export default function AppVersion() {
  const variableKey = 'react-sample';
  const defaultValue = 'false';
  const featureVariable = useDVCVariable(variableKey, defaultValue);

  if (!featureVariable) {
    return <></>;
  }

  return (
    <div>
      {featureVariable.key} is {featureVariable.value.toString()}
    </div>
  );
}
