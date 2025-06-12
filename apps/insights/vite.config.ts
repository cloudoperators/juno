import react from "@vitejs/plugin-react-swc"
import autoprefixer from "autoprefixer"

// https://vite.dev/config/
export default () => {
  return {
    plugins: [react()],
    define: {
      global: "window",
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  }
}
