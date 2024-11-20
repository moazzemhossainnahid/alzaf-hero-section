import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}


const Category: React.FC = () => {

    
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<number | null>(null);
  const [hoveredNested, setHoveredNested] = useState<number | null>(null);
  const [hoveredNestedLevel2, setHoveredNestedLevel2] = useState<number | null>(null);
  


  const { data: categories, error, isLoading } = useSWR<Category[]>(
    "https://api.shope.com.bd/api/v1/public/hero-categories",
    fetcher
  );



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <div className="w-fit bg-white text-[#2E2E2E] border-x relative py-4">
      <ul className="min-w-64 h-full">
        {categories?.map((category) => (
          <li
            key={category.id}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="pl-2 pt-2 flex justify-between items-center cursor-pointer hover:text-[#F97316] text-[#2E2E2E]"
          >
            <span>{category?.title}</span>
            {category?.childrens && <AiOutlineRight className="text-sm mr-2" />}

            {/* Subcategories */}
            {hoveredCategory === category?.id && category?.childrens && (
              <ul className="absolute h-full min-w-60 left-full top-0 border-x bg-white py-4">
                {category?.childrens?.map((subCategory) => (
                  <li
                    key={subCategory?.id}
                    onMouseEnter={() => setHoveredSubCategory(subCategory?.id)}
                    onMouseLeave={() => setHoveredSubCategory(null)}
                    className="pl-2 pt-2 flex justify-between items-center cursor-pointer hover:text-[#F97316] text-[#2E2E2E]"
                  >
                    <span>{subCategory?.title}</span>
                    {subCategory?.childrens && <AiOutlineRight className="text-sm mr-2" />}

                    {hoveredSubCategory === subCategory?.id && subCategory?.childrens && (
                      <ul className="absolute h-full left-full min-w-60 top-0 bg-white border-x py-4">
                        {subCategory?.childrens?.map((nested) => (
                          <li
                            key={nested?.id}
                            onMouseEnter={() => setHoveredNested(nested?.id)}
                            onMouseLeave={() => setHoveredNested(null)}
                            className="hover:text-[#F97316] text-[#2E2E2E] flex justify-between items-center cursor-pointer pt-2 px-2"
                          >
                            {nested?.title}
                            {nested?.childrens && <AiOutlineRight className="text-sm mr-2" />}

                            {/* Nested Level 2 */}
                            {hoveredNested === nested?.id && nested?.childrens && (
                              <ul className="absolute h-full left-full min-w-60 top-0 bg-white border-x py-4">
                                {nested?.childrens?.map((nestedLevel2) => (
                                  <li
                                    key={nestedLevel2?.id}
                                    onMouseEnter={() => setHoveredNestedLevel2(nestedLevel2?.id)}
                                    onMouseLeave={() => setHoveredNestedLevel2(null)}
                                    className="hover:text-[#F97316] text-[#2E2E2E] flex justify-between items-center cursor-pointer pt-2 px-2"
                                  >
                                    {nestedLevel2?.title}
                                    {nestedLevel2?.childrens && (
                                      <AiOutlineRight className="text-sm mr-2" />
                                    )}

                                    {/* Nested Level 3 */}
                                    {hoveredNestedLevel2 === nestedLevel2?.id &&
                                      nestedLevel2?.childrens && (
                                        <ul className="absolute h-full left-full min-w-60 top-0 bg-white border-x py-4">
                                          {nestedLevel2?.childrens?.map((nestedLevel3) => (
                                            <li
                                              key={nestedLevel3?.id}
                                              className="hover:text-[#F97316] text-[#2E2E2E] cursor-pointer pt-2 px-2"
                                            >
                                              {nestedLevel3?.title}
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
