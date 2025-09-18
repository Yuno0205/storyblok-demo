// components/Button.jsx
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

// Tạo một map để chuyển đổi giá trị từ Storyblok sang class Tailwind
// Cách này an toàn hơn, tránh việc tạo class động một cách không kiểm soát
const colorMap = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
  green: {
    bg: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500",
  },
  white: { text: "text-white" },
  black: { text: "text-black" },
  // Thêm các màu khác bạn định nghĩa trong Storyblok
};

const sizeMap = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4",
  large: "py-3 px-6 text-lg",
};

const Button = ({ blok }) => {
  // Lấy ra các giá trị, có thể có giá trị mặc định
  const style = blok.style || "solid";
  const bgColor = colorMap[blok.background_color] || colorMap.blue;
  const textColor = colorMap[blok.text_color] || colorMap.white;
  const sizeClass = sizeMap[blok.size] || sizeMap.medium;

  let styleClasses = "";
  if (style === "outline") {
    styleClasses = `border-2 ${bgColor.border} ${bgColor.text} hover:bg-opacity-10`;
  } else {
    // Mặc định là 'solid'
    styleClasses = `${bgColor.bg} ${textColor.text} hover:opacity-90`;
  }

  const className = `font-bold rounded-lg transition ${sizeClass} ${styleClasses}`;

  return (
    <Link href={blok.link?.cached_url || "/"}>
      <a {...storyblokEditable(blok)} className={className}>
        {blok.label}
      </a>
    </Link>
  );
};

export default Button;
