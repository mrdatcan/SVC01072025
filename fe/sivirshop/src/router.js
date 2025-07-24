import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/users/homepage";
import Profile from "../pages/users/profile";
import { ROUTERS } from "./router-path";
import MasterLayout from "./pages/users/theme/masterLayout";

// Hàm render các route cho user
const renderUserRouter = () => {
    const userRouter = [
        { path: ROUTERS.USER.HOME, component: <Homepage /> },
        { path: ROUTERS.USER.PROFILE, component: <Profile /> }
    ];
    return (
        <MasterLayout>  
        <Routes>
            {userRouter.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))}
        </Routes>
        </MasterLayout>
    );
}

const Routercustom = () => {
    return renderUserRouter();
}

export default Routercustom;