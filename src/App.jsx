import './App.css'
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PointerLockControls, Environment, OrbitControls, PresentationControls } from '@react-three/drei';

function Model(props) {
  const group = useRef();
  const { scene } = useGLTF("./potline.glb");
  const [hovered, setHovered] = useState(false);

  useFrame(() => {

    //hover clor change
    // if (group.current) {
    //   group.current.traverse((child) => {
    //     if (child.isMesh) {
    //       child.material.color.set(hovered ? 'white' : 'white');
    //     }
    //   });
    // }


    //mesh find
    // if (group.current) {
    //   // group.current.traverse((child) => {
    //   //   if (child.isMesh) {
    //   //     console.log(child.name);
    //   //   }
    //   // });
    //   group.current.traverse((child) => {
    //        if (child.isMesh) {
    //       console.log(child.name);
    //     }
    //     if(child.isMesh && child.name === 's1'){
    //       child.material.color.set('red');
    //     }
    //     if(child.isMesh && child.name === 's2'){
    //       child.material.color.set('green');
    //     }
    //     if(child.isMesh && child.name === 's3'){
    //       child.material.color.set('pink');
    //     }
    //     if(child.isMesh && child.name === 's4'){
    //       child.material.color.set('red');
    //     }
    //     if(child.isMesh && child.name === 's5'){
    //       child.material.color.set('black');
    //     }
        
    //   });
   
    // }

    if (group.current) {
      group.current.traverse((child) => {
        if (child.isMesh && child.name === 's1') {  // Replace 'LeftSideMeshName' with the actual name of your mesh
          child.material.color.set(hovered ? 'green' : 'black');  // Replace 'desiredColor' and 'originalColor' with the colors you want
        }
        if (child.isMesh && child.name === 's2') {  // Replace 'LeftSideMeshName' with the actual name of your mesh
          child.material.color.set(hovered ? 'orange' : 'black');  // Replace 'desiredColor' and 'originalColor' with the colors you want
        }
        if (child.isMesh && child.name === 's3') {  // Replace 'LeftSideMeshName' with the actual name of your mesh
          child.material.color.set(hovered ? 'blue' : 'black');  // Replace 'desiredColor' and 'originalColor' with the colors you want
        }
        if (child.isMesh && child.name === 's4') {  // Replace 'LeftSideMeshName' with the actual name of your mesh
          child.material.color.set(hovered ? 'white' : 'black');  // Replace 'desiredColor' and 'originalColor' with the colors you want
        }
        if (child.isMesh && child.name === 's5') {  // Replace 'LeftSideMeshName' with the actual name of your mesh
          child.material.color.set(hovered ? 'yellow' : 'black');  // Replace 'desiredColor' and 'originalColor' with the colors you want
        }
      });
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.object.name === 's1') {
      console.log('Yes, this is Body_2002_5');
    }
  };

  return (
    <primitive
      ref={group}
      object={scene}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={handleClick}
    />
  );
}

function App() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
      {/* <color attach="background" args={['#101010']} /> */}
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 6]}>
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>

    
  );
}

export default App;
