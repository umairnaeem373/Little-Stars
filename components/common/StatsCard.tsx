import { Stats } from "@/types/types";
import React from "react";

type Props = {
  stat: Stats;
};

const StatsCard = ({ stat }: Props) => {
  return (
    <div className="text-center">
      <div
        className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}
      >
        {stat.number}
      </div>
      <div className="text-gray-600">{stat.category}</div>
    </div>
  );
};

export default StatsCard;
