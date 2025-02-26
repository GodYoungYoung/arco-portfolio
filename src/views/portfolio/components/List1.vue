<template>
    <div class="list1">
        <div v-for="vs,vi in vsList" :key="vs.name" class="ghost-card" :style="`--delay:${(1+vi%4) / 4}s`" @click="openLink(vs)">
            <img src="https://pic.rmb.bdstatic.com/bjh/240218/dump/b3be580b24c2bcc23eb60cc59c7cdd41.png" width="100%" height="100%">
            <div class="label">{{ vs.label }}</div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const {push} = useRouter()

const vsList = [
    { name: 'chaozhou', label: '潮州' },
    { name: 'qianse', label: '浅色' },
    { name: 'dark', label: '深色' },
    { name: 'qianse1', label: '浅色1' },
    { name: 'qianse2', label: '浅色2' },
    { name: 'qianse3', label: '浅色3' },
]
function openLink(row) {
    console.error(row);
    push({ name: 'visualscreen', params: { name: row.name } })
}
</script>
<style lang="less" scoped>
.list1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2vh;
    .ghost-card {
        position: relative;
        border: 2px solid #fff;
        border-radius: 6px;
        aspect-ratio: 16/9;
        backdrop-filter: blur(4px);
        opacity: 0;
        overflow: hidden;
        cursor: pointer;
        transform: translateY(2vh);
        animation: dispear 1.2s forwards;
        animation-delay: var(--delay);
        transition: .4s;
        img {
            transition: .3s;
        }
        .label {
            line-height: 4vh;
            font-size: 1.8vh;
            transition: .4s;
            background-color: #0135;
            color: #fff;
            text-align: center;
        }
        &:hover {
            box-shadow: 0 0 1vh 0 #36f3;
            img { transform: scale(1.05); }
            .label { transform: translateY(-100%); }
        }
    }
    @keyframes dispear {
        to { transform: translateY(0); opacity: 1; }
    }
}
</style>