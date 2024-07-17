"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useRef } from "react";

const VideoPlayer = ({ mediaUrl }: { mediaUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  interface VideoRefinterface {
    videoRef: {};
  }

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        width="500"
        height="100"
        loop
        autoPlay
        playsInline
        className="object-cover rounded-lg"
        controls={false}
      >
        <source src={mediaUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center mt-20 justify-center ">
        {/* Add custom controls here */}
        {isPlaying ? (
          <FaPause
            onClick={togglePlay}
            className="text-white/40 hover:text-white/70 text-[60px] cursor-pointer"
          />
        ) : (
          <FaPlay
            onClick={togglePlay}
            className="text-white/40 hover:text-white/70  text-[60px]  cursor-pointer"
          />
        )}
        {/* Custom volume control */}
      </div>
    </div>
  );
};
export default function CourseVideo() {
  return (
    <div>
      <div className="video-responsive flex flex-col items-center justify-center px-10 ">
        <div className="mb-20 grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="my-3">
            Your business is about to change forever!!
          </Typography>
          <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Get clarity on how to make massive income from your business.
The course explains practical ways and strategies to grow any business in any field.
Suitable for product and service based businesses online and offline.
          </Typography>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <VideoPlayer mediaUrl={"/video/cou.mp4"} />
        </div>
        {/* <video controls width="500" height="300">
  <source src="/video/cou.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
      </div>
    </div>
  );
}
