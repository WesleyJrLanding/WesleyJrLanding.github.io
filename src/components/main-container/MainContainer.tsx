import React, { ReactNode } from 'react';

import './style.css';

const MainContainer: React.FC<{children: ReactNode}> = ({ children }) => {
    return <div className='main_container px-12 py-24'>
        {children}
    </div>
}

export { MainContainer }