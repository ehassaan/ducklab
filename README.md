<p align="center">
  <a href="https://ducklab.netlify.app" rel="noopener">
 <img height=50px src="https://raw.githubusercontent.com/HassaanAkbar/ducklab/main/public/logo.png" alt="Project logo"></a>
</p>

<!-- <h3 align="center">ducklab</h3> -->

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https://raw.githubusercontent.com/HassaanAkbar/ducklab/main/package.json)](https://ducklab.netlify.app)
[![GitHub Issues](https://img.shields.io/github/issues/HassaanAkbar/ducklab.svg)](https://github.com/HassaanAkbar/ducklab/issues)
[![License](https://img.shields.io/badge/dynamic/json?label=license&query=license&url=https://raw.githubusercontent.com/HassaanAkbar/ducklab/main/package.json)](/LICENSE)

</div>

---

<p align="center"> In-browser data analysis using SQL | Powered by duckdb-wasm
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🚀 Deployment ](#-deployment-)
- [⛏️ Built Using ](#️-built-using-)
- [🎉 Acknowledgements ](#-acknowledgements-)

## 🧐 About <a name = "about"></a>

DuckLab provides in-browser, SQL notebook experience for adhoc data analysis. It uses duckdb-wasm to process your data within browser. No data leaves your machine.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install NodeJs 16 or above.

[https://nodejs.org/](https://nodejs.org/)

### Installing

A step by step series of examples that tell you how to get a development env running.

It is recommended to use `pnpm`,

```
# Install pnpm (if you don't have it installed already)
npm i -g pnpm

# install dependencies
pnpm imstall

# Start the dev server
pnpm run dev
```

Or if you are using `npm`
```
# install dependencies
npm install

# start the dev server
npm run dev
```

## 🚀 Deployment <a name = "deployment"></a>

Application has no backend, build can be generated using `pnpm run build` and `dist` folder can be deployed as a static application on any static site hosting.

## ⛏️ Built Using <a name = "built_using"></a>

- [VueJs](https://vuejs.org/) - Web Framework
- [Vuetify](https://vuetifyjs.com/) - Material UI Framework
- [DuckDb](https://duckdb.org/) - In-process database

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [duckdb-wasm](https://github.com/duckdb/duckdb-wasm)
