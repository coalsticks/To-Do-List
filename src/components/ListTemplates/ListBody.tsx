import React from "react";

export const ListBody = ({
  title,
  ActiveItem,
  status,
}: {
  title: string;
  ActiveItem: boolean;
  status: string;
}) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-start">
        <h1 className="text-md">{title}</h1>
      </div>
      <div className="h-full border-2"></div>
    </div>
  );
};
