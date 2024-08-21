import Header from "./components/Header";
import '../src/index.css'
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import swiggyStore from "./store/appStore";

const App = () => {
    return (
        <Provider store={swiggyStore}>
            <Header />
            <Outlet />
        </Provider>
    )
}

export default App;