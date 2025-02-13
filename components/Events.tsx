import { motion } from "framer-motion"

export default function Events() {
  const events = [
    {
      title: "Opening Keynote",
      date: "Day 1",
      time: "9:00 AM - 10:30 AM",
      description: "Kickoff the fest with an inspiring keynote on the future of AI.",
    },
    {
      title: "AI in Healthcare Panel",
      date: "Day 1",
      time: "11:00 AM - 12:30 PM",
      description: "Explore the transformative potential of AI in modern healthcare.",
    },
    {
      title: "Machine Learning Workshop",
      date: "Day 2",
      time: "10:00 AM - 1:00 PM",
      description: "Hands-on workshop on advanced machine learning techniques.",
    },
    {
      title: "AI Ethics Roundtable",
      date: "Day 2",
      time: "2:00 PM - 3:30 PM",
      description: "Discuss the ethical implications of AI in society.",
    },
    {
      title: "Networking Reception",
      date: "Day 2",
      time: "6:00 PM - 8:00 PM",
      description: "Connect with fellow attendees and speakers in a relaxed setting.",
    },
  ]

  return (
    <section id="events" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Event Schedule
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">
                  {event.date} | {event.time}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

