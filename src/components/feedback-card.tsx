import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

declare module "@material-tailwind/react"{
  interface RatingProps{
    placeholder?: string;
  }
}
export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card
      shadow={false}
      className="items-start text-left"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardBody
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Avatar
          src={img}
          className="mb-2"
          alt={client}
          size="xl"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
        <Typography
          variant="h6"
          color="blue-gray"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {client}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-normal"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-6 font-normal text-gray-500"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating
          value={5}
          readonly
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;