const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		    {
			    test: /\.(js$|jsx)$/,
			    exclude: /node_modules/,
			    use: {
				loader: 'babel-loader',
				options: {
				    presets: ['@babel/preset-react']
		    		},
		    {
			    test: /\.css$/,
			    use: ['style-loader', 'css-loader']
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './index.html' })
	]
};
