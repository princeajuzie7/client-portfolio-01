import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="items-center"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <Icon
        className="h-7 w-7 text-gray-900"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 mt-4 text-5xl"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {count}
      </Typography>
      <Typography
        variant="h6"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="mb-2 font-normal text-blue-gray-500"
      >
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
