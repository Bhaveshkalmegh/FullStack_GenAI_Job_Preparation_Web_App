const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1"
});

async function main() {
  const response = await client.chat.completions.create({
    model: "meta-llama/llama-3.3-70b-instruct:free", // smallest ✅
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. Always respond in valid JSON only."
      },
      {
        role: "user",
        content: "Give me details of a person: name, age, city. Return as JSON."
      }
    ],
    response_format: { type: "json_object" } // structured output
  });

  const result = JSON.parse(response.choices[0].message.content);
  console.log(result);
}

main();