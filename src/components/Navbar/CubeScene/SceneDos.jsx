import React from 'react';
import { useRef, useEffect } from 'react';
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const SceneDos = () => {
    const mountRef = useRef(null)

    useEffect( () => {
        const currentMount = mountRef.current
        //Scene
        const scene = new THREE.Scene()
        scene.background = new THREE.Color("white");
        const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 1, 500)
        camera.position.z = 80
        camera.position.y = -5
        camera.position.x = 0
        scene.add(camera)
        //light
        const light = new THREE.PointLight(  "white", 1000)
        light.position.set(50,30,10)
        scene.add(light)

        

        //Renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth, 
                currentMount.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio = 2)
        currentMount.appendChild(renderer.domElement)
        
        

        //Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.enablePan = false
        controls.enableZoom = false
        
        controls.enableDamping = true

        //Cube
        const textureLoader = new THREE.TextureLoader()
        const matcap = textureLoader.load('./img/matcap.png')

        const cube = new THREE.Mesh(
            new THREE.TorusKnotGeometry( 10, 3, 100, 16 ),
            new THREE.MeshNormalMaterial({wireframe:true, normalScale: 5})  
        )
        
        
        scene.add(cube)
        cube.position.z = 0
        cube.position.x = 0
        cube.position.y = 0
        cube.color = "red"
        

        
        


        //Render the scene
        const animate = () => {
            
            controls.update()
            renderer.render(scene, camera)
            requestAnimationFrame(animate)

        }
        animate()


        //Clean up scene
        return () =>{
            currentMount.removeChild(renderer.domElement)
        }
        
    }, [])
    
    return (
        <div
            className='Contenedor3D2 nav-item'
            ref= {mountRef}
            style={{width : '90px', height: '80px'}}
        >
            
            
        </div>
    );
}

export default SceneDos;
