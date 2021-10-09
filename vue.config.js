const VERSION = JSON.stringify(require('./package.json').version);

// vue.config.js
module.exports = {
    configureWebpack: {
        devServer: {
            // clientLogLevel: 'info',
            watchOptions: {
                poll: true
            }
        },
        output: {
            libraryExport: 'default'
        },
    },
    chainWebpack: config => {
        config.plugin('define').tap(([options = {}]) => {
            return [{
                ...options, // these are the env variables from your .env file, if any arr defined
                VERSION
            }];
        });
    },
    pages: {
        index: {
            // entry for the page
            entry: './src/main.js',
            // the source template
            template: './public/index.html',
            // the output filename
            filename: 'index.html'
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'http://thecapsule.email/dist' : '/',
    assetsDir: './src/assets',
    outputDir: './dist'
};