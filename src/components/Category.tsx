import React, { useState } from "react";
import { categories } from "./Data/Categories";
import { AiOutlineRight } from "react-icons/ai";

const Category = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null);

    return (
        <div className="w-fit bg-white text-[#2E2E2E] border-x relative py-4">
            <ul className="min-w-64">
                {categories?.map((category, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => setHoveredCategory(category?.name || null)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className="pl-2 flex justify-between items-center cursor-pointer hover:text-[#F97316] text-[#2E2E2E]"
                    >
                        <span>{category?.name}</span>
                        {category?.subCategories && (
                            <AiOutlineRight className="text-sm mr-2" />
                        )}

                        {/* Subcategories */}
                        {hoveredCategory === category?.name && category?.subCategories && (
                            <ul className="absolute min-w-60 left-full top-0 border-x bg-white py-4">
                                {category?.subCategories?.map((subCategory, subIndex) => (
                                    <li
                                        key={subIndex}
                                        onMouseEnter={() => setHoveredSubCategory(subCategory?.name || null)}
                                        onMouseLeave={() => setHoveredSubCategory(null)}
                                        className="pl-2 flex justify-between items-center cursor-pointer hover:text-[#F97316] text-[#2E2E2E]"
                                    >
                                        <span>{subCategory?.name}</span>
                                        {subCategory?.nastedSubcategories && (
                                            <AiOutlineRight className="text-sm mr-2" />
                                        )}

                                        {hoveredSubCategory === subCategory?.name && subCategory?.nastedSubcategories && (
                                            <ul className="absolute left-full min-w-60 top-0 bg-white border-x py-4">
                                                {subCategory?.nastedSubcategories?.map((nested, nestedIndex) => (
                                                    <li
                                                        key={nestedIndex}
                                                        className="hover:text-[#F97316] text-[#2E2E2E] cursor-pointer px-2"
                                                    >
                                                        {nested?.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
