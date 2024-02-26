import RegisterUser from "./Components/RegisterUser.jsx";
import LoginUser from "./Components/LoginUser.jsx";
import { Route, Routes } from "react-router-dom";
import RootPage from "./Components/rootPage/RootPage.jsx";
import ProfilePage from "./Components/rootPage/ProfilePage.jsx";
import { UserContextProvider } from "./Components/extra/UserContext.jsx";
import axios from "axios";
import ProductDetails from "./Components/Products/ProductDetails.jsx";
import ProfilePageUpdate from "./Components/rootPage/ProfilePageUpdate.jsx";
function App() {
  axios.defaults.withCredentials = true;
  //to see cookies/token we generated from backend in website and for front end
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<RootPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile/update/email" element={<ProfilePageUpdate />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
