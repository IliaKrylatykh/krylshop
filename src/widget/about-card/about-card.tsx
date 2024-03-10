import { Description } from "./_ui/description";
import { Header } from "./_ui/header";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { SocialMedia } from "./_ui/social-media";

export function AboutCard() {
  return (
    <Layout
      header={<Header />}
      description={<Description />}
      socials={<SocialMedia />}
      logo={<Logo />}
    />
  );
}
