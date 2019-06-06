<template lang="pug">
    
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            article: null
        }
    },
    methods: {
        getArticle() {
            this.$api.article.getArticle(this.id).then( res => {
                
            })
        }
    }
}
</script>
