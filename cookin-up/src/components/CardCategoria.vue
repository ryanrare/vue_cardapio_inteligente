<script lang="ts">
import type ICategoria from '@/interfaces/ICategorias';
import type { PropType } from 'vue';

export default {
    props: {
        categoria: {  type: Object as PropType<ICategoria>, required: true  }
    }
}
</script>

<template>
    {{ categoria.nome }}
    {{ categoria.imagem }}
</template>