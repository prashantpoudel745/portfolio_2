import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded h-2 overflow-hidden ${className}`}
    >
      <div
        className="bg-blue-600 h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
