import React from 'react'

const HomeHero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-white to-lightblue-300">
    <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Discover amazing content</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
        </button>
    </div>
</div>
  )
}

export default HomeHero
