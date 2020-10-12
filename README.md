# Deno 1.4.4

## A secure runtime for JavaScript and TypeScript.

- Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
- Secure by default. No file, network, or environment access, unless explicitly enabled.
- Supports TypeScript out of the box.
- Has built-in utils like a dependency inspector (deno info) and a code formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std

## Node.js vs Deno

DeNO wILl MAke NodE jS ObsolEtE!!!!11!

nope

## Deno REPL

Run `deno` in console to open REPL env. Just like with node.

## Run modules hosted on a server

`deno run https://deno.land/std/examples/welcome.ts `

After initial `deno run` package will be cached.

## Deno install script locally

`deno install https://deno.land/std@0.73.0/http/file_server.ts`

add PATH:

`echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.zshrc `

## Features

- TS or JS
- Secure by Default
- De-centralized packages
- STD library
- Modern JS
- ES Modules
- Top Level Await
- Browser compatible API
- WASM!

## Simple server in Deno

`deno run server.ts`
