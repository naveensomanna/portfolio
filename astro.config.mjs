import { defineConfig ,passthroughImageService} from "astro/config";
 import icon from "astro-icon";

export default defineConfig({
  integrations: [icon({
    iconDir: 'src/icons',
  })],
  image: {
    service: passthroughImageService(),
  },
});