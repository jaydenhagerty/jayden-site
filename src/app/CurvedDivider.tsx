import React from "react";

interface CurvedDividerProps {
  svgPath?: string;
  bgColor?: string;
  fillColor?: string;
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({
  svgPath = "M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z",
  bgColor = "bg-forest-900",
  fillColor = "var(--color-forest-800)",
}) => {
  return (
    <div>
      <svg
        className={`w-full h-auto ${bgColor}`}
        viewBox="0 0 1440 190"
        preserveAspectRatio="none"
      >
        <path d={svgPath} fill={fillColor} />
      </svg>
    </div>
  );
};

export default CurvedDivider;
