import axios from '@/plugins/http';

const article = {
    // 获取文章列表
    getArticleList({page = 1, limit = 5} = {}) {
        return axios.get('/article/list', {
            params: {
                page,
                limit
            }
        })
    },

    // 获取文章内容
    getArticle(id) {
        return axios.get(`/article/${id}`);
    }
}

export default article;