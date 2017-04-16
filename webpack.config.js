const ngtools = require('@ngtools/webpack');

module.exports = {
	entry: {
		main: __dirname + '/src/main.server.ts',
        client: __dirname + '/src/main.browser.ts'
	},
	resolve: {
      extensions: ['.ts', '.js']
    },
	target: 'node',
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	plugins: [
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig.json',
		})
	],
	module: {
		rules: [
			{
              test: /\.ts$/,
              loader: '@ngtools/webpack',
            }
		]
	},
    node: {
        fs: false,
        timers: false
    }
}