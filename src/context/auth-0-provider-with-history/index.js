import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth0ProviderWithNavigate = ({ children }) => {
    
    const navigate = useNavigate();

    const onRedirectCallBack = (appState) => {
        navigate("/", { replace: true });
    }
    
    return (
        <Auth0Provider
            domain="dev-xpih3wy6bfwa6fzy.us.auth0.com"
            clientId="jzowyFweyiH3eGtxfJrlhtdLoK6kVpD7"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
            onRedirectCallback={onRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    )
}
