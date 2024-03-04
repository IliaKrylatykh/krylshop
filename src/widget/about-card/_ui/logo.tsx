import AboutBird from "@/shared/images/about-bird.jpg";
import Image from "next/image";

export function Logo() {
  return (
    <div>
      <Image src={AboutBird} alt="about-bird-image" height={400} width={600} />
    </div>
  );
}
