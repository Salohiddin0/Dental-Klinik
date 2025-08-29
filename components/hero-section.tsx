"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Play, ArrowRight } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [imageLoaded, setImageLoaded] = useState(false)

  const scrollToContacts = () => {
    const element = document.querySelector("#contacts")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-dental-office-interior-with-dental-chair-an.png"
          alt="Modern dental office"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in-up animation-delay-200">
                  {t("nav.services")} • {t("nav.team")}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight animate-fade-in-up animation-delay-400">
                  {t("hero.title")}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 text-pretty max-w-lg leading-relaxed animate-fade-in-up animation-delay-600">
                  {t("hero.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <Button
                  onClick={scrollToContacts}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-105"
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent backdrop-blur-sm group transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Видео о клинике
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 animate-fade-in-up animation-delay-1000">
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">Лет опыта</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    5000+
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">Пациентов</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">Довольных</div>
                </div>
              </div>
            </div>

            {/* Right Content - Additional Images */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-1200">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src="/dental-treatment-procedure--dentist-working-on-pat.png"
                      alt="Dental treatment"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src="/teeth-whitening-procedure--bright-white-smile.png"
                      alt="Teeth whitening"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src="/dental-implant-procedure--modern-dental-equipment.png"
                      alt="Dental implant"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src="/orthodontic-treatment--dental-braces--teeth-alignm.png"
                      alt="Orthodontic treatment"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up animation-delay-1400">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
