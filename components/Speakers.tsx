import Image from "next/image"
import { motion } from "framer-motion"

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Featured Speaker
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Dr. Jane Doe"
                width={300}
                height={300}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Keynote Speaker</div>
              <h3 className="mt-1 text-2xl font-semibold text-gray-900">Dr. Jane Doe</h3>
              <p className="mt-2 text-gray-600">Chief AI Scientist at TechCorp</p>
              <p className="mt-4 text-gray-700">
                Dr. Jane Doe is a world-renowned expert in artificial intelligence and machine learning. With over 20
                years of experience in the field, she has made significant contributions to the development of AI
                technologies that have revolutionized industries worldwide.
              </p>
              <p className="mt-4 text-gray-700">
                Her keynote address, "The Future of AI: Challenges and Opportunities," will explore the cutting-edge
                developments in AI and their potential impact on society and industry in the coming decades.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

