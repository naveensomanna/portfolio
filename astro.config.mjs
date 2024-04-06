import { defineConfig ,passthroughImageService} from "astro/config";
 import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
  image: {
    service: passthroughImageService(),
  },
});