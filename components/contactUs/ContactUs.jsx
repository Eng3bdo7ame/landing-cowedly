"use client";
import React from 'react'
import Image from 'next/image';
// import { CgArrowLongUp } from "react-icons/cg";
import UPphoto from "../../public/Group 143725869.svg";
import Dowenphoto from "../../public/Group.svg";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function ContactUs() {

    function toggleButton(button) {
        button.classList.toggle('bg-[#3F3F3F]');
        button.classList.toggle('text-[#fff]');

        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('bg-[#3F3F3F]', 'text-[#fff]');
            }
        });
    }

    return (

        <div className="xl:container mx-auto grid grid-cols-12 items-center mt-20 max-w-6xl max-lg:max-w-3xl rounded-lg orbitron">

            <div className="hidden lg:block lg:col-span-3    mt-8 ">
                <div className="w-48 h-52 relative mx-auto lg:mx-0">
                    <div className="w-15 h-15 rounded-full bg-[#5665AE] absolute top-2 left-12 lg:left-48 z-[-1]"></div>
                    <Image src={UPphoto} alt="contact" width={196.65} height={207.28} />
                </div>
                <div className="mb-6 text-center lg:text-left">
                    <h4 className="text-[#898989] text-right text-[16px] font-semibold">الهاتف</h4>
                    <p className="text-right font-semibold">+20 1029889524</p>
                </div>
                <div className="text-center lg:text-left">
                    <h4 className="text-right text-[#898989] text-[16px] font-semibold">البريد الالكتروني</h4>
                    <p className="text-right font-semibold">info@cowdly.com</p>
                </div>
            </div>


            <div className="lg:col-span-9 col-span-12 w-full items-center gap-14 sm:p-8 p-4 font-sans text-end">
                <div className="">
                    <h1 id='contact' className="text-3xl text-[#5665AE] text-[28px] lg:text-[58px] font-semibold leading-[42px] lg:leading-[58px] pb-5">تواصل معنا</h1>
                    <p className="text-sm font-semibold text-gray-800 mb-5">كيف يمكننا مساعدتك</p>

                    <div className="flex justify-end mb-20 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex lg:flex-wrap">
                        <button type="button" className="px-4 py-2 mb-4 lg:mb-0 rounded-full text-[#3F3F3F] leading-[42px] text-[15px] tracking-wider font-semibold outline-none border-2 border-gray-300" onClick={(e) => toggleButton(e.target)}>Product Design</button>
                        <button type="button" className="px-4 py-2 mb-4 lg:mb-0 rounded-full text-[#3F3F3F] leading-[42px] text-[15px] tracking-wider font-semibold outline-none border-2 border-gray-300" onClick={(e) => toggleButton(e.target)}>Website Development</button>
                        <button type="button" className="px-4 py-2 rounded-full text-[#3F3F3F] leading-[42px] text-[15px] tracking-wider font-semibold outline-none border-2 border-gray-300" onClick={(e) => toggleButton(e.target)}>Mobile Apps Development</button>
                    </div>

                    <form>
                        <div className="space-y-4 mt-8 t">
                            <input type="text" placeholder="الاسم بالكامل" className="text-right text-xl px-2 py-3 bg-white w-full text-gray-800 border-b border-gray-300 focus:border-blue-600 outline-none" />

                            <input type="email" placeholder="البريد الالكتروني" className="text-right text-xl px-2 py-3 bg-white w-full text-gray-800 border-b border-gray-300 focus:border-blue-600 outline-none" />

                            <textarea placeholder="وصف المشروع " className="text-right text-xl px-2 pt-3 bg-white w-full text-gray-800 border-b border-gray-300 focus:border-blue-600 outline-none"></textarea>
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button type="button" className="flex items-center justify-center text-sm w-32 h-12 rounded-full bg-[#5665AE] text-white">
                                <HiOutlineArrowRight className=" text-3xl" />
                            </button>
                            <div className="hidden lg:block">
                                <Image src={Dowenphoto} alt="contact" width={140} height={200} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
