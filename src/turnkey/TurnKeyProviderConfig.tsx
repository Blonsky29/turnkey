import React from 'react'
import { TurnkeyProvider } from "@turnkey/sdk-react";
import { turnKeyConfig } from './config/turnKeyConfig';

export default function TurnKeyProviderConfig(props) {
    const {children} = props
    return (
        <TurnkeyProvider config={turnKeyConfig}>
            { children }
        </TurnkeyProvider>
    )
}
