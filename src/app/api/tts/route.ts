import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text")?.trim();
  const accent = searchParams.get("accent")?.toLowerCase() || "us";

  if (!text) {
    return new NextResponse("Text parameter is required", { status: 400 });
  }

  // Youdao: type=1 = British, type=2 = American
  const youdaoType = accent === "uk" ? "1" : "2";
  const googleTl = accent === "uk" ? "en-GB" : "en-US";

  // 1. Youdao TTS
  try {
    const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(
      text,
    )}&type=${youdaoType}`;
    const res = await fetch(youdaoUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      return new NextResponse(arrayBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    }
  } catch (err) {
    console.error("Youdao TTS error:", err);
  }

  // 2. Google Translate TTS (fallback)
  try {
    const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${googleTl}&client=tw-ob&q=${encodeURIComponent(
      text,
    )}`;

    const res = await fetch(googleUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://translate.google.com/",
      },
    });

    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      return new NextResponse(arrayBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    }
  } catch (err) {
    console.error("Google TTS error:", err);
  }

  return new NextResponse("Failed to synthesize audio", { status: 500 });
}
