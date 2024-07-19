import React from 'react'
import {Canvas} from '@react-three/fiber'

function FirstScene() {
  return (
    
  <div className='canvas-container'>
    <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
     <mesh>
      <sphereGeometry/>
      <meshNormalMaterial/>
    </mesh>
    </Canvas>
  </div>


            
       

  )
}

export default FirstScene