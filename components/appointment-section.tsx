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
    <section></section>
  )
}
