import { AboutHero } from "@/components/modules/aboutPage/AboutHero";
import { AboutStory } from "@/components/modules/aboutPage/AboutStory";
import { AboutJourney } from "@/components/modules/aboutPage/AboutJourney";
import { AboutSecurity } from "@/components/modules/aboutPage/AboutSecurity";
import { AboutValues } from "@/components/modules/aboutPage/AboutValues";
import { AboutCTA } from "@/components/modules/aboutPage/AboutCTA";
import { AboutTeam } from "@/components/modules/aboutPage/AboutTeam";

export default function AboutPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <AboutHero />
      <AboutStory />
      <AboutJourney />
      <AboutSecurity />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
