import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const engine = await CreateWebWorkerMLCEngine(
  new Worker("./worker.js", { type: "module" }),
  "Qwen2.5-1.5B-Instruct-q4f16_1"
);
