import "./style.css";

const button = document.querySelector("#copy-prompt");
const prompt = document.querySelector("#starter-prompt");
const status = document.querySelector("#copy-status");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(prompt.textContent);
    status.textContent = "Prompt copied. Paste it into the coding agent.";
  } catch {
    status.textContent = "Select and copy the example text manually.";
  }
});
