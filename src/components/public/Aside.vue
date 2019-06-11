<template lang="pug">
    aside.blog-aside.float-right
        section.blog-widget.about
            div.header Links
            div.content
                ul.entry
                    li 
                        a Lymon
                    li 
                        a(href="https://blog.nekokuro0xf.info/") 猫黑的游戏屋
</template>


<style lang="scss" scoped>
aside.blog-aside {
    width: 250px;
    box-sizing: border-box;
    ul.entry {
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
            a {
                text-decoration: none;
                padding: 0 20px;
                line-height: 36px;
                height: 36px;
                display: flex;
                color: #696969;
            }
        }
    }
}

@media screen and (max-width: 820px) {
    aside.blog-aside {
        width: 100%;
        margin: 20px 0 0;
    }
}

section.blog-widget {
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    
    div.header {
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 8px 20px;
        &:before {
            content: "#";
            margin-left: -10px;
            margin-right: 10px;
            color: #4caf50;
        }
    }

    div.content {
        padding: 10px 0;
        border-top: 1px solid rgba(65, 65, 65, 0.1);
    }
}

</style>
