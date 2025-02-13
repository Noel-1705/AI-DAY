import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-cyan-300">AI Tech Fest</h3>
            <p className="mt-2 text-sm text-gray-400">AI Department of MBCCET</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <nav>
              <ul className="flex justify-center space-x-4">
                <li>
                  <Link href="#about" className="hover:text-cyan-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-cyan-300 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#speakers" className="hover:text-cyan-300 transition-colors">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-cyan-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.mbcpeermade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
              >
                MBCCET
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">AI Dept Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">MBCCET Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Department of MBCCET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

