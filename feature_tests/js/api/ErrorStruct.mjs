import wasm from "../wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"

export default class ErrorStruct {
  constructor(underlying) {
    this.i = (new Int32Array(wasm.memory.buffer, underlying, 1))[0];
    this.j = (new Int32Array(wasm.memory.buffer, underlying + 4, 1))[0];
  }
}
