#!/bin/bash

set -e

# Clear previous builds
rm -rf ./dist
mkdir ./dist

# Targets to build against
targets=(
    "win32-x64" # DuckDB appears to not have ia32 nor arm64 builds for Windows
    "linux-x64"
    "linux-arm64"
    "darwin-x64"
    "darwin-arm64"
)

cp -rf ./node_modules/zeromq/prebuilds ./


for p in ${targets[@]}; do
    platform=$(echo $p | cut -d "-" -f 1)
    arch=$(echo $p | cut -d "-" -f 2)

    npx node-pre-gyp install --directory ./node_modules/duckdb --target_platform=$platform --target_arch=$arch --update-binary

    mkdir -p ./lib/binding
    cp -rf ./node_modules/duckdb/lib/binding/duckdb.node ./lib/binding/
    
    # Package extension
    npx vsce package --no-dependencies --target $platform-$arch --out ./dist --baseContentUrl https://raw.githubusercontent.com/ducklake-hq/ducklab/refs/heads/main/vs-extension/ --baseImagesUrl https://raw.githubusercontent.com/ducklake-hq/ducklab/refs/heads/main/vs-extension/

done
