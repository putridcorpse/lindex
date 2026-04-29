const API_KEY = "api"

async function buscar() {
  const input = document.getElementById("input").value.trim()
  const output = document.getElementById("output")
  const outputComando = document.querySelector(".output-comando")
  const outputDescricao = document.querySelector(".output-descricao")

  if (!input) return

  outputComando.textContent = "Searching..."
  outputDescricao.textContent = ""
  output.style.display = "block"

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are now on the terminal.
The user will type a term or question in any language.
Reply ONLY in this exact format, nothing else:

COMMAND: <the exact terminal command>
DESCRIPTION: <one sentence explaining what it does>

User input: ${input}`
          }]
        }]
      })
    })

    const data = await response.json()
    const text = data.candidates[0].content.parts[0].text

    const linhas = text.split("\n").filter(l => l.trim())
    const comando = linhas.find(l => l.startsWith("COMMAND:"))?.replace("COMMAND:", "").trim()
    const descricao = linhas.find(l => l.startsWith("DESCRIPTION:"))?.replace("DESCRIPTION:", "").trim()

    outputComando.textContent = comando || "Command not found"
    outputDescricao.textContent = descricao || ""

  } catch (err) {
    outputComando.textContent = "Error connecting to AI"
    outputDescricao.textContent = err.message
  }
}

document.getElementById("input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") buscar()
})
