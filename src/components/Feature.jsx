import { Fade } from "react-awesome-reveal";

export default function Feature() {
  return (
    <div className=" md:my-[50px]">
      <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text border-4  w-fit mx-auto px-5 ">
        Painting and Drawing Features
      </h1>
      <p className="mb-10 md:py-2 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base font-medium">
        Dive into a world of artistic expression with our Painting and Drawing Features. From beginner basics to advanced
        techniques, discover inspiration, tutorials, tools, and supplies to elevate your creative journey to new heights.
      </p>

      <section className=" dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
          <Fade delay={300} duration={2000}>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://i.postimg.cc/Vv22rVmr/emily-webster-sl-Hj-A9-HQp0-unsplash.jpg"
                className="h-80 object-cover dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h3 className="text-3xl font-bold">Inspiring Creativity</h3>
                <p className="my-6 dark:text-gray-600">
                  Unleash your imagination with our diverse range of materials. Explore tutorials, tips, and projects to fuel your
                  creative journey.
                </p>
              </div>
            </div>
          </Fade>
          <Fade delay={500} duration={2000}>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="https://i.postimg.cc/NGn3z5ms/victoria-berman-U-ouht-Pg-HH4-unsplash.jpg"
                className="h-80 object-cover dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h3 className="text-3xl font-bold">Artisanal Excellence</h3>
                <p className="my-6 dark:text-gray-600">
                  Experience unparalleled quality and creativity with our curated selection of artisanal treasures. Elevate your
                  craft with Artisanal Excellence today.
                </p>
              </div>
            </div>
          </Fade>
          <Fade delay={700} duration={2000}>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://i.postimg.cc/RZ5jvyg2/elena-mozhvilo-xw8-Df-YBa-Nb-Q-unsplash.jpg"
                className="h-80 object-cover dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h3 className="text-3xl font-bold">Craftsmanship Unleashed</h3>
                <p className="my-6 dark:text-gray-600">
                  Experience the pinnacle of artisanal mastery with our meticulously crafted treasures, designed to ignite your
                  imagination and inspire creativity.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
