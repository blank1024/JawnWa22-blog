<template lang="pug">
    div.blog-container.clearfix
        section.float-left
            div.post-list
                div.post-wrapper(v-for="(item, index) in articleList" :key="index" ref="post")
                    ArticleWrapper(:article="item")
        blog-aside

</template>


<script>
import ArticleWrapper from "@/components/home/ArticleWrapper.vue";
import BlogAside from "@/components/public/Aside.vue";
export default {
    components: {
        ArticleWrapper,
        BlogAside
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
    updated() {
        this.$store.commit('updateProgress', 100);
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
section {
    div.post-list {
        margin: -10px;
        columns: 400px;
        column-gap: 0;
        height: 100%;
        box-sizing: border-box;
    }
    div.post-wrapper {
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid-column;
        padding: 10px;
        transform: scale(0.9);
        opacity: 0;
        box-sizing: border-box;
    }
    div.lazyload {
        transform: scale(1);
        opacity: 1;
        transition: opacity 0.5s, transform 0.5s, cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    }
}

@media screen and (max-width: 820px) {
    div.post-list {
        margin: 0;
    }
}
</style>
