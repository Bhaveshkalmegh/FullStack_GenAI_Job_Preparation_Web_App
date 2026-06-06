const Bytez = require("bytez.js")

const key = "e834dfda7683bc2063761b0c843ed5e2"
const sdk = new Bytez(key)

async function main() {
  const model = sdk.model("mistralai/Mistral-7B-Instruct-v0.3")

  const { error, output } = await model.run([
    {
      role: "user",
      content: "Hello"
    }
  ])

  console.log({ error, output })
}

main()