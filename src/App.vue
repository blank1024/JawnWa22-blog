<template lang="pug">
    div#app
        header-top.header-top
        main.blog-body
            router-view
        Footer.footer
        
</template>

<script>
import HeaderTop from "@/components/public/Header.vue";
import Footer from "@/components/public/Footer.vue";
export default {
    components: {
        HeaderTop,
        Footer
    }
};
</script>

<style lang="scss">
@import "~@/assets/style/common.scss";


div#app {
    display: flex;
    flex-direction: column;
}

.header-top {
    flex: none;
}

main {
    flex: 1 0 auto;
    padding: 40px 0 20px;
}

.footer {
    flex: none;
}
</style>
