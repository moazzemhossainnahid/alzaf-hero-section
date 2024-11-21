import React from "react";
import useSWR from "swr";
import CategoryItem from "./CategoryItem";

interface Category {
  id: number;
  title: string;
  parent_id: number;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Category: React.FC = () => {
  const { data: categories, error, isLoading } = useSWR<Category[]>(
    "https://api.shope.com.bd/api/v1/public/hero-categories",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <div className="w-fit bg-white text-[#2E2E2E] border-x relative py-2 text-[12px]">
      <ul className="min-w-60 h-full">
        {categories?.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Category;
