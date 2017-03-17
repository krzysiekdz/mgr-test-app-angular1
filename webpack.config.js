module.exports = {
	entry: './src/index.js',
	output: {
		path: './public',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: ['/node_modules/', '/public/'],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};