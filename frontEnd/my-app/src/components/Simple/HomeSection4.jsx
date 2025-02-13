import React from "react";
// import { Card, CardContent } from "./components/ui/card"; // Replace with your actual path
// import { ScrollArea } from "./components/ui/scroll-area"; // Replace with your actual path
// import { cn } from "./lib/utils"; // Replace with your actual path
import { ChevronRight } from "lucide-react"; // Ensure you have lucide-react installed
import { Link } from "react-router-dom"; // Use react-router-dom for routing
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

const topics = [
  { name: "ChatGPT", learners: "4M+ learners" },
  { name: "Data Science", learners: "7M+ learners" },
  { name: "Python", learners: "477M+ learners" },
  { name: "Machine Learning", learners: "8M+ learners" },
  { name: "Deep Learning", learners: "2M+ learners" },
  { name: "Artificial Intelligence (AI)", learners: "3M+ learners" },
  { name: "Statistics", learners: "1M+ learners" },
  { name: "Natural Language", learners: "799.3K+ learners" },
];

const courses = [
  {
    id: 1,
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructors: "Julian Melanson, Benza Maman",
    rating: 4.5,
    reviews: 44175,
    price: 9.99,
    originalPrice: 49.99,
    isBestseller: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAfyZX6Wda2hboKFdnGUhorhEfTtLJ.png",
  },
  {
    id: 2,
    title: "The Complete AI-Powered Copywriting Course & ChatGPT Guide",
    instructors: "Ing. Tomas Moravek, Learn Digital Marketing",
    rating: 4.3,
    reviews: 1742,
    price: 13.99,
    originalPrice: 89.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAfyZX6Wda2hboKFdnGUhorhEfTtLJ.png",
  },
  {
    id: 3,
    title: "ChatGPT, Midjourney, Gemini, DeepSeek: Marketing Tools",
    instructors: "Anton Voroniuk, Anton Voroniuk Support",
    rating: 4.4,
    reviews: 481,
    price: 10.99,
    originalPrice: 34.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAfyZX6Wda2hboKFdnGUhorhEfTtLJ.png",
  },
  {
    id: 4,
    title: "ChatGPT Masterclass: Navigating AI and Prompt Engineering",
    instructors: "Chetan Pujari",
    rating: 4.4,
    reviews: 294,
    price: 9.99,
    originalPrice: 49.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAfyZX6Wda2hboKFdnGUhorhEfTtLJ.png",
  },
];

const navigation = [
  "Data Science",
  "IT Certifications",
  "Leadership",
  "Web Development",
  "Communication",
  "Business Analytics & Intelligence",
];

export default function HomeSection4() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <ScrollArea className="w-full whitespace-nowrap scrollbar-hide">
          <div className="flex w-max space-x-4 p-4">
            {navigation.map((item) => (
              <Link key={item} to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </nav>

      {/* Topics */}
      <ScrollArea className="w-full whitespace-nowrap scrollbar-hide">
        <div className="flex w-max space-x-4 p-4">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to="#"
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2",
                index === 0 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              )}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium">{topic.name}</span>
                <span className="text-xs text-gray-500">{topic.learners}</span>
              </div>
            </Link>
          ))}
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </ScrollArea>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold leading-tight line-clamp-2">{course.title}</h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-1">{course.instructors}</p>
                <div className="mt-1 flex items-center">
                  <span className="text-sm font-medium">{course.rating}</span>
                  <div className="ml-1 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={cn("h-4 w-4", i < Math.floor(course.rating) ? "fill-current" : "fill-gray-300")}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-lg font-bold">${course.price}</span>
                  <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                {course.isBestseller && (
                  <span className="mt-2 inline-block rounded-sm bg-[#eceb98] px-2 py-1 text-xs font-medium">
                    Bestseller
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show All Button */}
      <div className="p-6">
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded-md border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50"
        >
          Show all Data Science courses
        </Link>
      </div>
    </div>
  );
}