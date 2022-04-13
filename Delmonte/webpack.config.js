var path = require('path');
    var ExtractTextPlugin = require('sgmf-scripts')['extract-text-webpack-plugin'];
    var sgmfScripts = require('sgmf-scripts');

    module.exports = [{
        mode: 'production',
        name: 'js',
        entry: sgmfScripts.createJsPath(),
        output: {
            path: path.resolve('./cartridges/app_custom_sfmc/cartridge/static'),
            filename: '[name].js'
        }
    }, {
        mode: 'none',
        name: 'scss',
        entry: sgmfScripts.createScssPath(),
        output: {
            path: path.resolve('./cartridges/app_custom_sfmc/cartridge/static'),
            filename: '[name].scss'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }, {
                        loader: 'sass-loader',
						options: {
							includePaths: [
								path.resolve(process.cwd(), './node_modules/')
							]
						}
                    }]
                })
            }]
        },
        plugins: [
            new ExtractTextPlugin({ filename: '[name].css' })
        ]
    }];