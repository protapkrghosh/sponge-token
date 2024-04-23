import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "@/assets/banner/logo.png";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPosition = window.scrollY;

      const sections = [
        { id: "home", offset: 10 },
        { id: "about", offset: 100 },
        { id: "tokenomics", offset: 0 },
        { id: "buy", offset: 140 },
        { id: "roadmap", offset: 0 }
      ];

      let active = "home";
      sections.forEach(({ id, offset }) => {
        const section = document.getElementById(id);
        if (
          section.offsetTop - offset <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          active = id;
        }
      });
      setActiveLink(active);
    };

    window.addEventListener("scroll", changeActiveLink);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeActiveLink);
    };
  }, []);


  // Change color of navbar based on scroll position
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? 'sticky  bg-[#061944] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 shadow-sm navBg bg-[#061944] duration-300'}>
      <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-5'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className="cursor-pointer">
              <img src={logo} alt="Logo" className="w-[50px] mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#1e2b49]" /> : <IoMenu className="text-[#1e2b49]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[75px] opacity-100 bg-[#142141] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="home" smooth={true} offset={-70} duration={600} className={`2xl:text-[18px] font-poppins ml-5 md:ml-4 cursor-pointer ${activeLink === "home" ? 'text-[#FDF44E]' : 'text-[#FFF] hover:text-[#FDF44E] duration-200'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="about" smooth={true} offset={-100} duration={600} className={`2xl:text-[18px] font-poppins duration-300 cursor-pointer ${activeLink === "about" ? 'text-[#FDF44E]' : 'text-[#FFF] hover:text-[#FDF44E] duration-200'}`} onClick={() => setActiveLink("about")}>About</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={0} duration={600} className={`2xl:text-[18px] font-poppins duration-300 cursor-pointer ${activeLink === "tokenomics" ? 'text-[#FDF44E]' : 'text-[#FFF] hover:text-[#FDF44E] duration-200'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <li>
                <Link to="buy" smooth={true} offset={-100} duration={600} className={`2xl:text-[18px] font-poppins duration-300 cursor-pointer ${activeLink === "buy" ? 'text-[#FDF44E]' : 'text-[#FFF] hover:text-[#FDF44E] duration-200'}`} onClick={() => setActiveLink("buy")}>How to buy</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={5} duration={600} className={`2xl:text-[18px] font-poppins duration-300 cursor-pointer  ${activeLink === "roadmap" ? 'text-[#FDF44E]' : 'text-[#FFF] hover:text-[#FDF44E] duration-200'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <div className="block md:hidden">
                <Link to="home" smooth={true} offset={-30} duration={600}>
                  <Button className="bg-[#061944] hover:bg-[#1c325f] text-[16px] font-TTRoundsNeue font-normal duration-300">Buy Now</Button>
                </Link>
              </div>
            </ul>

            <div className="md:block hidden">
              <Link to="home" smooth={true} offset={-30} duration={600}>
                <Button className="bg-[#061944] hover:bg-[#1c325f] text-[16px] font-TTRoundsNeue font-normal duration-300">Buy Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
