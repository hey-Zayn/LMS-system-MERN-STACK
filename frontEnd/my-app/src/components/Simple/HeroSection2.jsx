import { Button } from "@/components/ui/button"
import Course from "@/pages/student/Course";
import Courses from "@/pages/student/Courses";

const roles = [
  { icon: "💻", label: "Developer" },
  { icon: "🎨", label: "UI Designer" },
  { icon: "📋", label: "Project Manager" },
  { icon: "✨", label: "Designer" },
  { icon: "📊", label: "Accountant" },
  { icon: "👥", label: "Human Resource" },
  { icon: "📢", label: "Marketing" },
]



const Section2 = () => {
  return (
    <section className="py-16">
      <div className="container w-full flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-3">Discover the Emerging Masters</h2>
          <p className="text-muted-foreground">Find the best master for your company and boosts your business fix!</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12 overflow-x-auto pb-4">
          {roles.map((role) => (
            <button key={role.label}  className="min-w-fit  rounded-md">
              <span className="mr-2">{role.icon}</span>
              {role.label}
            </button>
          ))}
        </div>
       {/* <Course/> */}
        {Array.from({length:1}).map((_,index)=>(
          <div key={index} className="flex flex-wrap gap-4">
            <Courses course={index} />
          </div>
        ))}

        <div className="flex justify-center mt-12">
          <Button  className="gap-2">
            View All
            <span className="text-blue-500">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Section2;
