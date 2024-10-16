import { IMAGES } from "../../../../../../public";
import Image from "next/image";


const OurVision = () => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
             <div className="max-w-[400px]">
          <Image
          src={IMAGES.vision}
          
    quality={100}
          className="object-cover object-center rounded-lg max-w-[400px]"
          alt="team"
          />
          </div>
            <div>
                <h1 className="text-5xl font-bold">Our Vision</h1>
                <p className="mt-5 max-w-[400px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis cupiditate ut neque omnis quasi deleniti, repudiandae animi temporibus reiciendis odit praesentium numquam fugiat, optio architecto culpa eius quaerat dolorem?</p>
                <p className="mt-3 max-w-[400px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis cupiditate ut neque omnis quasi deleniti, repudiandae animi temporibus.</p>
                <p className="mt-3 max-w-[400px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis cupiditate ut neque omnis quasi deleniti, repudiandae animi temporibus.</p>
            </div>
        </div>
    );
};

export default OurVision;