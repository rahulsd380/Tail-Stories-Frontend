import Link from "next/link";
import { IMAGES } from "../../../../../public";

const AboutUsHero = () => {
  return (
    <div className="relative dark:bg-[#2f3d46] bg-teal-50 mt-5 font-SpaceGrotesk">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${IMAGES.aboutUsBgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-10">
        <div className="flex items-center gap-3 text-[#364F53] dark:text-[#D9D9D9]/50">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <p>-</p>
          <p>About Us</p>
        </div>
        <h1 className="text-5xl font-bold mt-4 dark:text-[#D9D9D9]/80 text-[#364F53]">
          About Us
        </h1>
        <p className="max-w-[700px] mt-2 text-[#364F53] dark:text-[#D9D9D9]/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
          culpa libero est fugit. Totam, molestias. Sapiente explicabo sunt
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sed,
          blanditiis harum hic autem sit facilis quam nesciunt ipsa culpa.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHero;
