<template lang="pug">
    div.blog-container.clearfix
        div.float-left
            article.box-shadow.post(v-if="article")
                section.meta
                    h2.title 
                        a {{ article.title }}
                    time {{ util.formatTime(article.createdAt) }}
                section.article.typo
                    div.article-content(v-html="article.content")
                    div.article-tags
                        a(v-for="item in article.tags.tag_name" :key="item") {{ item }}
        blog-aside

</template>

<script>
import highlightCode from "@/plugins/highlight";
import BlogAside from "@/components/public/Aside.vue";
export default {
    components: {
        BlogAside
    },
    props: ["id"],
    data() {
        return {
            article: null
        };
    },
    beforeCreate() {
        this.$store.commit("updateProgress", 0);
    },
    mounted() {
        this.getArticle();
        this.util.scrollToTop();
        this.$store.commit("updateProgress", 20);
    },
    updated() {
        highlightCode();
        this.$store.commit("updateProgress", 100);
    },
    methods: {
        getArticle() {
            this.$api.article.getArticle(this.id).then(res => {
                this.article = res;
            });
        }
    }
};
</script>


<style lang="scss" scoped>
article.post {
    background-color: #fff;
    margin: 0 auto;
    padding: 40px 30px;
    color: #464646;
}

section.meta {
    margin-bottom: 40px;
    h2.title {
        font-size: 2rem;
        margin: 0 0 0.4em 0;
        a {
            line-height: 1.25;
            font-weight: normal;
            color: #464646;
        }
    }
    time {
        color: #b5b5b5;
        font-size: 0.75rem;
    }
}

.article-tags {
    padding: 10px 0;
    margin-top: 20px;
    a {
        color: #828282;
        &::before {
            content: "#";
        }
    }
}
</style>
