"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


declare module "@material-tailwind/react" {
  interface AvatarProps {
    placeholder?: string;
  }

}
function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card
          color="transparent"
          shadow={false}
          className=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardBody
            className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography
                variant="h6"
                color="blue"
                className="mb-4"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                ONLINE COURSE
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Full-Stack Web Development
              </Typography>
              <Typography
                className="mb-1 w-full font-normal !text-gray-500"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Become a versatile developer by combining frontend and backend
                skills. Build complete web applications from start to finish.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography
                    className="w-full font-normal !text-gray-500"
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    International course collection in 10 languages
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography
                    className="w-full font-normal !text-gray-500"
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Certified include
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="md"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-0.5"
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Otto Gonzalez
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Senior Designer @company.com
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
