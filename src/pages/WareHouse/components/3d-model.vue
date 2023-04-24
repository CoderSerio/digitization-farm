<template>
  <div id="three"></div>
</template>
​
<script lang="ts" setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// @ts-ignore 这是一个service worker，用于处理射线计算
import RayComputeWorker from '@/utils/worker.ts?worker'
import { onMounted, ref } from 'vue'
// 超级炫酷的模型加载器
import { basic3DInit, loadFBX, loadGLTF, init2dRenderer, mount2dObject } from '@/utils/3d'



const isLoading = ref(false)
const { renderer, camera, scene } = basic3DInit()
const renderer2d = init2dRenderer()

const generateTagCotent = (name: string, tem: number, num: number) => {
  return `<div>
  <h5 style="text-align:center;">${name}</h5>
  <div style="color:${tem > 40 ? '#f00' : '#fff'}">当前温度：${tem} °C</div>
  <div>禽畜总数：${num}</div>
</div>`

}

// 导入草地
loadFBX('src/assets/3d_model/grass/grassland.fbx', scene, {
  scale: 10000,
  position: { y: -200 }
})
// 导入三个小房子
loadFBX(
  'src/assets/3d_model/happy-farm2/source/warehouse-sketchfab.fbx',
  scene,
  { position: { z: 1850 } }
)
loadFBX('src/assets/3d_model/happy-farm2/source/warehouse-sketchfab.fbx', scene)
loadFBX(
  'src/assets/3d_model/happy-farm2/source/warehouse-sketchfab.fbx',
  scene,
  { position: { z: -1850 } }
)

loadGLTF(
  'src/assets/3d_model/ware-house/gltf/model.gltf',
  [],
  scene,
  { position: { x: -3000, z: -50 }, scale: 20 }
)

mount2dObject(generateTagCotent('养鸡场', 33, 100), scene, { position: { z: 1850 } })
mount2dObject(generateTagCotent('养猪场', 43, 100), scene, {})
mount2dObject(generateTagCotent('养羊场', 33, 100), scene, { position: { z: -1850 } })


const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', () => {
  renderer.render(scene, camera)
  renderer2d.render(scene, camera)
})

// 点击事件处理——向量发射器
const meshArr: Array<any> = []
const pointer = new THREE.Vector2()
const meshOnClick = (event: any) => {
  if (isLoading.value) {
    return
  }
  isLoading.value = true
  let raycaster = new THREE.Raycaster()
  // 屏幕坐标 -> 3D坐标
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  scene.children?.forEach((child) => {
    if (child.isObject3D) {
      meshArr.push(child)
    }
  })
  const intersects = raycaster.intersectObjects(meshArr)
  //被射线穿过的几何体为一个集合，越排在前面说明其位置离端点越近，所以直接取[0]
  if (intersects.length > 0) {
    // label.position.copy(intersects[0].object?.position)
    setTimeout(() => {
      isLoading.value = false
    }, 200)
  }
}

// const rayComputeWorker = new RayComputeWorker()

onMounted(() => {
  // 创建物体点击事件
  document.addEventListener('click', meshOnClick)
  // 将物体挂载
  const el = document.getElementById('three')
  el?.appendChild(renderer.domElement)
  el?.appendChild(renderer2d.domElement)
  renderer2d.render(scene, camera)
})
</script>
​
<style>
body {
  margin: 0;
  padding: 0;
}

.tag {
  color: #fff;
  background-color: rgba(25, 25, 25, 0.5);
  border-radius: 5px;
  padding: 10px;
}
</style>
