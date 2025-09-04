// app/components/HeroSection.jsx
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function HeroSection({ blok }) {
  // `blok` là object chứa toàn bộ dữ liệu bạn đã gửi

  // Tạo style object để dễ dàng áp dụng các tùy chỉnh từ Storyblok
  const sectionStyle = {
    backgroundColor: blok.background_color,
    textAlign: blok.text_alignment,
  };

  return (
    // storyblokEditable(blok) rất quan trọng để có thể click và chỉnh sửa component trong Visual Editor của Storyblok
    <div
      {...storyblokEditable(blok)}
      style={sectionStyle}
      className={`hero-layout-${blok.layout}`}
    >
      <div className="hero-content">
        {/* Render eyebrow nếu có */}
        {blok.eyebrow && <p className="eyebrow">{blok.eyebrow}</p>}

        {/* Headline là một mảng các blok con, cần lặp qua để hiển thị */}
        <h1 className="headline">
          {blok.headline?.map((segment) => (
            <span key={segment._uid} style={{ color: segment.highlight }}>
              {segment.text}
            </span>
          ))}
        </h1>

        {/* Render text chính */}
        {blok.text && <p className="text">{blok.text}</p>}

        {/* Render các nút bấm (buttons) */}
        <div className="buttons-container">
          {blok.buttons?.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>

      {/* Render hình ảnh */}
      <div className="hero-image-container">
        {blok.image?.filename && (
          <img src={blok.image.filename} alt={blok.image.alt} />
        )}
      </div>
    </div>
  );
}
