import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../app/store";
import { NavBar } from "../components/NavBar/NavBar";
import { fetchCategories } from "../features/CategoriesSlice";
import { fetchRestaurants } from "../features/RestaurantsSlice";

export const MainLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
