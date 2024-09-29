import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../../../../../../public';

const PostImages = () => {
    return (
        <div className="flex gap-3 border-b pb-3 mt-3">
        <Image
              src={IMAGES.img1}
              width={100}
              height={100}
              alt="img1"
              className="w-full rounded-md"
            />

            <div className="flex flex-col gap-3 w-full">
            <Image
              src={IMAGES.img2}
              width={100}
              height={100}
              alt="img1"
              className="w-full rounded-md"
            />
            <Image
              src={IMAGES.img3}
              width={100}
              height={100}
              alt="img1"
              className="w-full rounded-md"
            />
            </div>
        </div>
    );
};

export default PostImages;