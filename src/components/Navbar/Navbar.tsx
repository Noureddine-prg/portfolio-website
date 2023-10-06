import { motion } from "framer-motion";

export default function Navbar(props: any) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <motion.div
      className=" text-white pb-6 border-b-2 border-white mb-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="font-semibold flex flex-row">
          <img
            src="/landscape3.png"
            alt="Main Image"
            className="w-12 h-12 rounded-3xl object-cover object-center mr-[10px] border"
          />

          <div className="flex flex-col">
            <span className="text-xl">Noureddine Sidi Abed</span>
            <span className="text-sm">Full-Stack Software Developer</span>
          </div>
        </div>

        <ul className="flex text-3xl space-x-6 font-semibold">
          <li>
            <a href="/" className="hover:text-gray-400 transition duration-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-400 transition duration-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="hover:text-gray-400 transition duration-500"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-400 transition duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
