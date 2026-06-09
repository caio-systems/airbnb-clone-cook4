import { Globe, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  AirCover
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Safety information
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Our COVID-19 Response
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Airbnb.org: disaster relief housing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Support Afghan refugees
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Combating discrimination
                </a>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Try hosting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  AirCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Explore hosting resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Visit our community forum
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  How to host responsibly
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-sm mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Learn about new features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Letter from our founders
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <span>© 2026 Airbnb Clone, Inc.</span>
              <span className="hidden md:inline">·</span>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
                <Globe size={16} />
                <span>English (US)</span>
              </button>
              <button className="text-sm font-semibold hover:underline">
                $ USD
              </button>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-900 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
