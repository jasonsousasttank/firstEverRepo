const path = require('path');

var DEV = path.resolve(__dirname, '');
var OUTPUT = path.resolve(__dirname, '');


var config = {
	entry: DEV + '/main.js',

	output: {
		path: OUTPUT,
		filename: 'index.js'
	},

	devServer: {
		inline: true,
		port: 8080
	},

	module: {
		loaders : [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]

	}
}

module.exports = config;
