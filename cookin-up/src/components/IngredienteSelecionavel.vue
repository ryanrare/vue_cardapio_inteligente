<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true}
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar()
    }
}
</script>

<template>
    <button
      class="ingrediente"
      v-on:click="aoClicar"
    >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>