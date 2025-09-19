// app/components/Button.tsx
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { Button } from "../../.storyblok/types/286835241802704/storyblok-components.d.ts";

// --- BẮT ĐẦU CẬP NHẬT ---

// 1. Mở rộng colorMap để xử lý nhiều trường hợp hơn
const colorMap = {
  // Màu dùng cho background
  white: { bg: "bg-white", text: "text-white", border: "border-gray-300" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
  green: {
    bg: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500",
  },

  // Màu dùng cho text
  "primary-dark": { text: "text-gray-800" }, // Định nghĩa cho "primary-dark"
  black: { text: "text-black" },
};

const sizeMap = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4",
  large: "py-3 px-6 text-lg",
};

const Button = ({ blok }: { blok: Button }) => {
  // Lấy ra các giá trị, có giá trị mặc định an toàn
  const style = blok.style || "default";
  const bgColorName = blok.background_color || "blue"; // Mặc định là 'blue' nếu không có
  const textColorName = blok.text_color || "white"; // Mặc định là 'white' nếu không có

  const bgColor = colorMap[bgColorName];
  const textColor = colorMap[textColorName];
  const sizeClass = sizeMap[blok.size] || sizeMap.medium;

  let styleClasses = "";

  // 2. Logic cho từng style của button
  if (style === "ghost") {
    // Button "ma" (chỉ có text và viền)
    styleClasses = `border-2 ${bgColor.border} ${bgColor.text} hover:bg-opacity-10`;
  } else {
    // Mặc định là "default" (nền đặc)
    styleClasses = `${bgColor.bg} ${textColor.text} hover:opacity-90`;

    // 3. Thêm logic: nếu nền trắng, thêm viền để không bị chìm
    if (bgColorName === "white") {
      styleClasses += ` border ${bgColor.border}`;
    }
  }

  const className = `font-bold rounded-lg transition-colors inline-block ${sizeClass} ${styleClasses}`;

  // --- KẾT THÚC CẬP NHẬT ---

  return (
    <div {...storyblokEditable(blok)} className={className}>
      <Link href={blok.link?.cached_url || "/"}>{blok.label}</Link>
    </div>
  );
};

export default Button;
