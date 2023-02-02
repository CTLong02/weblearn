import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes as routes } from './routes';
import { StoreProvider } from './store';

function App() {
    const [account, setAccount] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    return (
        <Router>
            <StoreProvider>
                <div className="App">
                    <Routes>
                        {routes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page setAccount={setAccount} setIsLogin={setIsLogin} />}
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </StoreProvider>
        </Router>
    );
}

export default App;
