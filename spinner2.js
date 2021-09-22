//create an array to hold all the symbols
const symbol = ["|", "-", "\\", "|", "-", "\\", "|"];
//variable declaration
let timer = 0;
//interate throgh the symbols
for (const i of symbol) {
  timer += 1000;
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, timer);
}
