import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyles } from "./styles/globals";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}