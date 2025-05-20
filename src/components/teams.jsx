import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import girl1 from "../assets/teams/girl1.jpg"
import girl2 from "../assets/teams/girl2.jpg"
import girl3 from "../assets/teams/girl3.jpg"
import girl4 from "../assets/teams/girl4.jpg"
import boy1 from "../assets/teams/boy1.jpg"
import boy2 from "../assets/teams/boy2.jpg"
import boy3 from "../assets/teams/boy3.jpg"
import boy4 from "../assets/teams/boy4.jpg"

export default function Teams() {
  return (
    <div className="pb-6">
      <div className="container p-4 mx-auto space-y-16 sm:p-10">
        <div className="">
          <h3 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text mb-5 border-4  w-fit mx-auto px-5 ">
            Meet Our Artists
          </h3>
          <p className="max-w-2xl text-base font-semibold text-center mx-auto">
            Meet Our Artists: A collective of visionaries, each with a unique story to tell through their craft. Explore their
            diverse backgrounds and inspirations, and discover the magic behind their creations.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img alt="" className="object-cover h-56 w-[220px] mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={girl1} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={boy1} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Jonathan</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={girl2} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Samantha</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={boy2} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Penelope</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={girl3} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Alexander</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={boy3} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Gabrielle</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={girl4} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Victoria</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <img alt="" className="object-cover w-[220px] h-56 mx-auto mb-4 bg-center rounded-xl dark:bg-gray-500 " src={boy4} />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">Nicholas</h4>
              <p className="text-sm dark:text-gray-600">Artist</p>
              <div className="flex mt-2 space-x-2">
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="Instagram" className="dark:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="#" title="Facebook" className="dark:text-gray-600">
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
