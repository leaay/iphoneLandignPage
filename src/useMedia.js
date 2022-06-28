import {useState,useEffect} from 'react';

const useMediaQuery = () => {

    const [matches,setMatches] = useState()
    
    useEffect(()=>{
        setMatches(window.innerWidth)
        window.addEventListener('resize',()=>{
            const width = window.innerWidth
            setMatches(width)
        })

  
       
      })
    return matches
}

export default useMediaQuery;
