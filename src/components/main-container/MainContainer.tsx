import React, { ReactNode } from 'react';

import './style.css';

const MainContainer: React.FC<{children: ReactNode}> = ({ children }) => {
    return <div className='main_container overflow-x-hidden md:px-12 md:py-24 px-6 py-12'>
        {children}
    </div>
}

export { MainContainer }