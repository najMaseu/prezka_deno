
const wasmCode = await Deno.readFile("./hello_wa/target/wasm32-unknown-unknown/debug/hello_wa.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const wasmExports = wasmInstance.exports;

type SquareFunctionType = (num: number) => number

const square = wasmExports.square as SquareFunctionType
console.log(square(7))


  