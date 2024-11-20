"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUp, AiOutlineUser } from "react-icons/ai";
import Category from "./Category";

const Header = () => {
    const [showCategory, setShowCategory] = useState(false);


    return (
        <header className="w-full">
            {/* Top Header */}
            <div className="bg-[#F0F1F1] py-2 text-sm">
                <div className="container mx-auto flex justify-between text-[#434343] items-center space-x-6 px-4">
                    <div className="flex items-center space-x-6">
                        <Link href="!#" className="hover:underline text-[#F97316] flex gap-2 items-center">
                            English
                            <AiOutlineUp size={12} />
                        </Link>
                        <Link href="/help-center" className="hover:underline flex gap-2 items-center">
                            Help Center
                        </Link>
                        <Link href="tel:0964781656" className="hover:underline flex gap-2 items-center">
                            Helpline: 0964781656
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="/become-seller" className="hover:underline flex gap-2 items-center">
                            Become a Seller
                        </Link>
                        <Link href="/order-track" className="hover:underline flex gap-2 items-center">
                            Order Track

                        </Link>
                        <Link href="/signin" className="hover:underline text-[#F97316] flex gap-2 items-center">
                            Sign up / Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white py-4 border-b shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-40 h-full relative" onMouseEnter={() => setShowCategory(true)}
                        onMouseLeave={() => setShowCategory(false)}>
                            <Image
                                src="/alzaf.png"
                                alt="Logo"
                                width={300}
                                height={16}
                                priority
                            />
                        {showCategory && (
                            <div className="absolute top-full left-0 w-max pt-4 z-50">
                                <Category />
                            </div>
                        )}
                    </div>

                    <div className="flex relative items-center border rounded-lg bg-gray-100 overflow-hidden w-full lg:w-2/4 mx-5 mt-2 lg:mt-0">
                        <input
                            type="text"
                            className="w-full py-2 px-3 outline-none bg-[#F0F1F1]"
                            placeholder="Search Product"
                        />
                        <button className="px-3 absolute right-0 top-0 h-full bg-[#F97316] text-white rounded-md">
                            <AiOutlineSearch />
                        </button>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <Link href="/account" className="text-gray-600 bg-gray-200 w-8 h-8 flex justify-center items-center rounded-lg hover:text-gray-900">
                            <AiOutlineUser size={20} />
                        </Link>
                        <Link href="/cart" className="text-gray-600 bg-gray-200 w-8 h-8 flex justify-center items-center rounded-lg hover:text-gray-900">
                            <AiOutlineHeart size={20} />
                        </Link>
                        <Link href="/wishlist" className="text-gray-600 bg-gray-200 w-8 h-8 flex justify-center items-center rounded-lg hover:text-gray-900">
                            <AiOutlineShoppingCart size={20} />
                        </Link>

                        <div className="">
                            <Link href="/">
                                <Image
                                    src="/cloud_storage.svg"
                                    alt="Cloud Storage"
                                    width={200}
                                    height={14}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
