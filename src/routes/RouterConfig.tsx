import { Route, Routes } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/error/NotFound";
import GuestRoute from "./GuestRoute";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import { INTRODUCTION_PATH } from "./constant";
import Introduction from "@/pages/Introduction";
import Event from "@/pages/event/Event";
import Blog from "@/pages/blog/Blog";
import Stores from "@/pages/stores/Stores";
import Shop from "@/pages/shop/Shop";
import ProductDetail from "@/pages/shop/ProductDetail";
import BlogDetail from "@/pages/blog/BlogDetail";
import EventDetail from "@/pages/event/EventDetail";

type Props = {};

export const ROLES = {
  USER: "0",
  ADMIN: "1",
};
const RouterConfig = (props: Props) => {
  return (
    <Routes>
      {/* Add error, loading */}

      {/* public routes */}
      <Route element={<LayoutRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Event />} />
        <Route path="blog" element={<Blog />} />
        <Route path="store" element={<Stores />} />
        <Route path="/store/:id/detail" element={<Shop />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path={INTRODUCTION_PATH} element={<Introduction />} />
        <Route path="/store/:id/detail/:product" element={<ProductDetail />} />
        {/* For user */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.USER]} />}>
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
        </Route>
        {/* For Admin */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
