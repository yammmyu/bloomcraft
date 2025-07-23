import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

/**
 * Safely parses a JSON-like string (often returned by LLMs) and removes any markdown fences.
 */
function safeJsonParse(content: string): object | null {
  try {
    const cleaned = content
        .trim()
        .replace(/^```json\s*/i, "")
        .replace(/```$/, "");

    return JSON.parse(cleaned);
  } catch (err) {
    console.warn("❌ Failed to parse AI output as JSON:", err);
    return null;
  }
}


app.post("/api/deepseek", async (req, res) => {
  const prompt = req.body.prompt;
  if (!process.env.OPENROUTER_API_KEY) {
  console.error("❌ Missing OPENROUTER_API_KEY from environment!");
  return res.status(500).json({ error: "Backend misconfigured: API key is missing." });
}
  try {
    console.log("Using API key:", process.env.OPENROUTER_API_KEY?.slice(0,8) + "...");
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          // Optionally:
          // "X-Title": "AI Bouquet Generator",
          // "HTTP-Referer": "https://yourdomain.com"
        },
      }
    );

    const content = response.data.choices?.[0]?.message?.content;

    if (!content) {
      console.warn("⚠️ AI returned empty content.");
      return res.status(400).json({
        error: "AI returned an empty response. Please try again.",
      });
    }

    const result = safeJsonParse(content);

    if (!result) {
      return res.status(500).json({
        error:
          "The AI returned an unreadable or malformed response. Please try again shortly.",
        suggestion: "You might try slightly rewording your inputs or refresh the page.",
      });
    }

    res.json(result);
  } catch (err: any) {
    console.error("❌ DeepSeek API call failed:", err?.response?.data || err.message);
    res.status(500).json({
      error: "We're having trouble connecting to the AI engine. Try again soon.",
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Express server listening at http://localhost:${port}`);
});
