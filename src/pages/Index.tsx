import CountdownHero from "@/components/CountdownHero";
import VideoSection from "@/components/VideoSection";
import ConceptGallery from "@/components/ConceptGallery";
import EmailCapture from "@/components/EmailCapture";
import SocialLinks from "@/components/SocialLinks";

export default function Index() {
  return (
    <main className="min-h-screen">
      <CountdownHero />
      <VideoSection />
      <ConceptGallery />
      <EmailCapture />
      <SocialLinks />

      <footer className="text-center py-6 text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-body">
        © 2026 WORLD CUP LOBSTER
      </footer>
    </main>
  );
}
