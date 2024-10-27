<p align="center">
  <a href="https://ducklab.netlify.app" rel="noopener">
 <img width=200px src="./logo.png" alt="Project logo"></a>
</p>

<!-- <h3 align="center">ducklab</h3> -->

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https://raw.githubusercontent.com/HassaanAkbar/ducklab/main/extension/package.json)](https://ducklab.netlify.app)
[![GitHub Issues](https://img.shields.io/github/issues/HassaanAkbar/ducklab.svg)](https://github.com/HassaanAkbar/ducklab/issues)
[![License](https://img.shields.io/badge/dynamic/json?label=license&query=license&url=https://raw.githubusercontent.com/HassaanAkbar/ducklab/main/extension/package.json)](/LICENSE)

</div>

---

<p align="center"> Interactive SQL and PySpark Notebooks | Powered by DuckDB
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🔥 Features ](#-features-)
- [🏁 Getting Started ](#-getting-started-)
  - [Using Ducklab Kernel](#using-ducklab-kernel)
  - [Using Ducklab Spark Kernel](#using-ducklab-spark-kernel)
  - [Import Databricks Notebook](#import-databricks-notebook)
- [💬 Contribute](#-contribute)
  - [Implement a new feature](#implement-a-new-feature)
  - [Request a new feature](#request-a-new-feature)
  - [Fix a bug](#fix-a-bug)
- [🎉 Acknowledgements ](#-acknowledgements-)

## 🧐 About <a name = "about"></a>

DuckLab for VS Code provides data analysis features for SQL, PySpark and Python. It uses DuckDB to process your data locally.

## 🔥 Features <a name = "features"></a>

- Ducklab Kernel to run SQL and Python using same duckdb instance (exposed as `db` variable)
- Ducklab Spark Kernel allows running pyspark code using `duckdb.experimental.spark` module (exposed as `spark`, a `SparkSession` instance).
- Import Databricks `.py` notebooks and preview in a user-friendly VS Code Notebook window.
- Use any python, venv or conda environment detected by VS Code Python extension.
- Git-friendly `.isql` format. This format is plain SQL and Python. 
- Ducklab doesn't use `ipynb` format which stores cell outputs in the file and pollutes git. It also makes diff in pull requests unreadable.

## 🏁 Getting Started <a name = "getting_started"></a>

### Using Ducklab Kernel

1. Create a new `.isql` file.
2. Select kernel `ducklab-python` / `ducklab-spark`
3. Select Python environment from bottom-right corner
4. `Ducklab` kernel will have `db` variable (duckdb connection) already initialized for you.

### Using Ducklab Spark Kernel

1. Create a new `.isql` file.
2. Select kernel `Ducklab (Spark)`
3. Select Python environment from bottom-right corner
4. `Ducklab (Spark)` kernel will have `spark` variable (SparkSession) already initialized for you.

### Import Databricks Notebook

1. Right click on a Databricks `.py` notebook file
2. Click `Import Databricks Notebook`

## 💬 Contribute

Contributions are most welcome. There are various ways you can contribute,

### Implement a new feature
1. Create an issue and provide your reasoning on why you want to add this feature.
2. Discuss your approach and design.
3. Implement the feature and submit your PR.

### Request a new feature
1. Open an issue and provide details about your feature request.
2. In case other tools implement that functionality then it will be helpful to share the reference for inspiration and design.

### Fix a bug
1. If you are resolving an issue, please add fix: #<issue number> <short message> in your PR title (e.g.fix: #3899 update entities encoding/decoding).
2. Provide a short description of the bug in your PR and/or link to the issue.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [DuckDb](https://duckdb.org/) - In-process analytics database
