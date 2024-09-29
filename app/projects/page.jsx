"use client";
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description, buttonLabel }) => {
    return (

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <a href="gym/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                {buttonLabel}
            </a>
        </div>

    );
};

const ProductList = () => {
    const products = [
        {
            image: "/image 149.svg", // Example image URL
            title: "نظام سكول ستوري - إدارة المدارس",
            description: "نظام سكول ستوري - إدارة المدارس هو نظام متكامل لإدارة المدارس يستخدم أحدث التقنيات لتبسيط وتحديث جميع جوانب البيئة التعليمية...",
            buttonLabel: "قراءة المزيد"
        },
        {
            image: "/image 149.svg",
            title: "تطبيق قرآني - قراءة القرآن",
            description: "تطبيق قرآني - قراءة القرآن باستخدام الذكاء الاصطناعي...",
            buttonLabel: "قراءة المزيد"
        },
        {
            image: "/image 149.svg",
            title: "نظام أهل القرآن - تيسير التعليم القرآني",
            description: "منصة متكاملة لإدارة حلقات تعليم القرآن الكريم، توفر النظام حلاً شاملاً لدعم المعلمين...",
            buttonLabel: "قراءة المزيد"
        },
        {
            image: "/image 149.svg",
            title: "تطبيق تيسير - تعليم القرآن الكريم",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...",
            buttonLabel: "قراءة المزيد"
        },
        {
            image: "/image 149.svg",
            title: "نظام تنافس - إدارة المسابقات القرآنية",
            description: "نظام تنافس - إدارة المسابقات القرآنية هو نظام يمكن أن يستبدل في نفس المساحة...",
            buttonLabel: "قراءة المزيد"
        },
        {
            image: "/image 149.svg",
            title: "منصة سهل - إدارة الجمعيات",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...",
            buttonLabel: "قراءة المزيد"
        },
    ];

    return (
        <div className="lg:max-w-6xl md:max-w-3xl max-w-xl mx-auto py-[150px] text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">اكتشف جميع منتجاتنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        buttonLabel={product.buttonLabel}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
