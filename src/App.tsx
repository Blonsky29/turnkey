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
    console.log(window.PublicKeyCredential);
    
    console.log(window?.Telegram?.WebApp);
    const biometricManager = window?.telegram?.WebApp.BiometricManager()
    console.log(biometricManager);
    

    
    if (window.PublicKeyCredential) {
      console.log("WebAuthn is supported in this environment");
    } else {
      console.log("WebAuthn is not supported in this environment");
    }
  }, [])
  return (
    <>
      <button type="button" onClick={loginWithPasskey}>
        Login with Passkey
      </button>
      {/* <button type="button" onClick={loginWithIframe}>
        Login with ifrmae
      </button> */}
    </>
  )
}

export default App
