/**
 * Created Date: 2019-06-07
 * Author: DarkReunion
 * @description 导出公用方法
 * @use
 *
 * Copyright (c) 2019 19cm_without_head Team
 */
import moment from "moment";

export default {
    formatTime(ISO_time) {
        return moment(ISO_time, moment.ISO_8601).format("YYYY-MM-DD HH:mm:ss");
    },
    scrollToContent() {
        if (!this.isMobile()) {
            window.scrollTo(0, document.body.offsetHeight - 40);
        }
    },
    isMobile() {
        let flag = navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        return flag;
    },
    scrollToTop() {
        if(!this.isMobile()) {
            window.scrollTo(0, 0);
        }
    }
};
