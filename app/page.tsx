import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AppointmentSection } from "@/components/appointment-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ReviewsSection />
        <AppointmentSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
