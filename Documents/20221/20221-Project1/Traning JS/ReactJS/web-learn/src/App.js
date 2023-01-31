import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes as routes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
