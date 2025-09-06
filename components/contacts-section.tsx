'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { MapPin, Phone, Mail, Clock, Navigation, Car } from 'lucide-react'

export function ContactsSection () {
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contacts.address'),
      content: language === 'ru' ? 'Фаргона' : "Farg'ona",
      action: language === 'ru' ? 'Показать на карте' : "Xaritada ko'rsatish",
      href: "https://maps.google.com/?q=Farg'ona" // Xaritaga link
    },
    {
      icon: Phone,
      title: t('contacts.phone'),
      content: '+998 94 164 77 07',
      action: language === 'ru' ? 'Позвонить' : "Qo'ng'iroq qilish",
      href: 'tel: +998 94 164 77 07' // Telefon link
    },
    {
      icon: Mail,
      title: t('contacts.email'),
      content: 'sulaymonovsaloxiddin092@gmail.com',
      action: language === 'ru' ? 'Написать' : 'Yozish',
      href: 'sulaymonovsaloxiddin092@gmail.com' // Email link
    }
  ]

  const workingHours = [
    {
      days: language === 'ru' ? 'Понедельник - Пятница' : 'Dushanba - Juma',
      hours: '09:00 - 20:00'
    },
    {
      days: language === 'ru' ? 'Суббота' : 'Shanba',
      hours: '09:00 - 18:00'
    },
    {
      days: language === 'ru' ? 'Воскресенье' : 'Yakshanba',
      hours: '10:00 - 16:00'
    }
  ]

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='contacts' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance'>
            {t('contacts.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {language === 'ru'
              ? 'Свяжитесь с нами удобным способом или запишитесь на прием онлайн'
              : "Biz bilan qulay usulda bog'laning yoki onlayn qabulga yozilib oling"}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                {language === 'ru'
                  ? 'Контактная информация'
                  : "Aloqa ma'lumotlari"}
              </h3>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className='p-4 flex items-start space-x-4 bg-muted'
                  >
                    <div className='flex-shrink-0 p-3 bg-primary/10 rounded-lg'>
                      <info.icon className='h-6 w-6 text-green-500' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold'>{info.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {info.content}
                      </p>

                      {/* Action Button */}
                      <a
                        href={info.href}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button variant='outline' size='sm' className='mt-2'>
                          {info.action}
                        </Button>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <Clock className='h-5 w-5 text-green-500' />
                  <span>{language === 'ru' ? 'Часы работы' : 'Ish vaqti'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center py-2 border-b border-border last:border-0'
                    >
                      <span className='text-muted-foreground'>
                        {schedule.days}
                      </span>
                      <span className='font-semibold text-foreground'>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    {language === "ru" ? "🚨 Экстренная помощь 24/7" : "🚨 Shoshilinch yordam 24/7"}
                  </p>
                </div> */}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className='grid grid-cols-2 gap-4'>
              <Button asChild className='h-12 bg-green-500'>
                <a
                  href='https://t.me/ismailxan'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {language === 'ru' ? 'Записаться онлайн' : 'Onlayn yozilish'}
                </a>
              </Button>

              <Button variant='outline' className='h-12 bg-transparent'>
                <a
                  href='https://t.me/ismailxan'
                  target='_blank'
                  rel='noopener norefrrer'
                >
                  {language === 'ru'
                    ? 'Экстренный вызов'
                    : 'Shoshilinch chaqiruv'}
                </a>
              </Button>
            </div>
          </div>

          {/* Map and Location */}
          <div className='space-y-6 mt-12'>
            <Card className='overflow-hidden'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <Navigation className='h-5 w-5 text-green-500' />
                  <span>
                    {language === 'ru'
                      ? 'Наше расположение'
                      : 'Bizning joylashuvimiz'}
                  </span>
                </CardTitle>
                <CardDescription>
                  {language === 'ru'
                    ? 'Удобное расположение в центре города с парковкой'
                    : "Shahar markazida to'xtash joyi bilan qulay joylashuv"}
                </CardDescription>
              </CardHeader>
              <CardContent className='p-0'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.442517774917!2d71.28024286003364!3d40.35933573688877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab4eeb5ee90f%3A0xe108226ee5fb6416!2sDjura%20Dodo%20national%20kitchen!5e0!3m2!1sru!2s!4v1757130575039!5m2!1sru!2s'
                  width='100%'
                  height='300'
                  style={{ border: 0 }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
