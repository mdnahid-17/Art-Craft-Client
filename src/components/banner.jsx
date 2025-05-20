import { useTypewriter,Cursor } from "react-simple-typewriter";
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {

    const [text] =useTypewriter({
        words:['Cartoon Drawing','Landscape Painting','Portrait Drawing','Water-Color Painting','Oil Painting','Charcoal Sketching'],
        loop:true,
        typeSpeed:120
      })

  return (
    <>
      <Swiper
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        speed={600}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        spaceBetween={30}
        slidesPerView={"auto"}
      >
        {/* image slide-1 */}
        <SwiperSlide>
          <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="relative">
                <div className="absolute rounded-lg w-full inset-0 bg-black opacity-25"></div>
                <img src="https://i.ibb.co.com/HTSMh8ZK/slide-1.jpg" className="w-full rounded-lg shadow-2xl" />
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl font-bold">
                  Unleash Your Creativity with Our
                  <span className="text-cyan-500">{text}</span>
                  <span className="text-cyan-500">
                    <Cursor cursorStyle="_"></Cursor>
                  </span>{" "}
                </h1>
                <p className="py-3 text-gray-400">
                  Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and
                  craft supplies, where creativity knows no bounds. Unleash your imagination today.
                </p>
                <button className="btn text-xl border-violet-500 hover:bg-linear-65 from-purple-500 to-pink-500 hover:text-white hover:border-transparent">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* image slide-2 */}
        <SwiperSlide>
          <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="relative">
                <div className="absolute rounded-lg w-full inset-0 bg-black opacity-25"></div>
                <img src="https://i.ibb.co.com/GfFRg3Lr/slide-2.jpg" className="w-full rounded-lg shadow-2xl" />
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl font-bold">
                  Unleash Your Creativity with Our
                  <span className="text-purple-500">{text}</span>
                  <span className="text-purple-500">
                    <Cursor cursorStyle="_"></Cursor>
                  </span>
                </h1>
                <p className="py-3 text-gray-400">
                  Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and
                  craft supplies, where creativity knows no bounds. Unleash your imagination today.
                </p>
                <button className="btn text-xl border-violet-500 hover:bg-linear-65 from-purple-500 to-pink-500 hover:text-white hover:border-transparent">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* image slide-3 */}
        <SwiperSlide>
          <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="relative">
                <div className="absolute rounded-lg w-full inset-0 bg-black opacity-25"></div>
                <img src="https://i.ibb.co.com/p8S6Ykm/slide-3.jpg" className="w-full rounded-lg shadow-2xl" />
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl font-bold">
                  Unleash Your Creativity with Our
                  <span className="text-pink-500">{text}</span>
                  <span className="text-pink-500">
                    {" "}
                    <Cursor cursorStyle="_"></Cursor>{" "}
                  </span>
                </h1>
                <p className="py-3 text-gray-400">
                  Your one-stop destination for handcrafted treasures and DIY delights. Explore our curated collection of art and
                  craft supplies, where creativity knows no bounds. Unleash your imagination today.
                </p>
                <button className="btn text-xl border-violet-500 hover:bg-linear-65 from-purple-500 to-pink-500 hover:text-white hover:border-transparent">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
