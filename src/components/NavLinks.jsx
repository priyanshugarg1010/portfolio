import { motion } from "framer-motion";

export const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
  {
    title: "Expertise",
    href: "/",
  },
  {
    title: "Careers",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/priyanshugarg1010",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshu-garg-66729622a/",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/priyanshu__garg",
  },
  {
    title: "Bento",
    href: "https://bento.me/priyanshugarg",
  },
];
export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const NavLinks = () => {
  return (
    <div className="flex flex-col justify-between box-border pt-[100px] px-10 pb-[50px] h-full">
      <div className="flex gap-2.5 flex-col">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className=""
              style={{ perspective: "120px", perspectiveOrigin: "bottom" }}
            >
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className=""
              >
                <a className="text-5xl text-black cursor-pointer">{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-1/2 mt-[5px] cursor-pointer"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NavLinks;
