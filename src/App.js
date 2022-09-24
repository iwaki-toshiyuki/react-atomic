import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "yakan",
  image: "https://source.unsplash.com/random",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://aaaaaa"
};
export default function App() {
  return <Router />;
}
