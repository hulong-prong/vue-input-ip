import postcss from "rollup-plugin-postcss";
import vuePlugin from "rollup-plugin-vue";
import typescriptPlugin from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "package/IpInput/IpInput.ts",
  output: [
    {
      file: `dist/vue-ip-input.es.js`,
      format: "es",
    },
    {
      file: `dist/vue-ip-input.umd.js`,
      name: "vueIpInput",
      format: "umd",
    },
  ],
  plugins: [
    vuePlugin({
      include: "package/**/*.vue",
    }),
    postcss({
      extensions: [".css"],
      extract: false,
    }),
    typescriptPlugin(),
    resolve(),
    commonjs(),
  ],
};
