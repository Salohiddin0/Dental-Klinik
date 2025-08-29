"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AppointmentSection() {
  const { t, language } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const services = [
    { value: "consultation", label: language === "ru" ? "Консультация" : "Konsultatsiya" },
    { value: "treatment", label: language === "ru" ? "Лечение зубов" : "Tish davolash" },
    { value: "implants", label: language === "ru" ? "Имплантация" : "Implantatsiya" },
    { value: "whitening", label: language === "ru" ? "Отбеливание" : "Oqartirish" },
    { value: "orthodontics", label: language === "ru" ? "Ортодонтия" : "Ortodontiya" },
    { value: "cleaning", label: language === "ru" ? "Профессиональная чистка" : "Professional tozalash" },
    { value: "emergency", label: language === "ru" ? "Экстренная помощь" : "Shoshilinch yordam" },
  ]

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      })

      if (response.ok) {
        toast({
          title: language === "ru" ? "Заявка отправлена!" : "Ariza yuborildi!",
          description:
            language === "ru"
              ? "Мы свяжемся с вами в ближайшее время для подтверждения записи."
              : "Yozilishni tasdiqlash uchun tez orada siz bilan bog'lanamiz.",
        })
        setFormData({
          name: "",
          phone: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: language === "ru" ? "Ошибка отправки" : "Yuborishda xatolik",
        description:
          language === "ru"
            ? "Попробуйте еще раз или позвоните нам напрямую."
            : "Yana urinib ko'ring yoki to'g'ridan-to'g'ri qo'ng'iroq qiling.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <section id="appointment" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("appointment.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "ru"
              ? "Заполните форму ниже, и мы свяжемся с вами для подтверждения записи"
              : "Quyidagi formani to'ldiring, biz siz bilan bog'lanib, yozilishni tasdiqlaymiz"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{language === "ru" ? "Запись на прием" : "Qabulga yozilish"}</span>
                  </CardTitle>
                  <CardDescription>
                    {language === "ru"
                      ? "Заполните все обязательные поля для записи"
                      : "Yozilish uchun barcha majburiy maydonlarni to'ldiring"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-primary" />
                          <span>
                            {t("appointment.name")} <span className="text-destructive">*</span>
                          </span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={language === "ru" ? "Введите ваше полное имя" : "To'liq ismingizni kiriting"}
                          required
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>
                            {t("appointment.phone")} <span className="text-destructive">*</span>
                          </span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+998_"
                          required
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        {language === "ru" ? "Выберите услугу" : "Xizmatni tanlang"}{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={language === "ru" ? "Выберите нужную услугу" : "Kerakli xizmatni tanlang"}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">{language === "ru" ? "Предпочтительная дата" : "Afzal sana"}</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          min={getTomorrowDate()}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">{language === "ru" ? "Предпочтительное время" : "Afzal vaqt"}</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={language === "ru" ? "Выберите время" : "Vaqtni tanlang"} />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>{language === "ru" ? "Дополнительная информация" : "Qo'shimcha ma'lumot"}</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={
                          language === "ru"
                            ? "Опишите ваши симптомы или особые пожелания..."
                            : "Simptomlaringiz yoki maxsus istaklaringizni tasvirlab bering..."
                        }
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full transition-all duration-300 hover:scale-[1.02]"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" />
                          <span className="ml-2">{language === "ru" ? "Отправляем..." : "Yuborilmoqda..."}</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4 mr-2" />
                          {t("appointment.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{language === "ru" ? "Информация о записи" : "Yozilish haqida ma'lumot"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ru" ? "Быстрое подтверждение" : "Tez tasdiqlash"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ru" ? "Ответим в течение 15 минут" : "15 daqiqa ichida javob beramiz"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ru" ? "Гибкое расписание" : "Moslashuvchan jadval"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ru" ? "Работаем 7 дней в неделю" : "Haftada 7 kun ishlaymiz"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ru" ? "Бесплатная консультация" : "Bepul konsultatsiya"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ru" ? "Первичный осмотр бесплатно" : "Dastlabki ko'rik bepul"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <span>{language === "ru" ? "Экстренные случаи" : "Shoshilinch holatlar"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ru"
                      ? "При острой боли звоните напрямую:"
                      : "Kuchli og'riq bo'lsa to'g'ridan-to'g'ri qo'ng'iroq qiling:"}
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                   +998 90 111 22 33
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
