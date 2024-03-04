import AboutBird from "@/shared/images/about-bird.jpg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative w-full h-64">
      <Image
        src={AboutBird}
        alt="about-bird-image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
