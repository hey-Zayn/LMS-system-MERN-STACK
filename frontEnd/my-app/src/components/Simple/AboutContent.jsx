


const AboutContent = () => {
    const aboutAchievements = [
        {
            title: "Trusted by Thousands",
            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
           
        },
        {
            title: "Trusted by Thousands",
            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
           
        },


        {
            title: "Trusted by Thousands",
            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
           

        },
        {
            title: "Trusted by Thousands",
            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
           
        },
        


    ];
    
  return (
    <div className="flex flex-col gap-10 py-16 px-4 container mx-auto w-full">
      <div className="flex flex-col gap-4 px-4">
        <h1 className="text-2xl font-bold">Achievements</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our commitment to excellence has led us to achieve significant


          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                aboutAchievements.map((achievement, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-white p-4 rounded-lg">
                        <img src={achievement.img}  className="w-14 h-14 object-cover rounded-lg" />
                        <h2 className="text-lg font-semibold">{achievement.title}</h2>
                        <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                    </div>
                ))

            }
      </div>
    </div>

  );
};

export default AboutContent;
