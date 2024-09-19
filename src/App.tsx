import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTurnkey } from '@turnkey/sdk-react';
import { turnKeyConfig } from './turnkey/config/turnKeyConfig';
import WebApp from '@twa-dev/sdk';

function App() {
  const { turnkey, passkeyClient, authIframeClient } = useTurnkey();
  const loginWithPasskey = async () => {
    console.log('called');
    console.log(turnKeyConfig);

    const response = await passkeyClient?.createUserPasskey();
    console.log(response);
  }
  const loginWithIframe = async (credentialBundle: string) => {
    await authIframeClient?.injectCredentialBundle(credentialBundle);
    await authIframeClient?.login();
  }
  useEffect(() => {
    console.log( WebApp);
    console.log(WebApp.BiometricManager);
    

    
    console.log(WebApp.BiometricManager.isInited, 'isInited')
    console.log(WebApp.BiometricManager.isBiometricAvailable, 'isBiometricAvailable')
    console.log(WebApp.BiometricManager.biometricType, 'biometricType')
    console.log(WebApp.BiometricManager.isAccessGranted, 'isAccessGranted')
    console.log(WebApp.BiometricManager.isAccessRequested, 'isAccessRequested')



    if (WebApp.BiometricManager.isBiometricAvailable && !WebApp.BiometricManager.isAccessGranted) {
      console.log('initiate biometric access');
      const resp = WebApp.BiometricManager.requestAccess({
        reason: 'turn key',
        
      }, (isAccessGranted) => {
        console.log(isAccessGranted, 'has user granted permission');
        if(isAccessGranted){
          WebApp.BiometricManager.authenticate({reason: 'Sakal dika'}, (isAuthenticated) => console.log('is authenticaed', isAuthenticated))
        }
        
      })
      console.log(resp);
      

    }


    if (window.PublicKeyCredential) {
      console.log("WebAuthn is supported in this environment");
    } else {
      console.log("WebAuthn is not supported in this environment");
    }
  }, [])
  const handleAuth = () => {
    window?.telegram?.WebApp.BiometricManager.authenticate()
  }
  return (
    <>
      <button type="button" onClick={loginWithPasskey}>
        Login with Passkey
      </button>
      <button type="button" onClick={handleAuth}>
        authenticate with biometric
      </button>
      {/* <button type="button" onClick={loginWithIframe}>
        Login with ifrmae
      </button> */}
    </>
  )
}

export default App
