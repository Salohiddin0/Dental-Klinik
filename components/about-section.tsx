"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Award, Users, Clock, Shield } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: "Высокое качество",
      description: "Используем только проверенные материалы и современное оборудование",
    },
    {
      icon: Users,
      title: "Опытная команда",
      description: "Врачи с многолетним стажем и постоянным повышением квалификации",
    },
    {
      icon: Clock,
      title: "Удобное время",
      description: "Работаем 7 дней в неделю, включая выходные и праздники",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Соблюдаем все стандарты стерилизации и безопасности",
    },
  ]

  return (
    <section className="bg-background">
    </section>
  )
}
