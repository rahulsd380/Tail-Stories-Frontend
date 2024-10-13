import Lottie from "lottie-react";
import contactUsAnimation from "../../../../../../public/assets/contact-us-animation.json";
import ContactUsForm from "./ContactUsForm";
import { ICONS } from "../../../../../../public";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="max-w-[1300px] mx-auto font-Lato mt-20 p-7 xl:p-0 ">
      <h1 className="text-5xl font-bold text-center dark:text-[#D9D9D9]/80 text-[#364F53]">
        Contact <span className="text-[#85A98D]">Us</span>
      </h1>
      <p className="max-w-[700px] mx-auto text-center mt-2 text-[#364F53] dark:text-[#D9D9D9]/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae culpa
        libero est fugit. Totam, molestias. Sapiente explicabo sunt{" "}
      </p>

      <div className="max-w-4xl mx-auto font-Roboto flex flex-col md:flex-row gap-10 bg-white dark:bg-[#E9ECF2]/10 shadow border rounded-xl p-5 md:p-10 mt-10">
        <div className="w-full flex flex-col gap-4">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-neutral-60 dark:text-[#D9D9D9]/80 text-[#364F53]">
              Get In <span className="text-[#85A98D]">Touch</span>
            </h1>
            <p className="text-neutral-60 text-[#364F53] dark:text-[#D9D9D9]/70">
              We are here for you! How can we assist you?
            </p>
          </div>

          {/* Contact Form */}
          <ContactUsForm />
        </div>

        <div className="w-full flex flex-col h-fit gap-8">
          {/* Animation */}
          <div className="max-w-[400px] mx-auto">
            <Lottie animationData={contactUsAnimation} loop={true} />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-base">
            <div className="flex items-center gap-2">
              <Image src={ICONS.location} alt="location-icon" className="size-5" />
              <p className="text-[#364F53] dark:text-[#D9D9D9]/70">
                Cumilla-3501, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ICONS.phone} alt="location-icon" className="size-5" />
              <a
                href="tel:+880 1608249337"
                className="text-[#364F53] dark:text-[#D9D9D9]/70 hover:underline"
              >
                +880 1608249337
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ICONS.email} alt="location-icon" className="size-5" />
              <p className="text-[#364F53] dark:text-[#D9D9D9]/70">
                rahulsd380@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
