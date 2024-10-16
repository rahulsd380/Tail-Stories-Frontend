import Button from "@/components/Reusable/Button";
import Link from "next/link";
import { IMAGES } from "../../../../../../public";
import Image from "next/image";
import Container from "@/components/Container/Container";


const AboutUsHero = () => {
    return (
      <Container>
        <div className="bg-gradient-to-r from-fuchsia-50 to-purple-100 shadow px-14 py-10 rounded-xl font-Lato">
            <h1 className="bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-transparent text-2xl md:text-4xl xl:text-6xl font-semibold max-w-full md:max-w-[600px] mx-auto text-center">We are changing the whole world</h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-7 mt-10">
            <Link href={"/"}>
              <Button variant="primary" classNames="rounded-3xl">Get Started Today</Button>
            </Link>
            <Link href={"/"}>
              <Button variant="bordered" classNames="rounded-3xl">Contact With Us</Button>
            </Link>
          </div>

          <div className="max-w-[200px] md:max-w-[500px] mx-auto flex items-center justify-center mt-5">
          <Image
          src={IMAGES.team}
          
    quality={100}
          className="object-cover object-center rounded-lg max-w-[200px] md:max-w-[500px]"
          alt="team"
          />
          </div>
        </div>
        </Container>
    );
};

export default AboutUsHero;