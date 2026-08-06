import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') })
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.z = 5
renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01
  torus.rotation.y += 0.01
  torus.rotation.z += 0.01

  renderer.render(scene, camera);
}

animate()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
