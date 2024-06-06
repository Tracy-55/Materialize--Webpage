import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from './public/data.json';

export default defineConfig({
  plugins: [handlebars({
    context: {
      data
    }
  })],
  publicDir: 'public'
});
