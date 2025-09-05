'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/language-provider'
import { GraduationCap, Award, Clock } from 'lucide-react'

export function TeamSection () {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: language === 'ru' ? 'Др. Алексей Петров' : 'Dr. Aleksey Petrov',
      position:
        language === 'ru'
          ? 'Главный врач, стоматолог-терапевт'
          : 'Bosh shifokor, terapevt stomatolog',
      experience: language === 'ru' ? '15 лет опыта' : '15 yil tajriba',
      education:
        language === 'ru'
          ? 'КазНМУ им. С.Д. Асфендиярова'
          : 'S.D. Asfendiyarov nomidagi QazNMU',
      specializations:
        language === 'ru'
          ? ['Эндодонтия', 'Реставрация', 'Имплантология']
          : ['Endodontiya', 'Restavratsiya', 'Implantologiya'],
      image: '/professional-dentist-portrait--male-doctor-in-wh.png',
      description:
        language === 'ru'
          ? 'Специализируется на сложных случаях лечения корневых каналов и эстетической реставрации зубов'
          : 'Ildiz kanallarini davolashning murakkab holatlari va tishlarni estetik tiklashga ixtisoslashgan'
    },
    {
      name: language === 'ru' ? 'Др. Мария Иванова' : 'Dr. Mariya Ivanova',
      position:
        language === 'ru'
          ? 'Стоматолог-хирург, имплантолог'
          : 'Stomatolog-jarroh, implantolog',
      experience: language === 'ru' ? '12 лет опыта' : '12 yil tajriba',
      education:
        language === 'ru'
          ? 'Московский медицинский университет'
          : 'Moskva tibbiyot universiteti',
      specializations:
        language === 'ru'
          ? ['Имплантация', 'Хирургия', 'Пародонтология']
          : ['Implantatsiya', 'Jarrohlik', 'Parodontologiya'],
      image: '/professional-female-dentist-portrait--confident-.png',
      description:
        language === 'ru'
          ? 'Эксперт в области дентальной имплантации и хирургических вмешательств'
          : 'Dental implantatsiya va jarrohlik aralashuvlari sohasidagi ekspert'
    },
    {
      name: language === 'ru' ? 'Др. Сергей Козлов' : 'Dr. Sergey Kozlov',
      position: language === 'ru' ? 'Врач-ортодонт' : 'Ortodont shifokor',
      experience: language === 'ru' ? '10 лет опыта' : '10 yil tajriba',
      education:
        language === 'ru'
          ? 'СПбГМУ им. И.П. Павлова'
          : 'I.P. Pavlov nomidagi SPbGMU',
      specializations:
        language === 'ru'
          ? ['Брекеты', 'Элайнеры', 'Детская ортодонтия']
          : ['Breketlar', 'Elaynerlar', 'Bolalar ortodontiyasi'],
      image: '/young-male-orthodontist-portrait--professional-d.png',
      description:
        language === 'ru'
          ? 'Специалист по исправлению прикуса у детей и взрослых современными методами'
          : "Bolalar va kattalarning tishlarini zamonaviy usullar bilan to'g'rilash bo'yicha mutaxassis"
    },
    {
      name: language === 'ru' ? 'Др. Анна Смирнова' : 'Dr. Anna Smirnova',
      position: language === 'ru' ? 'Детский стоматолог' : 'Bolalar stomatolgi',
      experience: language === 'ru' ? '8 лет опыта' : '8 yil tajriba',
      education:
        language === 'ru'
          ? 'Алматинский медицинский университет'
          : 'Almaty tibbiyot universiteti',
      specializations:
        language === 'ru'
          ? ['Детская стоматология', 'Профилактика', 'Седация']
          : ['Bolalar stomatologiyasi', 'Profilaktika', 'Sedatsiya'],
      image: '/female-pediatric-dentist-portrait--kind-and-prof.png',
      description:
        language === 'ru'
          ? 'Опытный детский стоматолог, умеющий найти подход к каждому маленькому пациенту'
          : 'Har bir kichik bemorga yondashuvni topishni biladigan tajribali bolalar stomatolgi'
    }
  ]

  return (
    <section id='team' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance'>
            {t('team.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {t('team.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
          <div className='flex justify-center'>
            <Card className='group hover:shadow-lg transition-all duration-300 overflow-hidden w-full max-w-sm'>
              <CardHeader className='p-0'>
                <div className='relative overflow-hidden'>
                  <img
                    src={teamMembers[0].image || '/placeholder.svg'}
                    alt={teamMembers[0].name}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-white font-bold text-lg mb-1'>
                      {teamMembers[0].name}
                    </h3>
                    <p className='text-white/90 text-sm'>
                      {teamMembers[0].position}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='p-6'>
                <div className='space-y-4'>
                  {/* tajriba */}
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <Clock className='h-4 w-4 mr-2 text-green-500' />
                    {teamMembers[0].experience}
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <GraduationCap className='h-4 w-4 mr-2 text-green-500' />
                    {teamMembers[0].education}
                  </div>

                  {/* ixtisosliklar */}
                  <div>
                    <div className='flex items-center mb-2'>
                      <Award className='h-4 w-4 mr-2 text-green-500' />
                      <span className='text-sm font-medium text-foreground'>
                        {language === 'ru'
                          ? 'Специализации:'
                          : 'Ixtisosliklar:'}
                      </span>
                    </div>
                    <div className='flex flex-wrap gap-1'>
                      {teamMembers[0].specializations.map((spec, specIndex) => (
                        <Badge
                          key={specIndex}
                          variant='secondary'
                          className='text-xs'
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardDescription className='text-sm leading-relaxed'>
                    {teamMembers[0].description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
