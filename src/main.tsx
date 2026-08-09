import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// vite-react-ssg drives both passes from this single entry:
//   - build time: renders each route to static HTML in Node
//   - client:     hydrates that HTML
// It mounts HelmetProvider internally, so no provider is needed here.
export const createRoot = ViteReactSSG({ routes });
