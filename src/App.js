import "./App.css";
import Trivia from "./Trivia";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const client = new QueryClient({});
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Trivia />
      </QueryClientProvider>
    </div>
  );
}
