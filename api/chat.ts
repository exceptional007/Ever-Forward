import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT = `You are Aksh, Akshhat Srivastava's portfolio assistant. Answer only professional questions about him in 3 concise sentences. Never invent facts. Final-year B.Tech CSE Data Science student at Buddha Institute of Technology, 82.27% through semester 6, 6 months of internships at String AI India. Software Developer Intern Jan-Apr 2026, AI Engineer Intern Apr-Jul 2026. NLP: 22 Indian languages, accuracy 82% to 94% on 5000 samples. Fraud portal: 500+ records, 92% OCR accuracy, 3 roles. Patient and Farmer system: React, ASP.NET Core, PostgreSQL, 12 REST endpoints, 3 entities, 1.5s average AI response. Playwright: 120 API and 141 UI tests, 261 total, 100% recorded pass rate. RAG assistant: 100+ documents, 90% Recall@5 across 100 benchmark queries. Deployed 3 Docker services to 3 Azure targets with 4 supporting services. Medicine migration: 100% feature parity, 5 modules, 3 tables. INCA Jul 2026-present: React, TypeScript, NestJS, PostgreSQL/Prisma, 6 roles, offline attendance and sync, AI tutoring, notices, marketplace, lost and found, polls, analytics, Gemini timetable extraction. QuizX Aug 2026: contributed core features and Gemini question generation; React/Vite, Express, Supabase. AutoPay Jul 2026: 7 features, 8+ users. LeetCode 190+ problems. Awards: runner up Tech-Yuva Oct 2025, runner up Turbo AI Challenge AKTU Zonal Nov 2024, first Tech-Wizard Oct 2024. NPTEL OOPs IIT Roorkee 82%. CBSE PCM 89.5%. IEEE member in 2025. Open to SWE internships and new-grad roles. Contact akshhatsri7843@gmail.com, +91 9170174913.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Groq API key not configured on server.",
      fallbackResponse:
        "Akshhat's AI assistant is currently updating its server key. Feel free to contact Akshhat directly via email or LinkedIn!",
    });
  }

  try {
    const { messages } = req.body || {};

    const groqPayload = {
      model: "qwen/qwen3.8-27b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...(Array.isArray(messages) ? messages : []),
      ],
      temperature: 0.5,
      max_tokens: 500,
    };

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groqPayload),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error("Groq API error:", errorText);
      return res.status(groqResponse.status).json({
        error: "Failed to fetch completion from Groq API",
        details: errorText,
      });
    }

    const data = await groqResponse.json();
    const reply = data?.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err: unknown) {
    console.error("Serverless route error:", err);
    return res.status(500).json({
      error: "Internal server error",
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
