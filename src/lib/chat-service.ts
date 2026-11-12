import { profile, skillGroups, experiences, projects } from "@/data/portfolio";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function sendMessageToAksh(messages: Message[]): Promise<string> {
  // Try sending request to serverless backend endpoint
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) return data.reply;
    }
  } catch {
    // Ignore serverless endpoint failure and check client-side fallback
  }

  // Offline / missing key fallback smart response generator
  const lastUserMsg = messages[messages.length - 1]?.content.toLowerCase() || "";

  if (
    lastUserMsg.includes("skill") ||
    lastUserMsg.includes("stack") ||
    lastUserMsg.includes("python") ||
    lastUserMsg.includes("react")
  ) {
    return "Akshhat's core stack includes Python, TypeScript, React.js, FastAPI, ASP.NET Core Web API, PostgreSQL, and Qdrant vector DBs. He specializes in RAG pipelines and multilingual AI safety tooling!";
  }
  if (
    lastUserMsg.includes("project") ||
    lastUserMsg.includes("inca") ||
    lastUserMsg.includes("fraud")
  ) {
    return "INCA supports 6 roles with React, TypeScript, NestJS and PostgreSQL. The fraud portal processed 500+ records at 92% OCR accuracy; AutoPay has 7 features and 8+ users.";
  }
  if (
    lastUserMsg.includes("experience") ||
    lastUserMsg.includes("work") ||
    lastUserMsg.includes("intern")
  ) {
    return "Akshhat worked as an AI Engineer Intern & Software Developer Intern at String AI India, architecting 22 Indian language NLP pipelines and RAG document investigation tooling.";
  }
  if (
    lastUserMsg.includes("contact") ||
    lastUserMsg.includes("email") ||
    lastUserMsg.includes("hire") ||
    lastUserMsg.includes("reach")
  ) {
    return `You can reach out to Akshhat directly via email at ${profile.email} or on LinkedIn at ${profile.socials.linkedin}!`;
  }

  return "That's outside what I can help with — feel free to reach out to Akshhat directly for that!";
}
