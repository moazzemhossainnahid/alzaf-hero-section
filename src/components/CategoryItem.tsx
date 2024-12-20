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

      {category?.childrens && (
        <AiOutlineRight
          className={`mr-2 transform ${
            isHovered ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        />
      )}

      {category?.childrens && (
        <ul
          className={`absolute left-full top-0 h-full w-[230px] bg-white border-x py-4 origin-left transform transition-all duration-300 ease-in-out ${
            isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        >
          {category?.childrens.map((child) => (
            <CategoryItem key={child?.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
