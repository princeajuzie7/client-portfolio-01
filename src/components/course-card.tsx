import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
  price: string;
}

declare module "@material-tailwind/react"{
  interface CardHeaderProps{
    placeholder?: string;
  }
}
export function CourseCard({ img, tag, title, desc, label, price }: CourseCardProps) {
  return (
    <Card className="border w-fit">
      <CardHeader className="h-64   ">
        <Image
          width={900}
          height={768}
          src={img}
          alt={title}
          className="h-full w-fit px-4 py-0 object-contain scale-[1.1]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
    <Typography className="flex items-center gap-2 justify-between">

        <Typography className="flex items-center flex-col ">

          
        <p>normal price</p>
        <Button variant="outlined" className="line-through cursor-default">{label}</Button>
        </Typography>
        <Typography className="flex items-center flex-col">

          
        <p>Slash Price</p>
        <Button variant="outlined" className=" cursor-default">{price}</Button>
        </Typography>
    </Typography>
      <h2 className="text-center mt-5">Hurry up! Limited-time offer 🎉.</h2>
      </CardBody>
    </Card>
  );
}

export default CourseCard;