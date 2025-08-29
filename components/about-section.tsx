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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Мы создали современную клинику, где каждый пациент получает индивидуальный подход и качественное лечение в
              комфортной обстановке.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/modern-dental-reception-area-with-comfortable-se.png"
                    alt="Reception area"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/dental-consultation-room-with-modern-equipment.png"
                    alt="Consultation room"
                    className="w-full h-32 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 mt-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/sterilization-room-in-dental-clinic--clean-and-.png"
                    alt="Sterilization room"
                    className="w-full h-32 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/dental-x-ray-room-with-modern-digital-equipment.png"
                    alt="X-ray room"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
