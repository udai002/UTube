import { ReactNode } from 'react'


import { PageHeader } from '../layout/PageHeader'

import { Sidebar } from '../layout/Sidebar'

type NavigationsProps = {
    children: ReactNode
}

export const Navigations = ({ children }: NavigationsProps) => {



    return <div className='flex flex-col max-h-screen'>
        <PageHeader />
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto scrollbar-hidden'>
            <div className=''>
                <Sidebar />
            </div>
            <div className="overflow-x-hidden md:px-4 pb-4">
                {children}
            </div>
        </div>

    </div>
}