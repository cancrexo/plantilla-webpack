// jao!
// En cuanto entraron....
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

	mode: 'production',

	output:{
		clean : true,
		filename :'main.[contenthash].js'
	},
	
	optimization:{
		minimize: true, 
		minimizer:[new CssMinimizerPlugin(), new TerserPlugin()]
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
			},

			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					presets: ['@babel/preset-env']
				  }
				}
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
            filename: '[name].[fullhash].css', // ou por exemplo se queres que ao compilar lle o nome  'nuevosestilo.css' 
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