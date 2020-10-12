
const wasmCode = await Deno.readFile("./hello_wa/target/wasm32-unknown-unknown/debug/hello_wa.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const wasmFunctions = wasmInstance.exports;

const square = wasmFunctions.square as CallableFunction
console.log(square(7))