"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Event = {
  title: string
  description: string
  imageUrl: string
  formLink: string
}

const onlineEvents: Event[] = [
  {
    title: "AI Chess Challenge",
    description: "Test your skills against our AI in a thrilling chess tournament.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/ai-chess-challenge",
  },
  {
    title: "Virtual AI Art Gallery",
    description: "Explore and create AI-generated artwork in our virtual gallery.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/ai-art-gallery",
  },
  {
    title: "Chatbot Coding Contest",
    description: "Develop the most engaging AI chatbot in our coding competition.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/chatbot-contest",
  },
  {
    title: "AI Ethics Debate",
    description: "Participate in our online debate on pressing AI ethics issues.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/ai-ethics-debate",
  },
  {
    title: "Machine Learning Hackathon",
    description: "Build innovative ML models to solve real-world problems.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/ml-hackathon",
  },
  {
    title: "AI Trivia Night",
    description: "Test your AI knowledge in our fun and challenging trivia game.",
    imageUrl: "/placeholder.svg",
    formLink: "https://forms.google.com/ai-trivia-night",
  },
]

export default function GamesAndActivities() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % onlineEvents.length)
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + onlineEvents.length) % onlineEvents.length)
  }

  return (
    <section id="games-and-activities" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-300">Games and Activities</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-100">Online Events</h3>
          <div className="relative">
            <div className="flex overflow-x-hidden">
              {onlineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex-shrink-0 px-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    transform: `translateX(-${startIndex * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={event.imageUrl || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold mb-2 text-cyan-300">{event.title}</h4>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <a
                        href={event.formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-cyan-100">Offline Events</h3>
          <p className="text-gray-300 text-center">
            Offline events will be announced soon. Stay tuned for exciting in-person activities!
          </p>
        </div>
      </div>
    </section>
  )
}

