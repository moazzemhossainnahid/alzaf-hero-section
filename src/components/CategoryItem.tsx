import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

interface Category {
  id: number;
  title: string;
  parent_id: number;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="pl-2 pt-2 flex justify-between items-center cursor-pointer hover:text-[#F97316] text-[#2E2E2E]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{category?.title}</span>
      {category?.childrens && <AiOutlineRight className="mr-2" />}

      {isHovered && category?.childrens && (
        <ul className="absolute h-full min-w-60 left-full top-0 bg-white border-x py-4">
          {category?.childrens?.map((child) => (
            <CategoryItem key={child?.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
