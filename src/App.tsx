import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTurnkey } from '@turnkey/sdk-react';
import { turnKeyConfig } from './turnkey/config/turnKeyConfig';

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
    console.log(window?.telegram?.WebApp.BiometricManager.isInited, 'isInited')
    console.log(window?.telegram?.WebApp.BiometricManager.isBiometricAvailable, 'isBiometricAvailable')
    console.log(window?.telegram?.WebApp.BiometricManager.biometricType, 'biometricType')
    console.log(window?.telegram?.WebApp.BiometricManager.isAccessGranted, 'isAccessGranted')
    console.log(window?.telegram?.WebApp.BiometricManager.isAccessRequested, 'isAccessRequested')




    if (window?.telegram?.WebApp.BiometricManager.isBiometricAvailable && !window?.telegram?.WebApp.BiometricManager.isAccessGranted) {
      console.log('initiate biometric access');
      window?.telegram?.WebApp.BiometricManager.requestAccess()

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
