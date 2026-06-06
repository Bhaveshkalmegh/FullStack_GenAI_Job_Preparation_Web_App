const OpenAI = require("openai");

const openrouter = new OpenAI({
  apiKey: "<OPENROUTER_API_KEY>",
  baseURL: "https://openrouter.ai/api/v1"
});

async function main() {
  const stream = await openrouter.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
    messages: [
      {
        role: "user",
        content: "How many r's are in the word 'strawberry'?"
      }
    ],
    stream: true,
    stream_options: { include_usage: true }
  });

  let response = "";

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      response += content;
      process.stdout.write(content);
    }

    if (chunk.usage) {
      console.log("\nTotal tokens:", chunk.usage.total_tokens);
      console.log("Prompt tokens:", chunk.usage.prompt_tokens);
      console.log("Completion tokens:", chunk.usage.completion_tokens);
    }
  }
}

main();