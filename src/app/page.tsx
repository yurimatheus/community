import { SiteBanner } from "@/components/(site)/Banner";
import { SiteHeader } from "@/components/(site)/Header";
import { SiteFooter } from "@/components/(site)/Footer";
import { SitePlans } from "@/components/(site)/Plans";
import { SiteCta } from "@/components/(site)/Cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <SiteBanner />
      <SitePlans />
      <SiteCta />
      <SiteFooter />
    </>
  );
}
