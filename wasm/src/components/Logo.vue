<template>
    <p class="logo">
        <span class="duck">DUCK</span><span class="lab">LAB</span>
    </p>
</template>

<style lang="less" scoped>
.logo {

    font-family: 'MontserratAlt1-Light';
    user-select: none;

    .duck {
        color: var(--theme-color-brand2, blue);
        background-color: var(--theme-color-brand1, blue);
        padding-top: 3%;
    }

    .lab {
        color: var(--theme-color-brand1, blue);
        background-color: var(--theme-color-brand2, blue);
        padding-top: 3%;
    }
}
</style>