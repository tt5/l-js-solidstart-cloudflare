import solidStartCloudflareWorkers from "solid-start-cloudflare-workers";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({adapter: solidStartCloudflareWorkers()})],
});
