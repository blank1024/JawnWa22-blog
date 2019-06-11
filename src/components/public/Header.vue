<template lang="pug">
    header(:class="{'loaded': progressBar.progress === 100}")
        nav.navbar(:class="{'fixed-top': fixed}")
            div.nav-wrapper
                div.logo 
                    router-link(to="/") JawnWa22
                div.menu
                    ul.nav-list
                        li 
                            router-link(to="/") Home
                        //- li 
                        //-     router-link(to="/") Archives
                        //- li 
                        //-     router-link(to="/") About
                //- ul.switcher
                //-     li.s-search
                //-         a
                //-     li.s-menu
        div.full-bg-img
            transition(name="fade")
                div.title(v-if="progressBar.progress === 100")
        Progress
                
</template>

<script>
import Progress from '@/components/public/Progress.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Progress
    },
    data() {
        return {
            fixed: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.scrollToFixed);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollToFixed);
    },
    methods: {
        scrollToFixed() {
            window.scrollY === 0 ? (this.fixed = false) : (this.fixed = true);
        }
    },
    computed: {
        ...mapState(['progressBar'])
    }
};
</script>


<style lang="scss" scoped>
header {
    user-select: none;
    height: 100vh;
    transition: height 1s;
    @media screen and (max-width: 820px) {
        height: 40px;
    }
    @media screen and (min-width: 820px) {
        &.loaded {
            height: 380px;
        }
    }
    nav.navbar {
        color: #fff;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 8888;
        background-color: #3367d6;;
        box-shadow: 0 2px 5px 0 rgba(44, 14, 14, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        @media screen and (min-width: 820px) {
            background-color: transparent;
            transition: background 0.5s ease-in-out;
        }
    }
    @media screen and (min-width: 820px) {
        nav.fixed-top {
            background-color: #3367d6;
        }
    }
    div.full-bg-img {
        height: 100%;
        background: url("/images/saber.jpg") no-repeat fixed top center;
        background-size: cover;
        display: table;
        width: 100%;
        @media screen and (max-width: 820px) {
            display: none;
        }
        div.title {
            color: #fff;
            margin: 0;
            display: table-cell;
            padding: 0 10px;
            text-align: center;
            vertical-align: middle;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
    a {
        text-decoration: none;
        color: #fff;
    }
}

div.nav-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    div.logo {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 1.3rem;
        padding: 0 20px;
    }
    div.menu {
        height: 100%;
        margin: 0 28px;
        @media screen and (max-width: 820px) {
            & {
                display: none;
            }
        }
    }
}

ul.nav-list {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    li {
        line-height: 50px;
        a {
            display: block;
            padding: 0 10px;
        }
    }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

