import * as THREE from "three";
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber'
import { useFBX } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { tankPositionState } from "../../../../gameState";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

function TankModel(props) {
  const tank = useRef();
  // const { nodes, materials } = useGLTF('/personal-portfolio/tank.glb');
  const fbx = useFBX('/portfolio/models/tank.fbx');
  const [tankPosition, setTankPosition] = useRecoilState(tankPositionState);

  useFrame(({ mouse }) => {
    setTankPosition({
      position: {
        x: mouse.x,
        y: mouse.y
      },
      rotation: {
        z: -mouse.x * 0.5,
        x: mouse.x * 0.5,
        y: mouse.y * 0.2
      }
    });
  });

  useFrame(() => {
    // tank.current.rotation.z = tankPosition.rotation.z;
    // tank.current.rotation.y = tankPosition.rotation.x;
    // tank.current.rotation.x = tankPosition.rotation.y;
    // tank.current.position.y = tankPosition.position.y;
    // tank.current.position.x = tankPosition.position.x;
    // fbx.children[7].rotation.z = tankPosition.rotation.z;
    fbx.children[8].rotation.z = tankPosition.rotation.z;
    fbx.children[8].rotation.y = tankPosition.rotation.y;
  });

  // Material.003 gun center parts
  // Material.002
  useEffect(() => {
    fbx.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshLambertMaterial({ color: '#32FFB8'});
      }
    })
    var pointLight =  new THREE.PointLight(0xf44336, 4, 100);
    pointLight.position.set(0,0,15);
    fbx.children[1] = pointLight;
    fbx.children[2] = new THREE.PointLight(0xffffff, 0, 100); // white
    fbx.children[3] = new THREE.PointLight(0xf44336, 0, 100); // red
    fbx.children[4] = new THREE.PointLight(0x8fce00, 0, 100); // green
    fbx.children[7] = new THREE.Mesh();
    fbx.updateWorldMatrix(true);
  }, []);

  return (
    <>
    <group ref={tank} {...props} receiveShadow={true}>
      <primitive object={fbx} dispose={false} />
    </group>

     
       {/* <mesh visible>
         <boxBufferGeometry args={[1,1,1]} />
         <meshPhongMaterial color={'white'} />
         <meshStandardMaterial
           attach="material"
           color="white"
           roughness={1}
           metalness={0}
         /> 
     </mesh> */}
      {/* Main body */}
      {/* <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[1.12173486, 0.85714293, 0.8402164]}
      /> */}
      {/* top shield for tires */}
      {/* <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 0.05469192, 0]}
        scale={0.80000001}
      /> */}
      {/* Top of the tank */}
      {/* <group position={[0, 0.59999996, 0.1]}>
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={nodes.Circle_1.material}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.002"]}
        />
      </group> */}
      {/* In between gun parts */}
      {/* <mesh
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[0, 1.06455553, 0.89632851]}
        scale={0.20147002}
      /> */}

      {/* 1. outside tire rubber */}
      {/* 2. Inner wheel i.e. rims */}
      {/* <group position={[0, 0.05469192, 0]}>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
      </group>
      <group position={[0, 0.05469192, -1.5]}>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
      </group>
      <group position={[-2.70, 0.05469192, -1.5]}>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
      </group>
      <group position={[-2.70, 0.05469192, 0]}>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
      </group> */}
      </>
  );
}

export default TankModel;