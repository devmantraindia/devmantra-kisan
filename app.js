import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const engine = await CreateWebWorkerMLCEngine(
  new Worker("./worker.js", { type: "module" }),
  "Qwen2.5-1.5B-Instruct-q4f16_1"
);

window.askAI = async function (message) {
  const response = await engine.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are Dev Mantra Kisan AI. Help Indian farmers."
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  return response.choices[0].message.content;
};
