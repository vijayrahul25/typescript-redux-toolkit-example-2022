import React from "react";

import {
  loadCategories,
  categoriesData,
} from "../../redux/slice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { category } from "./../../types.d/common.types.d";

import { CategoryCard } from "./CategoryCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

export const CategoryList: React.FC = () => {
  const { categoryList, loading, error } = useAppSelector(categoriesData);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (loading.status) return <Loader loading={loading} />;
  if (error.status) return <Error error={error} />;
  if (categoryList.length <= 0) return <NoData />;
  console.log("category list: ", categoryList);
  return (
    <div className="row">
      {categoryList.map((category: category) => (
        <CategoryCard key={category.cid} category={category} />
      ))}
    </div>
  );
};
