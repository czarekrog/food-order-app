import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

export const RestaurantListItem = ({ id }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col rounded-b-lg cursor-pointer hover:bg-gray-100"
      onClick={() => navigate(`restaurant/${id}`)}
    >
      <img
        src="https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg"
        alt="Restaurant"
        className="max-h-48 object-cover rounded-sm"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <span className="text-2xl">Restaurant Name</span>
          <div className="bg-gray-200 flex justify-center items-center p-2 rounded-full font-bold">
            4.6
          </div>
        </div>
        <span>Delivery: $2.99 · 15-25mins</span>
      </div>
    </div>
  );
};
