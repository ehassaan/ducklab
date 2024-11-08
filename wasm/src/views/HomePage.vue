<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>

<template>
    <v-app-bar density="compact">
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

        <v-toolbar-title>
            <Logo></Logo>
        </v-toolbar-title>

        <v-btn href="https://github.com/ehassaan/ducklab" icon="$github">
        </v-btn>

    </v-app-bar>

    <v-main class="main">
        <h1 class="title">Ducklab</h1>
        <!-- <Logo style="font-size: 80px;"></Logo>cat -->
        <h2 class="subtitle">Interactive SQL, Python and PySpark Notebook environment | Powered by DuckDB</h2>

        <div class="links">
            <v-btn class="link" color="primary" to="/lab">Ducklab for Web</v-btn>
            <v-btn class="link" color="primary"
                href="https://marketplace.visualstudio.com/items?itemName=ducklake.ducklab">Ducklab for VS Code</v-btn>
        </div>

        <div class="features">
            <div class="feature">
                <p class="feature-title">
                    Interactive Notebooks
                </p>
                <p class="feature-detail">
                    Interactive notebook supporting SQL and Python
                </p>
            </div>
            <div class="feature">
                <p class="feature-title">
                    Simple File Format
                </p>
                <p class="feature-detail">
                    Ducklab uses .isql file format which, unlike ipynb, is git-friendly and human readable.
                </p>
            </div>
            <div class="feature">
                <p class="feature-title">
                    Pyspark Support (experimental)
                </p>
                <p class="feature-detail">
                    Run pyspark code locally in your notebook using duckdb
                </p>
            </div>
            <div class="feature">
                <p class="feature-title">
                    Import Databricks .py Files
                </p>
                <p class="feature-detail">
                    Import Databricks .py notebooks using Ducklab for VS Code.
                </p>
            </div>
            <div class="feature">
                <p class="feature-title">
                    Private by Default
                </p>
                <p class="feature-detail">
                    Ducklab does all the processing within your machine.
                </p>
            </div>
        </div>
    </v-main>
</template>

<style lang="css">
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
}

.title {
    margin-top: 10px;
    font-family: 'MontserratAlt1-Light';
    font-weight: normal;
    font-size: 74px;
    user-select: none;
    display: flex;
    overflow: visible;
    /* margin: auto; */
}

.subtitle {
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
}

.features {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.feature {
    margin: 20px;
    width: 300px;
    /* border: 1px solid black; */
    padding: 15px;
}

.feature-title {
    font-weight: bold;
    margin-bottom: 5px;
    border-bottom: 1px solid;
    border-color: var(--theme-color-shadow);
}

.links {
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.link {
    margin: 5px;
}

@media only screen and (max-width: 610px) {
    .title {
        font-size: 54px;
    }

    .links {
        flex-direction: column
    }
}

@media only screen and (max-width: 860px) {
    .features {
        flex-direction: column
    }

    .feature {
        text-align: center;
    }

}
</style>