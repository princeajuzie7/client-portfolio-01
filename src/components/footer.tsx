"use client"
import { Typography, Button, Input } from "@material-tailwind/react";
import Link from "next/link";

const LINKS = [
  {
    title: "Socials",
    items: [
      {
        title: "Facebook",
        url: "https://web.facebook.com/Team1000lives/?_rdc=1&_rdr",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/realfavourphilip/",
      },
      {
        title: "Tiktok",
        url: "https://www.tiktok.com/@realfavourphilip",
      },
      {
        title: "Telegram",
        url: "https://t.me/+uB2rVR9mGeRiMDg0",
      },
    ],
  },
];


const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
              
                {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map(({ title: linkTitle, url }) => (
                  <li key={linkTitle}>
                    <Link href={url} passHref>
                      <Typography
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                      >
                        {linkTitle}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}

              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with 💖 by {" "}
          <Link href="https://bio.link/princeaj" target="_blank" className="text-red-600 underline">
            @princeajuzie
          </Link>{" "}
      
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
