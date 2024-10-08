<template>
    <div class="Copyright">
        <p>推荐使用深夜模式</p>
        <a href="//creativecommons.org/licenses/by-sa/4.0/" target="_blank">基于 CC BY-SA 4.0 协议发布</a>
    </div>
</template>

<style scoped>
.Copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 68px;
    border: 1px solid #7e7e7e3d;
    color: #7e7e7eb9;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
        padding: 3px 10px;
        width: fit-content;
        border-radius: 50px;
        transition: all 0.15s;

        &:hover {
            background-color: #7e7e7e3d;
        }

        &:active{
            background-color: #3838383d;
        }
    }
}
</style>
