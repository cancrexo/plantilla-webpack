const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

	mode: 'development',

	output:{
		clean:true
	},

	module: {

		// RULES

        rules:[

			{
                test: /\.html$/i, //
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                },
            },



			{
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ['style-loader', 'css-loader']
            },



			{
				test: /styles.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']

			},



			{
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'assets/img/[name].[ext]'
                    }
                }]
			}

		]
	},


	// PLUGINS

	plugins: [
        new HtmlWebPackPlugin({
			//title:'Ahi lo llevas', // no funciona!!
            //filename: './index.html',
			//inject: 'body'  //--> o script JS quearía dentro do body en ves de no <head>
        	template: './src/index.html',
        }),
		new MiniCssExtractPlugin({
            filename: '[name].css', // ou por exemplo se queres que ao compilar lle o nome  'nuevosestilo.css' 
            ignoreOrder: false
        }),
		new CopyPlugin({
            patterns: [
				//{ from: "other", to: "public" },
                { from: 'src/assets', to: 'assets/' }
			]
        }),
    ]

}