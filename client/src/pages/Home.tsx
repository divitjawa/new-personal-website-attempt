import VideoBackground from "@/components/VideoBackground";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />
      <div className="container py-20 space-y-12">
        <div className="h-14" /> {/* Navigation offset */}
        <Profile />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
