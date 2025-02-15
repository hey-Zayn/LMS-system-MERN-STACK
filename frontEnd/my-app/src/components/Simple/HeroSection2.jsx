import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
// import Image from "next/image"

const roles = [
  { icon: "💻", label: "Developer" },
  { icon: "🎨", label: "UI Designer" },
  { icon: "📋", label: "Project Manager" },
  { icon: "✨", label: "Designer" },
  { icon: "📊", label: "Accountant" },
  { icon: "👥", label: "Human Resource" },
  { icon: "📢", label: "Marketing" },
]

const masters = [
  {
    name: "Zrand Hobs",
    role: "Developer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Gimp", "Wordpress"],
  },
  {
    name: "Dorothy Wood",
    role: "Teacher",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Elementor", "Wix", "Hubspot"],
    featured: true,
  },
  {
    name: "Timothy Baker",
    role: "Teacher",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Figma", "Elementor", "Wordpress"],
  },
  {
    name: "Shane Pratt",
    role: "Developer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Figma", "Wordpress", "Gimp"],
  },
  {
    name: "Frances Washing",
    role: "Developer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Wordpress", "Wix", "Illustrator"],
  },
  {
    name: "Jason Bell",
    role: "Web Designer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Elementor", "Wordpress"],
  },
  {
    name: "Kathryn Sanchez",
    role: "Developer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Figma", "Workflow", "Wix"],
  },
  {
    name: "Jaime Strickland",
    role: "Web Designer",
    rating: 4.8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avsWp1DnHN1hb2PfIbgp7Z1uHg4x4t.png",
    skills: ["Gimp", "Figma", "Workflow"],
  },
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
            <button key={role.label}  className="min-w-fit bg-gray-100 text-white hover:bg-[#8AB9FF] hover:text-white transition-all duration-300 px-4 py-2 rounded-md">
              <span className="mr-2">{role.icon}</span>
              {role.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master) => (
            <Card key={master.name} className={`p-6 ${master.featured ? "ring-2 ring-blue-100 bg-blue-50/50" : ""}`}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-4">
                  <img src={master.image} alt={master.name} className="rounded-full object-cover" />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{master.rating}</span>
                </div>
                <h3 className="font-medium mb-1">{master.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{master.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {master.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="gap-2">
            View All
            <span className="text-blue-500">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Section2;
