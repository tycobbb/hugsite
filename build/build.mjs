import { run } from "./src/run.mjs"
import { clean, build } from "./src/files.mjs"

// -- main --
function main() {
  run(
    { name: "clean", action: clean },
    { name: "build", action: build },
  )
}

// -- bootstrap --
main()
