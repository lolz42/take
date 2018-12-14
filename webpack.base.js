const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
// const production = process.env.NODE_ENV === 'production';
const ManifestPlugin = require("webpack-manifest-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require("glob");
// the path(s) that should be cleaned
const pathsToClean = ["dist", "*.html", "*.css"];

// the clean options to use
const cleanOptions = {
  root: path.resolve(__dirname),
  exclude: ["shared.js"],
  verbose: true,
  dry: false
};

module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),

    // publicPath: "dist/"

    // nOTE: DEVELOPMENT
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader",
            options: {
              // url: false,
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader",
            options: {
              debug: true,
              sourceMap: true,
              engine: "rework"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },

      {
        test: /\.html$/,
        loader: "html-loader"
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash].[ext]"
            }
          }
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 91
          //     },
          //     // optipng.enabled: false will disable optipng
          //     optipng: {
          //       enabled: true,
          //     },
          //     pngquant: {
          //       quality: '91',
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //
          //   }
          //   },
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[id].[contenthash].css"
    }),
    new PurifyCSSPlugin({
      // give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, "src/*.html"))
    }),
    new webpack.HashedModuleIdsPlugin(),

    // new HtmlCriticalWebpackPlugin({
    //   base: path.resolve(__dirname, "dist"),
    //   src: "../index.html",
    //   dest: "../index.html",
    //   inline: true,
    //   minify: false,
    //   extract: false,
    //   width: 375,
    //   height: 565,
    //   penthouse: {
    //     blockJSRequests: false
    //   }
    // }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      // filename: "../index.html",
      // nOTE: DEVELOPMENT

      filename: "index.html",
      minify: {
        // collapseWhitespace: true,
        // removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true
      }
    }),

    //   new HtmlWebpackPlugin({
    //   template: 'src/sing_up.html',
    //   // filename: '../index.html',
    //   // nOTE: DEVELOPMENT
    //
    //   filename: 'sing_up.html',
    //   minify: {
    //     // collapseWhitespace: true,
    //     // removeComments: true,
    //     // removeRedundantAttributes: true,
    //     // removeScriptTypeAttributes: true,
    //     // removeStyleLinkTypeAttributes: true,
    //     // useShortDoctype: true
    //   }
    // }),

    new ManifestPlugin({}),

    new webpack.HotModuleReplacementPlugin()
  ]
};
