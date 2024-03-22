import MainLayout from "components/MainLayout";
import Group from "pages/Group";
import Home from "pages/Home";
import Item from "pages/Item";
import ItemsDetails from "pages/ItemsDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/group/:groupId?" element={<Group />} />
          <Route path="/item" element={<Item />} />
          <Route path="/item/:itemId?" element={<ItemsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
