'use client'

import { Canvas } from "@react-three/fiber"
import { Book } from "@/components/3d-book/Book"
import {
    Environment,
    OrbitControls,
    Float,
    useProgress,
    Html,
    PerspectiveCamera,
    ContactShadows
} from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

interface SceneControls {
    resetView: () => void;
    handleZoom: (direction: 'in' | 'out') => void;
}

interface SceneProps {
    onInit: (controls: SceneControls) => void;
}

function Scene({ onInit }: SceneProps) {
    const controlsRef = useRef<any>()
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        if (controlsRef.current) {
            onInit({
                resetView: () => {
                    controlsRef.current.reset()
                    setZoom(1)
                    controlsRef.current.object.position.z = 5
                },
                handleZoom: (direction) => {
                    const newZoom = direction === 'in' ? zoom + 0.2 : zoom - 0.2
                    setZoom(Math.min(Math.max(newZoom, 0.8), 1.5))
                    if (controlsRef.current) {
                        controlsRef.current.object.position.z = 5 / newZoom
                    }
                }
            })
        }
    }, [zoom, onInit])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />

            <Float
                floatIntensity={0.15}
                speed={2}
                rotationIntensity={0.2}
            >
                <group position={[-0.05, 0.1, 0.1]}>
                    <Book
                        scale={0.8}
                        rotation-y={-Math.PI / 8}
                    />

                    <ContactShadows
                        position={[0, -1, 0]}
                        opacity={0.35}
                        scale={5}
                        blur={2.5}
                        far={1}
                        resolution={256}
                        color="#000000"
                    />
                </group>
            </Float>

            {/* Warmer lighting that matches the site's color scheme */}
            <directionalLight
                position={[2, 5, 2]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
                color="#FFE4BC"
            />
            <directionalLight
                position={[-2, 5, 2]}
                intensity={0.4}
                color="#FFE4BC"
            />
            <ambientLight intensity={0.3} color="#FFF5E7" />

            <Environment preset="apartment" />
            <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2}
                enableDamping
                dampingFactor={0.05}
                rotateSpeed={0.5}
            />
        </>
    )
}

export function ThreeDBookSection() {
    const [mounted, setMounted] = useState(false)
    const [controls, setControls] = useState<SceneControls | null>(null)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <section className="relative py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-gray-50"
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
            </motion.div>

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-gray-900">
                            Preview the Book
                        </h2>
                        <p className="text-xl text-gray-600">
                            Get a glimpse of the knowledge inside
                        </p>
                    </motion.div>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/50 to-white shadow-2xl"
                    >
                        <Canvas
                            shadows
                            dpr={[1, 2]}
                            camera={{ position: [0, 0, 5], fov: 35 }}
                        >
                            <Suspense fallback={<Loader />}>
                                <Scene onInit={setControls} />
                            </Suspense>
                        </Canvas>

                        {/* Controls UI */}
                        <div className="absolute top-6 right-6 flex gap-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => controls?.resetView()}
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                                <div className="w-px bg-gray-200" />
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => controls?.handleZoom('in')}
                                >
                                    <ZoomIn className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => controls?.handleZoom('out')}
                                >
                                    <ZoomOut className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>

                        {/* Bottom controls */}
                        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                            >
                                <p className="text-sm text-gray-600">
                                    Drag to rotate • Click pages to flip
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Button
                                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center gap-2"
                                    onClick={() => window.open('https://s3.amazonaws.com/samples.leanpub.com/quickstartwithai-sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0XBXHW3Q9GGV69BT7E82%2F20241031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241031T131911Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=d6899433c719f56f94239f380d5f72d74d9252ff95c01cd9c9e7aed6d80e17ab', '_blank')}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    <span>Read Free Sample</span>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Loader() {
    const { progress } = useProgress()
    return (
        <Html center>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
            >
                <div className="w-24 h-24 border-4 border-t-blue-600 rounded-full animate-spin" />
                <p className="mt-4 text-lg font-medium text-gray-900">
                    {progress.toFixed(0)}%
                </p>
            </motion.div>
        </Html>
    )
}
