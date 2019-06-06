<template lang="pug">
    //- section.post-list
    //-     div.post-wrapper(v-for="(item, index) in list" :key="index" ref="post") 
    //-         div.content {{ item.content }}
    section.post-list
        div.post-wrapper(v-for="(item, index) in articleList" :key="index" ref="post")
            ArticleWrapper(:article="item")
</template>


<script>
import ArticleWrapper from "@/pages/index/components/home/ArticleWrapper.vue";
export default {
    components: {
        ArticleWrapper
    },
    data() {
        return {
            list: [
                {
                    content: "123"
                }
            ],
            articleList: []
        };
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        init() {
            let io = new IntersectionObserver(this.lazyload, {
                threshold: [0.25]
            });

            this.$refs.post.forEach(value => {
                io.observe(value);
            });
        },
        lazyload(e) {
            e.forEach(value => {
                // 可视区域大于25%时显示文章
                if (value.intersectionRatio < 0.25) {
                    return;
                }
                value.target.classList.add("lazyload");
            });
        },
        getArticleList() {
            this.$api.article.getArticleList().then(res => {
                this.articleList = res;
                this.$nextTick(() => {
                    this.init();
                });
            });
        }
    }
};
</script>


<style lang="scss" scoped>
section.post-list {
    max-width: 970px;
    columns: 400px;
    column-gap: 0;
    margin: 0 auto;
    height: 100%;
    div.post-wrapper {
        padding: 10px 10px;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid-column;
        padding: 10px;
        transform: scale(0.9);
        opacity: 0;
    }
    div.lazyload {
        transform: scale(1);
        opacity: 1;
        transition: opacity 0.5s, transform 0.5s, cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
        // transition-delay: 0.5s;
    }
}
</style>
