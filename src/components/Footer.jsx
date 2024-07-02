import React, { useRef } from "react";
import { Linkedin, Github, Twitter, LayoutDashboard } from "lucide-react";
import MagneticButtonFramer from "./MagneticButtonFramer";
import StickyCursor from "./StickyCursor";

const Footer = () => {
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="p-12">
      <StickyCursor stickyElement={linkRef1} hoverSize={60} />
      <StickyCursor stickyElement={linkRef2} hoverSize={60} />
      <StickyCursor stickyElement={linkRef3} hoverSize={60} />
      <StickyCursor stickyElement={linkRef4} hoverSize={60} />
      <div className="flex flex-col justify-center items-center gap-10">
        <MagneticButtonFramer>
          <div
            className="h-14 w-14 cursor-pointer pointer-events-none relative"
            onClick={() => openLink("https://github.com/priyanshugarg1010")}
          >
            <Github
              ref={linkRef1}
              className="p-4 hover:fill-primaryBG fill-creamText stroke-creamText hover:stroke-primaryBG ease-in-out duration-200 transition w-full h-full pointer-events-auto hover:scale-125"
            />
          </div>
        </MagneticButtonFramer>

        <MagneticButtonFramer>
          <div
            className="h-14 w-14 cursor-pointer pointer-events-none relative"
            onClick={() =>
              openLink("https://www.linkedin.com/in/priyanshu-garg-66729622a/")
            }
          >
            <Linkedin
              ref={linkRef2}
              className="p-4 hover:fill-primaryBG fill-creamText stroke-creamText hover:stroke-primaryBG ease-in-out duration-200 transition w-full h-full pointer-events-auto hover:scale-125"
            />
          </div>
        </MagneticButtonFramer>

        <MagneticButtonFramer>
          <div
            className="h-14 w-14 cursor-pointer pointer-events-none relative"
            onClick={() => openLink("https://twitter.com/priyanshu__garg")}
          >
            <Twitter
              ref={linkRef3}
              className="p-4 hover:fill-primaryBG fill-creamText stroke-creamText hover:stroke-primaryBG ease-in-out duration-200 transition w-full h-full pointer-events-auto hover:scale-125"
            />
          </div>
        </MagneticButtonFramer>

        <MagneticButtonFramer>
          <div
            className="h-14 w-14 cursor-pointer pointer-events-none relative"
            onClick={() => openLink("https://bento.me/priyanshugarg")}
          >
            <LayoutDashboard
              ref={linkRef4}
              className="p-4 hover:fill -primaryBG fill-c reamText stroke-creamText hover:stroke-primaryBG ease-in-out duration-200 transition w-full h-full pointer-events-auto hover:scale-125"
            />
          </div>
        </MagneticButtonFramer>
      </div>
    </footer>
  );
};

export default Footer;
