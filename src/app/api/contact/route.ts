import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, contact, projectType, description } = await req.json();

    // Validate
    if (!name || !contact || !projectType) {
      return NextResponse.json(
        { success: false, message: "Заполните обязательные поля" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram bot credentials not configured");
      return NextResponse.json(
        { success: false, message: "Сервис временно недоступен" },
        { status: 500 }
      );
    }

    // Format message
    const message = [
      "🎬 *Новая заявка с сайта*",
      "",
      `👤 *Имя:* ${escapeMarkdown(name)}`,
      `📱 *Контакт:* ${escapeMarkdown(contact)}`,
      `🎯 *Тип проекта:* ${escapeMarkdown(projectType)}`,
      description
        ? `📝 *Описание:* ${escapeMarkdown(description)}`
        : "",
      "",
      `📅 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramRes.ok) {
      const error = await telegramRes.text();
      console.error("Telegram API error:", error);
      return NextResponse.json(
        { success: false, message: "Ошибка отправки" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Заявка отправлена успешно",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");
}
