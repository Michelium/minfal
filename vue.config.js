const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData : `@import "@/assets/css/_variables.scss";`
            }
        }
    }
}
