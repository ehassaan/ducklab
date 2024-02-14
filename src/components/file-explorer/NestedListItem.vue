<template>
    <div class="item-container">

        <div v-if="props.file.type !== 'folder'" density="compact" :class="{ fileitem: true, nested: !props.selectable }">
            <v-checkbox-btn v-if="props.selectable" class="checkbox" density="compact"
                :model-value="selected[props.file.path]"
                @update:model-value="$ev => selectionChanged(file, $ev)"></v-checkbox-btn>

            <div class="clickable" @click="leafClicked" @dblclick="leafDblClicked">
                <v-icon color="primary" :icon="['sql', 'html'].includes(file.type) ? '$code' : '$file'" />
                <p class="filename">{{ props.file.name }}</p>
                <v-tooltip activator="parent" location="end">{{ props.file.path }}</v-tooltip>
            </div>
        </div>

        <div v-else>
            <div class="fileitem">
                <v-checkbox-btn v-if="props.selectable" class="checkbox" density="compact"
                    :model-value="selected[file.path]"
                    @update:model-value="$ev => selectionChanged(file, $ev)"></v-checkbox-btn>

                <div :class="{ 'nested': !props.selectable }">
                    <div class="clickable" @click="opened = !opened">
                        <v-icon color="primary" :icon="opened ? '$angleDown' : '$angleRight'" />

                        <v-icon color="primary" icon="$folder" />
                        <p class="filename">{{ props.file.name }}</p>
                        <v-tooltip activator="parent" location="end">{{ props.file.path }}</v-tooltip>
                    </div>
                    <div v-if="props.file.permission === 'prompt'" @click="emit('prompt-permission', props.file)"
                        class="prompt">
                        No Permissions
                    </div>
                    <template v-if="opened">
                        <div v-for="child of props.file.children" :key="child.path">
                            <NestedListItem :file="child" :key="child.name"
                                @prompt-permission="emit('prompt-permission', child)" @select="sel => emit('select', sel)"
                                @clicked="fil => emit('clicked', fil)" @open-code="f => emit('open-code', f)">
                            </NestedListItem>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <v-snackbar v-model="showMessage" :timeout="3000">{{ message }}</v-snackbar>

    </div>
</template>

<script lang="ts" setup>
import { FileSystemReference } from '@/entities/FileSystemReference';
import { ref } from 'vue';
import { PropType } from 'vue';
import constants from "@/constants/constants";


let emit = defineEmits(['prompt-permission', 'clicked', 'select', 'open-code']);
let selected = ref<{ [key: string]: boolean }>({});

const props = defineProps({
    file: {
        type: Object as PropType<FileSystemReference>,
        required: true
    },
    selectable: {
        type: Boolean
    }
});
let opened = ref(false);
let message = ref('');
let showMessage = ref(false);

function selectionChanged(file: FileSystemReference, isSelected: boolean) {
    selected.value[file.path] = isSelected;
    emit('select', selected.value);
}

async function leafClicked() {
    if (props.file.isCode) return;
    await navigator.clipboard.writeText(props.file.path);
    showMessage.value = true;
    message.value = constants.TOAST_PATH_COPIED_TO_CLIPBOARD;
    emit('clicked', props.file);
}

function leafDblClicked(ev: MouseEvent) {
    if (props.file.isCode) {
        emit("open-code", props.file);
        ev.preventDefault();
    }
}

</script>
<style lang="less" scoped>
.item-container {
    width: 100%;
    // padding-left: 8px;
    user-select: none;

    .fileitem {
        display: flex;
        align-items: flex-start;
        width: 100%;

        .checkbox {
            flex: 0;
        }

        .clickable {
            display: flex;
            flex-direction: row;
            cursor: pointer;
            margin-top: 3px;

            .filename {
                flex: 1;
                margin-left: 5px;
            }
        }

        .clickable:hover {
            border-bottom: 1px solid rgb(var(--theme-color-accent, green));
        }

        .prompt {
            color: rgb(var(--theme-color-error));
        }

        .prompt:hover {
            border-bottom: 1px solid rgb(var(--theme-color-accent, green));
        }

    }
}

.nested {
    margin-left: 24px;
}
</style>