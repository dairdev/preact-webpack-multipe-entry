const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		home: "./src/home.js",
		setup: "./src/setup.js",
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].min.js",
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
		},
	},
};
