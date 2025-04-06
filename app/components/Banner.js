import React from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { Button } from "./ui/button/button";
const ICON_COLOR = '#FF1744'
const ICON_SIZE = 40
const Banner = ({ message, actionText, onAction }) => {
  return (
    <div className="mt-4 w-full rounded shadow bg-gradient-to-r from-[#dec9b5] via-[#FFFAF0] to-[#FFFAF0] text-primary-text px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <HiSpeakerphone className="text-2xl" color={ICON_COLOR} size={ICON_SIZE} />
        <p className="text-sm md:text-base font-medium">{message}</p>
      </div>
      {actionText && (
        <Button
        inverse
          onClick={onAction}
          className="bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default Banner;
