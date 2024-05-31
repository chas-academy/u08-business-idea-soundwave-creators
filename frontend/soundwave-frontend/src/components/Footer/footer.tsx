import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function footer() {
  return (
    <div>
      <footer className="text-text bg-primary body-font shadow-secondary">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 lg:w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-text-900">
              <span className="ml-3 text-xl mb-5">Music App</span>
            </a>
            <hr className="border border-secondary" />
            <p className="mt-2 text-sm text-text">
              Elevate your auditory experience with Music App. Discover, stream,
              and immerse yourself in a world of melodies that move you. Your
              perfect soundtrack awaits.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-text-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <hr className="border border-secondary" />
              <nav className="list-none mb-10">
                <li>
                  <a className="text-text hover:text-hover">Home</a>
                </li>
                <li>
                  <Link to="/aboutus" className="text-text hover:text-hover">About Us</Link>
                </li>
                <li>
                  <Link to="/contactus" className="text-text hover:text-hover">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/termsofservice" className="text-text hover:text-hover">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacypolicy" className="text-text hover:text-hover">
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-text-900 tracking-widest text-sm mb-3">
                Useful Links
              </h2>
              <hr className="border border-secondary" />
              <nav className="list-none mb-10">
                <li>
                  <Link to="/helpandsupport" className="text-text hover:text-hover">
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-text hover:text-hover">FAQ</Link>
                </li>
                <li>
                  <Link to="/feedback" className="text-text hover:text-hover">Feedback</Link>
                </li>
                <li>
                  <a className="text-text hover:text-hover">Sitemap</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-2/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-text-900 tracking-widest text-sm mb-3">
                Subscription Links
              </h2>
              <hr className="border border-secondary lg:w-3/4 sm:w-1/2 md:w-1/2" />
              <nav className="list-none mb-10">
                <li>
                  <a className="text-text hover:text-hover">
                    Premium Plans
                  </a>
                </li>
                <li>
                  <a className="text-text hover:text-hover">Subscribe</a>
                </li>
                <li>
                  <a className="text-text hover:text-hover">Pricing</a>
                </li>
                <li>
                  <a className="text-text hover:text-hover">
                    Upgrade Account
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <p className="text-secondary text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Music App
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-secondary transition-transform duration-300 hover:scale-150">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-secondary transition-transform duration-300 hover:scale-150">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-secondary transition-transform duration-300 hover:scale-150">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-secondary transition-transform duration-300 hover:scale-150">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default footer;
