"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { LoadingSpinner } from "./loading-spinner" // Import LoadingSpinner component

type Language = "ru" | "uz"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.team": "Команда",
    "nav.reviews": "Отзывы",
    "nav.contacts": "Контакты",

    // Hero section
    "hero.title": "СТОМАТОЛОГИЧЕСКАЯ КЛИНИКА В АЛМАТЫ",
    "hero.subtitle": "Современное оборудование и профессиональный подход к лечению",
    "hero.cta": "Записаться на приём",

    // Services
    "services.title": "Наши услуги",
    "services.treatment": "Лечение зубов",
    "services.implants": "Имплантация",
    "services.whitening": "Отбеливание",
    "services.orthodontics": "Ортодонтия",

    // Team
    "team.title": "Наша команда",
    "team.subtitle": "Опытные специалисты с многолетним стажем",

    // Reviews
    "reviews.title": "Отзывы пациентов",

    // Contacts
    "contacts.title": "Контакты",
    "contacts.address": "Адрес",
    "contacts.phone": "Телефон",
    "contacts.email": "Email",

    // Appointment form
    "appointment.title": "Записаться на приём",
    "appointment.name": "Ваше имя",
    "appointment.phone": "Номер телефона",
    "appointment.submit": "Отправить",
    "appointment.success": "Заявка отправлена!",

    // Footer
    "footer.about": "О клинике",
    "footer.services": "Услуги",
    "footer.contacts": "Контакты",

    // Common
    "common.loading": "Загрузка...",
    "common.error": "Произошла ошибка",
    "common.success": "Успешно!",
    "common.close": "Закрыть",
    "common.cancel": "Отмена",
    "common.confirm": "Подтвердить",
  },
  uz: {
    // Navigation
    "nav.home": "Bosh sahifa",
    "nav.services": "Xizmatlar",
    "nav.team": "Jamoa",
    "nav.reviews": "Sharhlar",
    "nav.contacts": "Kontaktlar",

    // Hero section
    "hero.title": "ALMATY SHAHRIDAGI STOMATOLOGIYA KLINIKASI",
    "hero.subtitle": "Zamonaviy jihozlar va davolashga professional yondashuv",
    "hero.cta": "Qabulga yozilish",

    // Services
    "services.title": "Bizning xizmatlarimiz",
    "services.treatment": "Tish davolash",
    "services.implants": "Implantatsiya",
    "services.whitening": "Oqartirish",
    "services.orthodontics": "Ortodontiya",

    // Team
    "team.title": "Bizning jamoa",
    "team.subtitle": "Ko'p yillik tajribaga ega mutaxassislar",

    // Reviews
    "reviews.title": "Bemorlar sharhlari",

    // Contacts
    "contacts.title": "Kontaktlar",
    "contacts.address": "Manzil",
    "contacts.phone": "Telefon",
    "contacts.email": "Email",

    // Appointment form
    "appointment.title": "Qabulga yozilish",
    "appointment.name": "Ismingiz",
    "appointment.phone": "Telefon raqami",
    "appointment.submit": "Yuborish",
    "appointment.success": "Ariza yuborildi!",

    // Footer
    "footer.about": "Klinika haqida",
    "footer.services": "Xizmatlar",
    "footer.contacts": "Kontaktlar",

    // Common
    "common.loading": "Yuklanmoqda...",
    "common.error": "Xatolik yuz berdi",
    "common.success": "Muvaffaqiyatli!",
    "common.close": "Yopish",
    "common.cancel": "Bekor qilish",
    "common.confirm": "Tasdiqlash",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "uz")) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    // Update document language
    document.documentElement.lang = lang === "ru" ? "ru" : "uz"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["ru"]] || key
  }

  // Show loading state while checking localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
