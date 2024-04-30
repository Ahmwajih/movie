// App.js
import './App.css';
import { MovieProvider } from "./context/ContextMovie"; // Assuming this is your Movie context
import { AuthProvider } from "./context/AuthContext";
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <MovieProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
