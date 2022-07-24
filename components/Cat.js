import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Box, Spinner } from '@chakra-ui/react'

const VoxelCat = () => {
    const refContainer = useRef()
    const loader = new GLTFLoader()
    const clock = new THREE.Clock();
    let mixer = null
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
            // scene.background = new THREE.Color(0xbfe3dd )
            scene.add(ambientLight)

            loader.load("/scene.gltf", function (gltf) {
                const obj = gltf.scene;
                obj.name = 'cat'
                obj.position.y = 2.5
                obj.position.x = 10
                obj.scale.set(2, 2, 2)
                obj.castShadow = true;
                obj.receiveShadow = true;
                scene.add(obj)

                setLoading(false);
                mixer = new THREE.AnimationMixer(obj);
                mixer.clipAction(gltf.animations[0]).play();
                animate();
            })

            let req = null

            const animate = () => {
                req = requestAnimationFrame(animate)
                const delta = clock.getDelta();
                mixer.update(delta);
                renderer.render(scene, camera)
                // camera.lookAt(target)
            }

            return () => {
                console.log('unmount')
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box m={'auto'}
            mb={['-40px', '-140px', '-200px']}
            ref={refContainer}
            w={[280, 480, 600]}
            h={[280, 480, 600]}
            position='relative'
            display={{base: 'hidden', md: 'hidden', lg: 'flex'}}
            justifyContent={'center'}
        >
            {loading && (
                <Spinner
                    size='xl'
                    position={'absolute'}
                    left={'50%'}
                    top='50%'
                    ml={'calc(0px - var(--spinner-size) / 2)'}
                    mt={'calc(0px - var(--spinner-size))'}
                />
            )}
        </Box>
    )
}

export default VoxelCat

