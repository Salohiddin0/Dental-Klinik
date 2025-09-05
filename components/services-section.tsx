'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/language-provider'
import {
  Bluetooth as Tooth,
  Zap,
  Smile,
  Braces,
  Clock,
  DollarSign
} from 'lucide-react'

export function ServicesSection () {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Tooth,
      title: t('services.treatment'),
      description:
        language === 'ru'
          ? 'Профессиональное лечение кариеса, пульпита и других заболеваний зубов с использованием современных материалов'
          : 'Zamonaviy materiallar yordamida karies, pulpit va boshqa tish kasalliklarini professional davolash',
      image: '/dental-treatment-procedure--dentist-working-on-pat.png',
      price: language === 'ru' ? 'от 345 000 сумов' : '345 000 UZS',
      duration: language === 'ru' ? '30-60 мин' : '30-60 daq',
      features:
        language === 'ru'
          ? ['Безболезненное лечение', 'Качественные пломбы', 'Гарантия 2 года']
          : ["Og'riqsiz davolash", 'Sifatli plombalar', '2 yil kafolat'],
      popular: false
    },
    {
      icon: Zap,
      title: t('services.implants'),
      description:
        language === 'ru'
          ? 'Современная имплантация зубов с использованием качественных материалов и передовых технологий'
          : "Sifatli materiallar va ilg'or texnologiyalar yordamida zamonaviy tish implantatsiyasi",
      image: '/dental-implant-procedure--modern-dental-equipment.png',
      price: language === 'ru' ? 'от 4 140 000 сумов' : '4 140 000 UZS',
      duration: language === 'ru' ? '2-3 часа' : '2-3 soat',
      features:
        language === 'ru'
          ? ['Швейцарские импланты', 'Пожизненная гарантия', '3D планирование']
          : ['Shveytsariya implantlari', 'Umrbod kafolat', '3D rejalashtirish'],
      popular: true
    },
    {
      icon: Smile,
      title: t('services.whitening'),
      description:
        language === 'ru'
          ? 'Безопасное отбеливание зубов для красивой белоснежной улыбки с долговременным эффектом'
          : "Chiroyli oq tabassum uchun uzoq muddatli ta'sir bilan xavfsiz tish oqartirish",
      image: '/teeth-whitening-procedure--bright-white-smile.png',
      price: language === 'ru' ? 'от 1 035 000 сумов' : '1 035 000 soʼm',
      duration: language === 'ru' ? '60-90 мин' : '60-90 daq',
      features:
        language === 'ru'
          ? ['До 8 тонов светлее', 'Безопасные гели', 'Эффект до 2 лет']
          : ['8 tonga qadar yorqinroq', 'Xavfsiz gellar', "2 yilgacha ta'sir"],
      popular: false
    },
    {
      icon: Braces,
      title: t('services.orthodontics'),
      description:
        language === 'ru'
          ? 'Исправление прикуса и выравнивание зубов современными методами для идеальной улыбки'
          : "Mukammal tabassum uchun zamonaviy usullar bilan tishlarni to'g'rilash va tekislash",
      image: '/orthodontic-treatment--dental-braces--teeth-alignm.png',
      price: language === 'ru' ? 'от 5 750 000 сумов' : '5 750 000 soʻm',
      duration: language === 'ru' ? '12-24 мес' : '12-24 oy',
      features:
        language === 'ru'
          ? [
              'Металлические брекеты',
              'Керамические брекеты',
              'Невидимые элайнеры'
            ]
          : ['Metall breketlar', 'Keramik breketlar', "Ko'rinmas elaynerlar"],
      popular: false
    }
  ]

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='services' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance'>
            {t('services.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {language === 'ru'
              ? 'Мы предоставляем полный спектр стоматологических услуг с использованием современного оборудования'
              : "Biz zamonaviy jihozlar yordamida to'liq stomatologik xizmatlar spektrini taqdim etamiz"}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 relative $`}
              >
                <CardHeader className='text-center'>
                  <div className='mx-auto mb-4 p-3 bg-primary/5 rounded-full w-fit'>
                    <IconComponent className='h-8 w-8 text-green-500' />
                  </div>
                  <CardTitle className='text-xl font-semibold'>
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className='space-y-4'>
                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>

                  <CardDescription className='text-sm text-muted-foreground leading-relaxe'>
                    {service.description}
                  </CardDescription>

                  {/* Price and Duration */}
                  <div className='flex justify-between items-center py-2 border-t border-border'>
                    <div className='flex items-center text-sm'>
                      <span className='font-semibold text-green-500'>
                        {service.price}
                      </span>
                    </div>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <Clock className='h-4 w-4 mr-1' />
                      {service.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-center text-xs text-muted-foreground'
                      >
                        <div className='w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0' />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContacts}
                    className='w-full mt-4'
                    variant='outline' // faqat outline bo'ladi
                  >
                    {language === 'ru' ? 'Записаться' : 'Yozilish'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-bold text-foreground mb-8'>
            {language === 'ru'
              ? 'Дополнительные услуги'
              : "Qo'shimcha xizmatlar"}
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              language === 'ru'
                ? 'Профессиональная чистка'
                : 'Professional tozalash',
              language === 'ru' ? 'Лечение десен' : "Tish go'shti davolash",
              language === 'ru'
                ? 'Детская стоматология'
                : 'Bolalar stomatologiyasi',
              language === 'ru' ? 'Экстренная помощь' : 'Shoshilinch yordam'
            ].map((service, index) => (
              <div key={index} className='p-4 bg-muted/50 rounded-lg'>
                <span className='text-sm font-medium text-foreground'>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
