import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export default () => {
    const location = useLocation()
    
    useEffect(() => {
        console.log('background ', location?.state?.modal)
    }, [location?.modal])
    return (
        <div className="container">
            {location?.state?.modal ? (
                <h3>Instant message popup</h3>
            ) : (
                <h1>Instant Messaging</h1>
            )}
            
        </div>
    )
}