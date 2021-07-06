let path=require('path')
module.exports={
	mode: 'development',
	entry:'./src/main.js',
	output:{
		path:path.join(__dirname,'dist'),
		filename:'main.js'
	},
	module:{
		rules: [
		  {
		    test: /\.css$/,
		     use: ['style-loader','css-loader'] 
		  },
		  {
		    test: /\.less$/,
		    use: ['style-loader','css-loader','less-loader'] 
		  },
		  {
		  	text:/\.(jpg|jpeg|png|gif)$/,
		  	use:[
			  	{
			  		loader:'url-loader',
			  		options:{
			  			limit:1000
			  		}
			  	}
			]
		  }
		]
	}
}