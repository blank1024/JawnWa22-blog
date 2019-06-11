<template lang="pug">
    div.progress-wrapper
        div.progress(:style="{'width': progressBar.progress + '%'}" :class="{'hidden': progressBar.hidden}")
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(['progressBar'])
    },
};
</script>

<style lang="scss" scoped>
.progress-wrapper {
    width: 100%;
    height: 3px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    .progress {
        height: 100%;
        background-color: #4caf50;
        transition: width 0.5s, height 0.5s ease-in-out 0.5s;

    }
    .hidden {
        height: 0px;

    }
}
</style>
