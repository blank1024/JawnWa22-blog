<template lang="pug">
    div#app
        header-top.header-top
        main.blog-container
            router-view
        Footer.footer
        
</template>

<script>
import HeaderTop from '@/pages/index/components/public/Header.vue';
import Footer from '@/pages/index/components/public/Footer.vue';
export default {
    components: {
        HeaderTop,
        Footer
    }
}
</script>

<style lang="scss">
@import '~@/assets/style/common.scss';
html, body {
    height: 100%;
    margin: 0 auto;
    font-family: 'Titillium Web', sans-serif;
    background-color: #EBECEE;
}

div#app {
    display: flex;
    flex-direction: column;
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
}
</style>
