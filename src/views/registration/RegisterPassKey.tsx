import { useTurnkey } from '@turnkey/sdk-react';
import React from 'react'

export default function RegisterPassKey() {
    const { turnkey, passkeyClient } = useTurnkey();
    return (
        <div>RegisterPassKey</div>
    )
}
