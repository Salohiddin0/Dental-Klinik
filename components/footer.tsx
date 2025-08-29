"use client"

import { useLanguage } from "@/components/language-provider"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DC</span>
              </div>
              <span className="font-bold text-lg text-card-foreground">
                {language === "ru" ? "Дентал Клиник" : "Dental Klinik"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === "ru"
                ? "Современная стоматологическая клиника в Алматы с профессиональным подходом к лечению."
                : "Almaty shahridagi zamonaviy stomatologiya klinikasi davolashga professional yondashuv bilan."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">{language === "ru" ? "Навигация" : "Navigatsiya"}</h3>
            <ul className="space-y-2">
              {[
                { key: "nav.home", href: "#home" },
                { key: "nav.services", href: "#services" },
                { key: "nav.team", href: "#team" },
                { key: "nav.reviews", href: "#reviews" },
                { key: "nav.contacts", href: "#contacts" },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {[
                language === "ru" ? "Лечение зубов" : "Tish davolash",
                language === "ru" ? "Имплантация" : "Implantatsiya",
                language === "ru" ? "Отбеливание" : "Oqartirish",
                language === "ru" ? "Ортодонтия" : "Ortodontiya",
                language === "ru" ? "Детская стоматология" : "Bolalar stomatologiyasi",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">{t("footer.contacts")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {language === "ru" ? "г. Алматы, ул. Абая 150/230" : "Almaty sh., Abay ko'ch. 150/230"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+7 (727) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@dentalclinic.kz</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>{language === "ru" ? "Пн-Пт: 09:00-20:00" : "Du-Ju: 09:00-20:00"}</div>
                  <div>{language === "ru" ? "Сб-Вс: 09:00-18:00" : "Sh-Ya: 09:00-18:00"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {language === "ru" ? "Дентал Клиник" : "Dental Klinik"}.{" "}
            {language === "ru" ? "Все права защищены." : "Barcha huquqlar himoyalangan."}
          </p>
        </div>
      </div>
    </footer>
  )
}
