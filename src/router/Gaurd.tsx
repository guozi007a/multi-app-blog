/** 路由守卫 */
import { Suspense, FC, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    const navigate = useNavigate();

    useEffect(() => { 
        const path = location.pathname
        if (path.endsWith('/blog')) {
            navigate('/blog/main')
        }

        if (path.endsWith('/blog/msg-center')) {
            navigate('/blog/msg-center/comment')
        }
        
    }, [location.pathname])

    return <Suspense fallback={<span></span>}>
        <Component />
    </Suspense>
}

export const gaurd = (Component: FC) => {
    return <GaurdRouter Component={Component} />
}