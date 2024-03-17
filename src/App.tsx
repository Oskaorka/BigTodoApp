import AuthProvider from 'app/provider/router/service/useAuth';
import AppRouter from 'app/provider/router/ui/AppRouter';

function App() {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    );
}

export default App;
