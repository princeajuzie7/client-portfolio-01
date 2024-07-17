"use client"
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Others from '../../public/image/others.jpg'
export default function Finally() {
  return (
    <div>
      <div className="mb-20 mt-5 grid px-6 place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Meet Other  entrepreneurs 
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Meet other entrepreneurs and intending entrepreneurs like you in our
          support group. You will also get business updates from me and our team
          and business consultants. Click link to join group.
        </Typography>

        <div className="flex items-center justify-center mt-9">
          <Image src={Others} height={200} width={200} alt="other enterprenuer" className="h-[50vh] w-full object-cover rounded-lg"  />
        </div>
      </div>
    </div>
  );
}
