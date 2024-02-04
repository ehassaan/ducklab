import { ITabularResultSet } from "@/core/entities/tabular/ITabularResultSet";
import { TabularDataset } from "@/core/entities/tabular/TabularDataset";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('dataset', () => {
    const dataset = ref<TabularDataset>();
    const inputQuery = ref<string>("");
    const results = ref<ITabularResultSet>({ columns: [], values: [] });

    async function fetchData(limit: number, offset: number) {
        if (!dataset.value) throw Error("Invalid dataset");
        dataset.value.setSourceQuery(inputQuery.value);
        results.value = await dataset.value.fetchPage(limit, offset);
    }

    return {
        inputQuery, dataset, results, fetchData
    }

});