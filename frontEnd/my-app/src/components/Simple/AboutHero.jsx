const AboutHero = () => {
  return (
    <div className="flex max-md:flex-col items-center justify-between max-sm:mt-10  py-16 px-4 bg-gray-50">
      <div className="w-full md:w-1/2 max-w-xl mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Skillbridge
        </h1>
        <div className="w-20 h-1 bg-orange-600 mb-6"></div>
      </div>


      <div className="w-full md:w-1/2 max-w-xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </p>
      </div>
    </div>
  )
}

export default AboutHero
