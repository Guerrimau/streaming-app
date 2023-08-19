import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const client = process.env.REACT_APP_AUTH_CLIENT
const domain = process.env.REACT_APP_AUTH_DOMAIN

export const Auth0ProviderWithNavigate = ({ children }) => {
    
    const navigate = useNavigate();

    const onRedirectCallBack = (appState) => {
        navigate("/", { replace: true });
    }
    
    return (
        <Auth0Provider
            domain={domain}
            clientId={client}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
            onRedirectCallback={onRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    )
}
