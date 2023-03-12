const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
    //下面的配置和脚手架webpack合并
    webpack: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'store':path.resolve(__dirname,'src/store'),
            'assets':path.resolve(__dirname, 'src/assets'),
        }
    },

    //配置less
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ]
}