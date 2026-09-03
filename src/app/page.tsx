import { Hero } from "@/components/sections/Hero";
import { VerseBand } from "@/components/sections/VerseBand";
import { LocationsBand } from "@/components/sections/LocationsBand";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { DonateCta } from "@/components/sections/DonateCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VerseBand slug="masjid-maintain" />
      <LocationsBand />
      <ProgramsPreview />
      <EventsPreview />
      <DonateCta />
    </>
  );
}
