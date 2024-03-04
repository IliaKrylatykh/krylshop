import { Brush, Instagram, Youtube } from "lucide-react";

export function SocialMedia() {
  return (
    <div className={"flex flex-col space-y-4"}>
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
          href="https://www.pinterest.com/horya2606/krylbrooch/"
          target="_blank"
          className="flex"
        >
          <Brush /> <span className="ml-2">Pinterest</span>
        </a>
      </div>
    </div>
  );
}
