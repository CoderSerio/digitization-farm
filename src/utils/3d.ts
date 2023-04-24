import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// @ts-ignore 这是一个service worker，用于处理射线计算
import RayComputeWorker from '@/utils/worker.ts?worker'
// 超级炫酷的模型加载器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {
  CSS2DRenderer,
  CSS2DObject
} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

interface Options {
  scale?: number
  name?: string
  position?: {
    x?: number
    y?: number
    z?: number
  }
}

//创建基本三维场景
export const basic3DInit = () => {
  const scene = new THREE.Scene()

  // 添加光源
  const light = new THREE.AmbientLight(0xffffff, 1)
  // light1 = new THREE.PointLight(0xff0000, 1)
  // light2 = new THREE.PointLight('0xff0000', 10)
  light.position.set(0, 800, 0)
  scene.add(light)
  // light1.position.set(20, 300, 20)
  // scene.add(light1)
  // light2.position.set(200, 50, -20)
  // scene.add(light2)

  //创建一个透视相机
  const width = window.innerWidth - 100,
    height = window.innerHeight,
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 500000)
  //设置相机位置
  camera.position.set(3000, 3000, 0)
  //设置相机方向
  camera.lookAt(0, 0, 0)

  //创建辅助坐标轴
  // const axesHelper = new THREE.AxesHelper(1000)
  // scene.add(axesHelper)

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer()
  scene.fog = new THREE.Fog(0x005577, -1000, 30000)
  renderer.setClearColor(0x005577, 0.7)
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.setSize(width, height)
  renderer.render(scene, camera)

  return { renderer, camera, scene }
}

// 导入FBX文件
export const loadFBX = (
  modelPath: string,
  scene: THREE.Scene,
  options?: Options
) => {
  const loader = new FBXLoader()
  loader.load(modelPath, (obj) => {
    const scale = options?.scale ?? 1
    const x = options?.position?.x ?? 0,
      y = options?.position?.y ?? 0,
      z = options?.position?.z ?? 0
    obj.scale.set(scale, scale, scale)
    obj.position.set(x, y, z)
    obj.name = options?.name ?? modelPath

    scene.add(obj)
  })
}

// 导入GlTF文件
export const loadGLTF = (
  modelPath: string,
  textures: Array<string>,
  scene: THREE.Scene,
  options?: Options
) => {
  const loader = new THREE.ImageLoader()
  loader.setCrossOrigin('Anonymous') // 解决跨域问题

  const gltfLoader = new GLTFLoader()
  gltfLoader.load(modelPath, (gltf) => {
    const loadedTexture = textures.map((texture) => {
      return new THREE.TextureLoader().load(texture ?? '')
    })
    // 模型
    const model = gltf.scene
    //遍历模型每部分
    // let index = 0

    // model.traverse((child) => {
    //   if (child instanceof THREE.Mesh) {
    //     child.material.map = loadedTexture[index % textures.length]
    //     index++
    //   }
    // })
    const scale = options?.scale ?? 1
    const x = options?.position?.x ?? 0,
      y = options?.position?.y ?? 0,
      z = options?.position?.z ?? 0
    model.scale.set(scale, scale, scale)
    model.position.set(x, y, z)
    model.name = options?.name ?? modelPath
    scene.add(model)
  })
}

// 导入MTL文件
export const loadMTL = (
  mtlModelPath: string,
  objModelPath: string,
  scene: THREE.Scene,
  options?: Options
) => {
  const mtlLoader = new MTLLoader()
  // mtlLoader.setPath(modelPath)
  mtlLoader.load(mtlModelPath, (material) => {
    const objLoader = new OBJLoader()
    objLoader.setMaterials(material)
    objLoader.load(objModelPath, (obj) => {
      obj.scale.set(5, 5, 5)
      scene.add(obj)
    })
  })
}

export const init2dRenderer = () => {
  const objRenderer = new CSS2DRenderer()
  objRenderer.setSize(window.innerWidth, window.innerHeight)
  objRenderer.domElement.style.position = 'absolute'
  objRenderer.domElement.style.top = '0px'

  objRenderer.domElement.style.pointerEvents = 'none'
  return objRenderer
}

export const mount2dObject = (
  content: string,
  scene: THREE.Scene,
  options: Options
) => {
  const div = document.createElement('div')
  div.innerHTML = `<div class="tag">${content}</div>`

  var label = new CSS2DObject(div)
  //设置模型对象CSS2DObject在场景位置
  //标签标注boxMesh模型所以复制boxMesh的位置
  label.position.set(
    options.position?.x || 0,
    options.position?.y || 0,
    options.position?.z || 0
  )
  //适当偏移标签
  label.position.y += 300
  scene.add(label)
  return label
  // scene.add(label)
}
