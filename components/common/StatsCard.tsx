import { Stats } from "@/types/types";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  stat: Stats;
};

const colorMap: Record<string, string> = {
  purple: "text-purple-600",
  pink: "text-pink-600",
  blue: "text-blue-600",
  green: "text-green-600",
};

const StatsCard = ({ stat }: Props) => {
  return (
    <div className="text-center">
      <div
        className={cn("text-3xl md:text-4xl font-bold mb-2", colorMap[stat.color] ?? "text-primary")}
      >
        {stat.number}
      </div>
      <div className="text-muted-foreground">{stat.category}</div>
    </div>
  );
};

export default StatsCard;
