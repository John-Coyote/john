import {Header} from "@widgets/Header/ui/Header.tsx";
import {AppRouter} from "@app/router/AppRouter.tsx";


function App() {
  return (
    <div className="app">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App
