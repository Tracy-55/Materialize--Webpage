import data from "./data.json";
// assert {type:'json'};
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [handlebars({
      context : data
    })]
  };