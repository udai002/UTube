import { ThreeCircles } from 'react-loader-spinner'

export const LoaderContainer = ()=>{
    return <div className="fixed w-full h-screen bg-black/75 top-0 left-0 flex justify-center items-center">
       <ThreeCircles color='red'/>
    </div>
}

