<template lang="pug">
    article
        section.meta
            h2.title
                a {{ article.title }}
        section.article.typo
            div(v-html="article.content")
            div.readmore
                a Read More
            div.full-width.tags
                a #欢迎光临
</template>

<script>
export default {
    props: ["article"],
    data() {
        return {};
    }
};
</script>


<style lang="scss" scoped>
article {
    padding: 30px 20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff;
    color: #414141;
    h2.title {
        margin: 0 0 0.4em;
        font-size: 1.5rem;
        font-weight: normal;
    }
    section.typo {
        div.full-width {
            padding: 10px 20px;
            margin-right: -20px;
            margin-left: -20px;
            margin-bottom: -30px;
            background: #f7f7f7;
            color: #828282;
        }
        div.readmore {
            color: #1791f2;
            font-size: 1.2em;
            margin: 20px 0;
        }
    }
}
</style>
