import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeScene() {
  const containerRef = useRef(null);
  const modelLoaded = useRef(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;


    const ambientLight = new THREE.AmbientLight(0x6e6e6e, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x3b3939, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);


    const loader = new GLTFLoader();
    let model = null;
    let animationId = null;

    const loadModel = () => {
      if (modelLoaded.current) return;
      
      loader.load(
        '/3Dmodels/Knuckles/scene.gltf',
        (gltf) => {
          if (model) scene.remove(model);
          
          model = gltf.scene;
          modelLoaded.current = true;

          const bbox = new THREE.Box3().setFromObject(model);
          const size = bbox.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.5 / maxDim;
          model.scale.set(scale, scale, scale);

          const center = bbox.getCenter(new THREE.Vector3());
          model.position.sub(center.multiplyScalar(scale));
          scene.add(model);

          if (!animationId) {
            animate();
          }
        },
        undefined,
        (error) => {
          console.error('Erreur de chargement:', error);
          const geometry = new THREE.BoxGeometry();
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          model = new THREE.Mesh(geometry, material);
          scene.add(model);
          animate();
        }
      );
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (model) {
        model.rotation.x += 0.005;
        model.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    loadModel();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      modelLoaded.current = false;
    };
  }, []);

  return (
    <div ref={containerRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden'
    }} />
  );
}