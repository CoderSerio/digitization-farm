<template>
  <div id="three"></div>
</template>
​
<script lang="ts" setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue'
// 超级炫酷的模型加载器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


//创建一个三维场景
const scene = new THREE.Scene()

//添加光源
const ambient = new THREE.AmbientLight(0xffffff, 5),
  light1 = new THREE.PointLight(0xff3700, 15),
  light2 = new THREE.PointLight('0xff0000', 10)
scene.add(ambient)
light1.position.set(20, 30, 20)
scene.add(light1)
light2.position.set(200, 50, -20)
scene.add(light2)

//创建一个透视相机
const width = window.innerWidth - 100,
  height = window.innerHeight,
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

//设置相机位置
camera.position.set(20, 30, 20)

//设置相机方向
camera.lookAt(0, 0, 0)

//创建辅助坐标轴
const axesHelper = new THREE.AxesHelper(10)
scene.add(axesHelper)

//创建一个物体（形状）
// const geometry = new THREE.BoxGeometry(100, 100, 100)

// //创建材质（外观）
// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff, //设置材质颜色
//   transparent: true, //开启透明度
//   opacity: 0.5 //设置透明度
// })
// //创建一个网格模型对象
// const mesh = new THREE.Mesh(geometry, material)

// //把网格模型添加到三维场景
// scene.add(mesh)

// 3d模型导入
// 根据观察，一个模型可以分为多个组件，我们需要给每个组件赋予不同的纹理
// 比如这里4个纹理，我们就猜测应该有4个组件，那么就需要遍历4次
const texture3 = new THREE.TextureLoader().load('');
const texture4 = new THREE.TextureLoader().load('');




const texture1 = new THREE.TextureLoader().load('');
const texture2 = new THREE.TextureLoader().load('');

const loader = new THREE.ImageLoader();
loader.setCrossOrigin("Anonymous");  // 解决跨域问题


const gltfLoader = new GLTFLoader()
gltfLoader.load('src/assets/3d_model/demo1/scene.gltf', (gltf) => {
  const model = gltf.scene
  //遍历模型每部分
  let index = 0

  model.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // 当取模等于0的时候赋予纹理2
      switch (index % 4) {
        case 0:
          child.material.map = texture1
          break
        case 1:
          child.material.map = texture2
          break
        case 2:
          child.material.map = texture3
          break
        case 3:
          child.material.map = texture4
          break
        default:
          child.material.map = texture4
      }
      index++
    }
  })

  // model.traverse((obj) => {
  //   //将图片作为纹理加载
  //   let explosionTexture = new THREE.TextureLoader().load(
  //     'src/assets/3d_model/demo1/textures/Clothes_emissive.png'
  //   )
  //   //调整纹理图的方向
  //   explosionTexture.flipY = false
  //   //将纹理图生成基础网格材质(MeshBasicMaterial)
  //   const material = new THREE.MeshBasicMaterial({
  //     map: explosionTexture,
  //   })
  //   //给模型每部分上材质
  //   obj.material = material
  // })
  scene.add(model)
})


//创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setClearColor('#fff', 0)
renderer.setSize(width, height)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', () => {
  renderer.render(scene, camera)
})

onMounted(() => {
  document.getElementById('three')?.appendChild(renderer.domElement)
})

</script>
​
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
