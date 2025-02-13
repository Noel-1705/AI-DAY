import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          About the Fest
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-6 text-gray-600"
          >
            AI Tech Fest is a premier gathering of AI enthusiasts, researchers, and industry leaders. Our goal is to
            foster innovation and collaboration in the rapidly evolving field of Artificial Intelligence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-6 text-gray-600"
          >
            This year's fest will focus on cutting-edge themes including:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="list-disc list-inside mb-6 text-gray-600"
          >
            <li>Machine Learning and Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision and Image Recognition</li>
            <li>AI Ethics and Responsible AI</li>
            <li>AI in Healthcare and Biotechnology</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600"
          >
            Whether you're a seasoned AI professional, a curious student, or an industry leader looking to leverage AI
            in your business, AI Tech Fest offers invaluable insights and networking opportunities for all.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

