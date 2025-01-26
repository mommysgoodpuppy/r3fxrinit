
import React, { useRef, useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'

const store = createXRStore();

export function App() {
  const [red, setRed] = useState(false)
  return <>
    <button onClick={() => store.enterAR()}>Enter AR</button>
    <button onClick={() => store.enterVR()}>Enter VR</button>
    <Canvas>
      <XR store={store}>
        <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, 0]}>
          <boxGeometry />
          <meshBasicMaterial color={red ? 'red' : 'blue'} />
        </mesh>
      </XR>
    </Canvas>
  </>
}
