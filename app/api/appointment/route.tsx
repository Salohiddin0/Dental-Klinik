import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, preferredDate, preferredTime, message, language } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    // Get Telegram bot token from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Telegram bot token or chat ID not configured")
      return NextResponse.json({ error: "Telegram integration not configured" }, { status: 500 })
    }

    // Format the message for Telegram
    const telegramMessage = formatTelegramMessage({
      name,
      phone,
      service,
      preferredDate,
      preferredTime,
      message,
      language,
    })

    // Send message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error("Telegram API error:", errorData)
      return NextResponse.json({ error: "Failed to send message to Telegram" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Appointment request sent successfully" })
  } catch (error) {
    console.error("Error processing appointment request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function formatTelegramMessage({
  name,
  phone,
  service,
  preferredDate,
  preferredTime,
  message,
  language,
}: {
  name: string
  phone: string
  service?: string
  preferredDate?: string
  preferredTime?: string
  message?: string
  language: string
}) {
  const isRussian = language === "ru"

  const serviceLabels: Record<string, { ru: string; uz: string }> = {
    consultation: { ru: "Консультация", uz: "Konsultatsiya" },
    treatment: { ru: "Лечение зубов", uz: "Tish davolash" },
    implants: { ru: "Имплантация", uz: "Implantatsiya" },
    whitening: { ru: "Отбеливание", uz: "Oqartirish" },
    orthodontics: { ru: "Ортодонтия", uz: "Ortodontiya" },
    cleaning: { ru: "Профессиональная чистка", uz: "Professional tozalash" },
    emergency: { ru: "Экстренная помощь", uz: "Shoshilinch yordam" },
  }

  const getServiceLabel = (serviceKey: string) => {
    const serviceData = serviceLabels[serviceKey]
    if (!serviceData) return serviceKey
    return isRussian ? serviceData.ru : serviceData.uz
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString(isRussian ? "ru-RU" : "uz-UZ", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  let telegramMessage = `🦷 <b>${isRussian ? "НОВАЯ ЗАПИСЬ НА ПРИЕМ" : "YANGI QABULGA YOZILISH"}</b>\n\n`

  telegramMessage += `👤 <b>${isRussian ? "Имя:" : "Ism:"}</b> ${name}\n`
  telegramMessage += `📞 <b>${isRussian ? "Телефон:" : "Telefon:"}</b> ${phone}\n`

  if (service) {
    telegramMessage += `🔧 <b>${isRussian ? "Услуга:" : "Xizmat:"}</b> ${getServiceLabel(service)}\n`
  }

  if (preferredDate) {
    telegramMessage += `📅 <b>${isRussian ? "Дата:" : "Sana:"}</b> ${formatDate(preferredDate)}\n`
  }

  if (preferredTime) {
    telegramMessage += `⏰ <b>${isRussian ? "Время:" : "Vaqt:"}</b> ${preferredTime}\n`
  }

  if (message) {
    telegramMessage += `💬 <b>${isRussian ? "Сообщение:" : "Xabar:"}</b>\n${message}\n`
  }

  telegramMessage += `\n🌐 <b>${isRussian ? "Язык:" : "Til:"}</b> ${isRussian ? "Русский" : "O'zbek"}`
  telegramMessage += `\n⏱️ <b>${isRussian ? "Время подачи:" : "Yuborilgan vaqt:"}</b> ${new Date().toLocaleString(
    isRussian ? "ru-RU" : "uz-UZ",
    {
      timeZone: "Asia/Almaty",
    },
  )}`

  return telegramMessage
}
