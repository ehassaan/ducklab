# Clear previous builds

Remove-Item -Recurse -Force ./dist
mkdir dist

# Targets to build against
$targets = @(
    "win32-x64"
    "linux-x64",
    "linux-arm64",
    "darwin-x64",
    "darwin-arm64"
)

try {
    foreach ($p in $targets) {
        $platform = ($p -split "-")[0]
        $arch = ($p -split "-")[1]
    
        # Download the right DuckDB binary for this target
        npx node-pre-gyp install --directory ./node_modules/duckdb --target_platform=$platform --target_arch=$arch --update-binary

        New-Item -Force -ItemType Directory ./lib/binding
        Copy-Item -Force -Recurse ./node_modules/duckdb/lib/binding/duckdb.node ./lib/binding/
        Copy-Item -Force -Recurse ./node_modules/zeromq/prebuilds ./
        # Package extension
        npx vsce package --no-dependencies --githubBranch main --target $platform-$arch --out ./dist
        # npx vsce publish --packagePath dist/$(Get-ChildItem -Filter ducklab-$target-$arch*.vsix -Recurse ./dist) -p $env:VSCE_PAT
    }
}
catch {
    Write-Error $Error[0]
    exit 1
}


# for %%p in (%targets%) DO (
#     echo %%p
# )
# @REM for %%p in ($targets) do (

#     @REM )
