import { LogoIcon } from "@/shared/ui/logo-icon";
import { Brush, Instagram, Youtube } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="space-y-6 py-14 container  max-w-[600px]">
      <p className="mb-10">
        Hello! This site is made to promote the creativity of Krylbrooch
      </p>
      <p className="mb-10">
        You can find out more about it using the links below.
      </p>

      <div>
        <a
          href="https://www.instagram.com/krylbrooch"
          target="_blank"
          className="flex"
        >
          <Instagram />
          <span className="ml-2">Instagram</span>
        </a>
      </div>

      <div>
        <a
          href="https://www.youtube.com/channel/UCp9rw9kA3x05az2m-66twUQ"
          target="_blank"
          className="flex"
        >
          <Youtube /> <span className="ml-2">YouTube</span>
        </a>
      </div>

      <div>
        <a
          href="https://www.pinterest.com/horya2606"
          target="_blank"
          className="flex"
        >
          <Brush /> <span className="ml-2">Pinterest</span>
        </a>
      </div>

      <p className="mb-10">Thank you!</p>

      <LogoIcon />
    </main>
  );
}
