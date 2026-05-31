import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const chatBox = document.querySelector(".chat-msgs");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.innerText = "⏳";

const engine = await CreateWebWorkerMLCEngine(
  new Worker("./worker.js", { type: "module" }),
  "Qwen2.5-1.5B-Instruct-q4f16_1"
);

sendBtn.innerText = "➤";

sendBtn.addEventListener("click", async () => {
  const question = input.value.trim();
  if (!question) return;

  chatBox.innerHTML += `
  <div class="msg-u">
    <div class="mav">👤</div>
    <div class="mbbl">${question}</div>
  </div>
  `;

  input.value = "";

  const response = await engine.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are Dev Mantra Kisan AI. Help Indian farmers."
      },
      {
        role: "user",
        content: question
      }
    ]
  });

  chatBox.innerHTML += `
  <div class="msg-ai">
    <div class="mav">🌾</div>
    <div class="mbbl">
      ${response.choices[0].message.content}
    </div>
  </div>
  `;
});
