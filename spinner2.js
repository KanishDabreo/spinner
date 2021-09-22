// setTimeout(()=> {
//   process.stdout.write('\r|    ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(()=> {
//   process.stdout.write('\r|    ');
// }, 800);

// setTimeout(()=> {
//   process.stdout.write('\r\\   ');
// }, 900);

// setTimeout(()=> {
//   process.stdout.write('\r-   ');
// }, 1000);

// setTimeout(()=> {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(()=> {
//   process.stdout.write('\r|    ');
// }, 1200);

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
