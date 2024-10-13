import Image from 'next/image';
import React from 'react';

type TPostImagesProps = {
  images: string[];
};

const PostImages:React.FC<TPostImagesProps> = ({ images }) => {
  if (images?.length === 1) {
    return (
      <div className="flex gap-3 border-b pb-3 mt-3">
        <Image
          src={images[0]}
          width={100}
          height={100}
          alt="single-img"
          className="w-full rounded-md"
        />
      </div>
    );
  }

  if (images?.length === 2) {
    return (
      <div className="flex gap-3 border-b pb-3 mt-3">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={100}
            height={100}
            alt={`image-${index}`}
            className="w-1/2 rounded-md"
          />
        ))}
      </div>
    );
  }

  if (images?.length >= 3) {
    const moreCount = images.length - 3;

    return (
      <div className="flex gap-3 border-b pb-3 mt-3">
        <Image
          src={images[0]}
          width={100}
          height={100}
          alt="first-img"
          className="w-full rounded-md"
        />
        <div className="flex flex-col gap-3 w-full relative">
          <Image
            src={images[1]}
            width={100}
            height={100}
            alt="second-img"
            className="w-full rounded-md"
          />
          <div className="relative w-full">
            <Image
              src={images[2]}
              width={100}
              height={100}
              alt="third-img"
              className="w-full rounded-md"
            />
            {moreCount > 0 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-md">
                <span className="text-white font-medium">+{moreCount} more</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PostImages;
