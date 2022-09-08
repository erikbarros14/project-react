import { useState, useEffect } from 'react'
import { Phospo, Phostos } from '../services/phostos'

import {
    Container,
    ContainerArea,
    ContainerHeader,
    ScreeWarning
   
} from './styled'


export function Header () {
    const [ loading , setLoading ] = useState(false)
    const [photos , setPhotos ] = useState <Phospo[]> ([])

    useEffect(() => {
        const getPhosto = async () => {
             setLoading( true)
              setPhotos( await photos )
             
             setLoading(false)
        }
       getPhosto();
    } , [])

    return (
      
          <Container>
          <ContainerArea>
            <ContainerHeader>
                Galeria de fotos
            </ContainerHeader>
            {}
            { loading && <ScreeWarning>
                <div className='emoji' >✊ </div>
                <div>carregando ...</div>
            </ScreeWarning> }
            
          </ContainerArea>

          </Container>
       
    )
}