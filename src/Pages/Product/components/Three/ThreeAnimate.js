import React, { useRef, useEffect, useContext } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Sky,
  useGLTF,
  useAnimations,
  Cloud,
} from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import SwitchButtonContext from '../../../../contexts/SwitchButtonContext';

function Box() {
  const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial attach="material" color="#f8b62b" />
    </mesh>
  );
}
function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial attach="material" color="#f8b62b" />
    </mesh>
  );
}

function Ball() {
  // const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
  return (
    <mesh scale={10} onClick={() => {}}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#f8b62b" />
    </mesh>
  );
}

// function Model() {
//   const gltf = useGLTF('/images/dog-baked.glb');
//   const myAnimate = useRef();
//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myAnimate.current.rotation.y = a;
//   });
//   return <primitive ref={myAnimate} object={gltf.scene} />;
// }
// function Model() {
//   const gltf = useGLTF(
//     '/images/animated-bengal-cat/source/bengal_cat_non_commercial.glb'
//   );
//   const myAnimate = useRef();
//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myAnimate.current.rotation.y = a;
//   });
//   return <primitive ref={myAnimate} object={gltf.scene} />;
// }
function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF(
    '/images/animated-bengal-cat/source/bengal_cat_non_commercial.glb'
  );

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // console.log(actions["All Animations"]);
    const animate = actions['All Animations'];
    animate.play();
  });
  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   myAnimate.current.rotation.y = a;
  // });
  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      position={[60, 0, 0]}
      rotation={[-0.25, 0, 0]}
      scale={100}
    />
  );
}

function Model2(props) {
  const { mode } = useContext(SwitchButtonContext);
  const group = useRef();
  const { scene, animations } = useGLTF('/images/animated_dog_shiba_inu.glb');
  const { actions } = useAnimations(animations, group);
  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   group.current.rotation.y = a;
  // });
  useEffect(() => {
    // console.log(actions);
    // const animate = actions['0|play_dead_0'];
    const animate = actions['0|shake_0'];
    const animate2 = actions['0|shake_0'];

    // mode === 'dog' ?
    animate.play();
    //  : animate2.play();
  });
  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   myAnimate.current.rotation.y = a;
  // });
  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      position={[-50, 0, 0]}
    />
  );
}

function Camera(props) {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => setDefaultCamera(ref.current), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
}

function ThreeAnimate() {
  return (
    <Canvas
      id="three_canvas_container"
      camera={{
        position: [40, 140, 160],
        fov: 50,
        // far: mode === 'dog' ? 1000 : 200,
      }}
      dpr={[1, 2]}
    >
      {/* <Camera position={[0, -100, 10]} /> */}
      <OrbitControls
      // target={[0.6, 0.4, 0]}
      // makeDefault
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      {/* <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
        position={[0,100,30]}
      /> */}
      <ambientLight intensity={0.8} />
      <spotLight position={[150, 130, 190]} angle={0.5} />
      <Physics>
        <Model2 />
        <Model />
        <Ball />
        {/* <Box /> */}

        {/* <Model2 /> */}
        {/* <Plane /> */}
      </Physics>
    </Canvas>
  );
}

export default ThreeAnimate;
