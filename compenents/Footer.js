
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
<footer className="bg-gray-900 text-gray-300 py-8  ">
  <div className="max-w-screen-lg mx-auto px-4 md:px-8">
    <div className="flex items-center justify-between mb-4">
      <p></p>
    </div>
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-medium mb-4">Company</h2>
        <ul className="list-disc list-inside">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-medium mb-4">Resources</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div className="flex items-center justify-end mt-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-white hover:text-blue-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-white hover:text-blue-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white hover:text-pink-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white hover:text-blue-500" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer
