"use client"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

export function ReviewsSection() {
  const { t, language } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: language === "ru" ? "Анора Собирова" : "Anora Sobirova",
      service: language === "ru" ? "Имплантация зубов" : "Tish implantatsiyasi",
      rating: 5,
      date: language === "ru" ? "2 недели назад" : "2 hafta oldin",
      text:
        language === "ru"
          ? "Отличная клиника! Доктор Петров провел имплантацию на высшем уровне. Все прошло безболезненно, персонал очень внимательный. Рекомендую всем!"
          : "Ajoyib klinika! Doktor Petrov implantatsiyani eng yuqori darajada o'tkazdi. Hammasi og'riqsiz o'tdi, xodimlar juda e'tiborli. Hammaga tavsiya qilaman!",
      avatar: "/patient-testimonial-photo--happy-female-patient.png",
      verified: true,
    },
    {
      name: language === "ru" ? "Азамат Собиров" : "Azamat Sobirov",
      service: language === "ru" ? "Лечение кариеса" : "Karies davolash",
      rating: 5,
      date: language === "ru" ? "1 месяц назад" : "1 oy oldin",
      text:
        language === "ru"
          ? "Очень доволен лечением! Современное оборудование, профессиональный подход. Зуб вылечили за один визит, никакой боли не было."
          : "Davolashdan juda mamnunman! Zamonaviy jihozlar, professional yondashuv. Tishni bir tashrif bilan davolab berishdi, hech qanday og'riq bo'lmadi.",
      avatar: "/patient-testimonial-photo--satisfied-male-patient.png",
      verified: true,
    },
    {
      name: language === "ru" ? "Нигина Муродова" : "Nigina Murodova",
      service: language === "ru" ? "Отбеливание зубов" : "Tish oqartirish",
      rating: 5,
      date: language === "ru" ? "3 недели назад" : "3 hafta oldin",
      text:
        language === "ru"
          ? "Результат превзошел все ожидания! Зубы стали на 6 тонов светлее. Процедура комфортная, персонал дружелюбный. Спасибо большое!"
          : "Natija barcha kutishlardan oshib ketdi! Tishlar 6 tonga yorqinroq bo'ldi. Protsedura qulay, xodimlar do'stona. Katta rahmat!",
      avatar: "/patient-testimonial-photo--smiling-woman-after-tr.png",
      verified: true,
    },
    {
      name: language === "ru" ? "Абдурахмон Мирмахсудов" : "Abdurahmon Mirmaxsudov",
      service: language === "ru" ? "Установка брекетов" : "Breket o'rnatish",
      rating: 5,
      date: language === "ru" ? "2 месяца назад" : "2 oy oldin",
      text:
        language === "ru"
          ? "Доктор Козлов - настоящий профессионал! Подробно объяснил план лечения, брекеты поставили аккуратно. Уже вижу первые результаты."
          : "Doktor Kozlov - haqiqiy professional! Davolash rejasini batafsil tushuntirdi, breketlarni ehtiyotkorlik bilan o'rnatdi. Birinchi natijalarni allaqachon ko'ryapman.",
      avatar: "/patient-testimonial-photo--young-man-with-braces.png",
      verified: true,
    },
    {
      name: language === "ru" ? "Mахлиё Абдуллаева" : "Mahliyo Abdullayeva",
      service: language === "ru" ? "Детская стоматология" : "Bolalar stomatologiyasi",
      rating: 5,
      date: language === "ru" ? "1 неделя назад" : "1 hafta oldin",
      text:
        language === "ru"
          ? "Привела дочку к доктору Смирновой. Ребенок не боялся, врач нашла подход. Зуб вылечили быстро и качественно. Очень благодарны!"
          : "Qizimni doktor Smirnovaga olib bordim. Bola qo'rqmadi, shifokor yondashuvni topdi. Tishni tez va sifatli davolab berishdi. Juda minnatdormiz!",
      avatar: "/patient-testimonial-photo--mother-with-child-happ.png",
      verified: true,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("reviews.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "ru"
              ? "Отзывы наших пациентов - лучшая оценка нашей работы"
              : "Bemorlarimizning sharhlari - bizning ishimizning eng yaxshi bahosi"}
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="text-center pb-4">
              <Quote className="h-12 w-12 text-green-500/30 mx-auto mb-4" />
              <div className="flex justify-center mb-2">{renderStars(reviews[currentReview].rating)}</div>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                "{reviews[currentReview].text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={reviews[currentReview].avatar || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                  />
                  <AvatarFallback>{reviews[currentReview].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold text-foreground">{reviews[currentReview].name}</p>
                    {reviews[currentReview].verified && (
                      <Badge variant="secondary" className="text-xs">
                        {language === "ru" ? "Проверено" : "Tasdiqlangan"}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{reviews[currentReview].service}</p>
                  <p className="text-xs text-muted-foreground">{reviews[currentReview].date}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? "bg-green-500" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed mb-4">"{review.text}"</CardDescription>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback className="text-xs">{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-medium text-foreground">{review.name}</p>
                      {review.verified && (
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{review.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
