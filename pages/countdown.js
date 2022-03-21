// Used to address the issue stated in 
// https://stackoverflow.com/questions/70360690/how-to-support-future-feature-flags-eg-the-site-will-shut-down-in-10-min/70794974#70794974

import { useDVCVariable } from '@devcycle/devcycle-react-sdk'

export default function CountDown() {
  const variableKey = 'time-of-site-to-go-down'
  const defaultValue = 0
  const featureVariable = useDVCVariable(variableKey, defaultValue)

  if (featureVariable == null) {
    return (<></>);
  }

  console.log(featureVariable.value);

  if (featureVariable.value == 0) {
    return (<div>Site is up</div>)
  }

  var currentTime = new Date().getTime()
  if (currentTime > featureVariable.value) {
    return (<div>Site is down</div>)
  }
  
  return (
    <div>
      The site will shutdown at: { (new Date(featureVariable?.value)).toString() }
    </div>
   )
}

