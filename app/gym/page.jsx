
"use client";
import React, { useState } from 'react'


export default function Gym() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // إرسال البيانات هنا
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="lg:max-w-5xl md:w-6xl mx-auto min-h-screen ">
            <div className=" text-gray-800 min-h-screen p-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl text-red-400 font-bold">
                        برنامج ادارة العيادات الطبية Easy Clinic
                    </h1>
                    <p className="mt-4 leading-loose">
                        يعتبر برنامج ايزي كلينيك من أفضل وأسهل برامج إدارة العيادات والمراكز الطبية
                        لذلك يعتبر برنامج إدارة العيادات Easy Clinic الحل الأمثل لمساعدتك في تنظيم الدورة الطبية
                        والإدارية المالية داخل العيادة أو المركز الطبي الخاص بك. حيث يقدم برنامج إدارة العيادات
                        المساعدة للطبيب لإدارة عيادته الخاصة بنفسه، بأسلوب بسيط وسهل بعيدا عن التعقيدات والتفاصيل
                        الكثيرة. يتميز بسهولة الاستخدام والتسجيل حيث يتم اغلب التعامل مع برنامج العيادة باستخدام الماوس
                        ولا يحتاج البرنامج إلى أجهزة حاسوب ذات مواصفات عالية.
                    </p>
                </div>

                <div className="flex justify-center mb-10">
                    <img
                        src="/public/vite.svg"
                        alt="Easy Clinic"
                        className="w-full max-w-md border-2 border-white"
                    />
                </div>
            </div>


            <div className=" text-gray-800  p-10">
                <div className="flex flex-col md:flex-row justify-between">


                    {/* Details Section */}
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-xl text-red-400 font-bold mb-4">
                            كيفية ادارة العيادات والمراكز الطبية Easy Clinic
                        </h2>
                        <ul className="list-disc pl-4">
                            <li>ادارة شؤون المرضى.</li>
                            <li>ادارة ملف المريض.</li>
                            <li>قائمة السكرتيرة.</li>
                            <li>قائمة الطبيب.</li>
                            <li>ادارة العمليات.</li>
                            <li>ادارة الحسابات.</li>
                            <li>حسابات الشركات والمساعدين.</li>
                            <li>حسابات الشركات الخاصة والتأمين.</li>
                            <li>ادارة المشتريات.</li>
                            <li>تقرير العيادة.</li>
                        </ul>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/video-id"
                            title="Easy Clinic Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>


            <div className=" text-gray-800 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-red-400 mb-12">
                        أهم مميزات برنامج إدارة العيادات
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
                        {/* تسجيل بيانات المريض */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="تسجيل بيانات المريض" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">تسجيل بيانات المريض</h3>
                                <p className="text-gray-800">
                                    تسجيل جميع البيانات للمريض وإمكانية البحث عن المريض بالاسم، أو الرقم، أو العنوان
                                    وملف مرضي الأزرار واستعراضه عند كل زيارة.
                                </p>
                            </div>
                        </div>

                        {/* الطبيب */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="الطبيب" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">الطبيب</h3>
                                <p className="text-gray-800">
                                    معرفة مواعيد الكشف ومواعيد العمليات للطبيب، وتسجيل الجلسات الخاصة بالطبيب
                                    بشكل متكامل.
                                </p>
                            </div>
                        </div>

                        {/* إدارة ملفات المريض */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="إدارة ملفات المريض" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">إدارة ملفات المريض</h3>
                                <p className="text-gray-800">
                                    ملف شامل لكل بيانات المريض يشمل الاسم والأشعة والتحاليل والمعلومات والأوراق
                                    السابقة للمريض.
                                </p>
                            </div>
                        </div>

                        {/* إدارة العمليات */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="إدارة العمليات" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">إدارة العمليات</h3>
                                <p className="text-gray-800">
                                    تساعد إدارة العمليات الطبيب على تسجيل كافة البيانات الخاصة بالعمليات
                                    مثل اسم المريض وتفاصيل الجراحة.
                                </p>
                            </div>
                        </div>

                        {/* التقارير */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="التقارير" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">التقارير</h3>
                                <p className="text-gray-800">
                                    كافة التقارير التي تساعدك على إدارة العيادة بشكل أفضل مثل تقارير المرضى.
                                </p>
                            </div>
                        </div>

                        {/* إدارة الحسابات */}
                        <div className="flex items-start space-x-4">
                            <img src="/public/vite.svg" alt="إدارة الحسابات" className="w-16 h-16" />
                            <div>
                                <h3 className="text-2xl font-bold">إدارة الحسابات</h3>
                                <p className="text-gray-800">
                                    قائمة الحسابات التي تساعدك في تسجيل كافة المدفوعات والتعاملات المالية
                                    الخاصة بالعيادة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    {/* Title Section */}
                    <h2 className="text-4xl font-extrabold text-red-600 mb-4">
                        مميزات اضافية
                    </h2>
                    <h3 className="text-2xl font-semibold text-red-500 mb-8">
                        برنامج إدارة العيادات والمراكز الطبية
                    </h3>

                    {/* Features List */}
                    <div className="text-right max-w-5xl mx-auto text-lg leading-8 space-y-3 mb-12">
                        <p>✅ يمكن للطبيب الاطلاع على عدد الحالات الخاصة به في أي وقت وجداول الزيارات لجميع أنواع الكشوفات الخاصة به في حالة إذا كان يتعامل بالنسخة.</p>
                        <p>✅ إمكانية عمل كشف سريع المريض يشمل اسم المريض والطبيب، المبلغ، وضع الكشف وسعره وشعار العيادة وخاتمتها.</p>
                        <p>✅ طباعة روشتة المريض.</p>
                        <p>✅ طباعة تقارير الجلسات وتفاصيل المريض وسجل كامل يشمل كافة بياناته.</p>
                        <p>✅ يدعم البرنامج جميع تخصصات الاطباء الطبية.</p>
                        <p>✅ إمكانية الاطلاع على حالة الادوية وأسماء الادوية.</p>
                        <p>✅ ادارة شئون الموظفين حيث يمكن للمسؤول تحديد الصلاحيه العامه  للموظفين في العيادة.</p>
                        <p>✅ إمكانية البحث عن مريض بسهولة تامة باستخدام النظام (Autocomplete) أثناء إدخال بيانات المريض عند التسجيل لأول مرة.</p>
                        <p>✅ يمكن إنشاء تذكرة جديدة لجميع المرضى وتسجيل كل التفاصيل الخاصة بهم بشكل كامل.</p>
                        <p>✅ أمكانية التحكم في تسجيل بيانات جميع المرضى وضمان انشاء روشتة الكترونية كاملة.</p>
                        <p>✅ إمكانية طباعة التقارير والمصروفات والإيصالات وتحليل البيانات ومعالجة الادخالات والمخرجات وتفاصيل الحسابات.</p>
                    </div>

                    {/* Management Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-bold text-red-600 mb-4">
                                إدارة ملف المريض
                            </h4>
                            <ul className="text-right text-lg space-y-2 leading-8">
                                <li>✅ يساعد ملف المريض المتكامل على معرفة سجل المريض السابق حيث يمكنك عرض كافة بيانات المريض.</li>
                                <li>✅ عرض الوصفات والاشعات والتحاليل السابقة للمريض.</li>
                                <li>✅ إمكانية التحكم الكامل في بيانات المريض والملاحظات الخاصة به.</li>
                                <li>✅ التحكم في بيانات وتفاصيل الجلسات والكشوفات السابقة.</li>
                                <li>✅ إمكانية ادخال بيانات اضافية لكل مريض.</li>
                                <li>✅ إمكانية استعراض تقرير كامل ومفصل لكل مريض.</li>
                                <li>✅ دعم طباعة الروشتات والتحاليل والاشعات بشكل سريع.</li>
                                <li>✅ نظام البحث الذكي الذي يسهل الوصول إلى المريض بسرعة سواء بالاسم أو الرقم أو العنوان أو نوع الكشف.</li>
                            </ul>
                        </div>


                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-bold text-red-600 mb-4">
                                إدارة شؤون المرضى
                            </h4>
                            <ul className="text-right text-lg space-y-2 leading-8">
                                <li>✅ واجهة مستخدم سهلة الاستخدام تمكن موظفي الاستقبال من:</li>
                                <li>✅ تسجيل كل البيانات الخاصة بالمرضى.</li>
                                <li>✅ إمكانية تعديل البيانات (إضافة – تعديل – حذف).</li>
                                <li>✅ طباعة التقارير والفواتير الخاصة بالمرضى.</li>
                                <li>✅ التحكم الكامل في بيانات المريض من حيث تسجيل الدفعات والمدفوعات.</li>
                                <li>✅ النظام يقوم بتخزين جميع البيانات الخاصة بكل زيارة يقوم بها المريض، ويمكن الرجوع إليها في أي وقت.</li>
                                <li>✅ يدعم تعدد المستخدمين مع التحكم في الصلاحيات لكل مستخدم على النظام.</li>
                                <li>✅ تكامل مع النظام المالي والحسابات.</li>
                                <li>✅ طباعة التقارير المالية والإيصالات بشكل مفصل وسريع.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-red-600 mb-8">
                        تخصصات برنامج العيادات الطبية
                    </h2>

                    {/* Specialties Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            'برنامج إدارة العيادات العامة',
                            'برنامج إدارة عيادات الأسنان',
                            'برنامج إدارة عيادات الأطفال',
                            'برنامج إدارة عيادات القلب والصدر',
                            'برنامج إدارة عيادات العيون',
                            'برنامج إدارة عيادات النساء والولادة',
                            'برنامج إدارة عيادات العظام',
                            'برنامج إدارة عيادات الأنف والأذن والحنجرة',
                            'برنامج إدارة عيادات الجلدية والتجميل',
                            'برنامج إدارة عيادات العلاج الطبيعي',
                        ].map((specialty, idx) => (
                            <button
                                key={idx}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                            >
                                {specialty}
                            </button>
                        ))}
                    </div>

                    {/* Program Features Title */}
                    <h3 className="text-2xl font-bold text-red-600 mb-8">
                        شروحات برنامج إدارة العيادات Easy Clinic
                    </h3>

                    {/* Program Features Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['شؤون المرضى', 'السكرتارية', 'الطبيب', 'الحسابات', 'التقرير', 'المشتريات', 'الموظفين'].map((feature, idx) => (
                            <button
                                key={idx}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                {feature}
                            </button>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="text-center mb-12">
                        <div className="bg-red-500 text-white px-6 py-4 rounded-lg inline-block mb-4">
                            للتواصل مع المبيعات
                        </div>
                        <div className="flex justify-center gap-4">
                            <a href="https://wa.me/whatsapp_number" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                                تواصل على الواتساب
                            </a>
                            <a href="tel:01219909218" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                01219909218
                            </a>
                        </div>
                    </div>

                    {/* Free Trial Section */}
                    <h3 className="text-2xl font-bold text-red-600 mb-8">
                        الحصول على النسخة التجريبية مجانا والسعر
                    </h3>

                    {/* Free Trial Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* First Column */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/public/vite.svg" // استبدل بمسار الأيقونة
                                alt="تحميل النسخة التجريبية"
                                className="w-16 h-16 mb-4"
                            />
                            <p className="text-lg font-semibold">يتم إرسال النسخة التجريبية والسعر والشروحات</p>
                        </div>

                        {/* Second Column */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/public/vite.svg"// استبدل بمسار الأيقونة
                                alt="تواصل التفاصيل"
                                className="w-16 h-16 mb-4"
                            />
                            <p className="text-lg font-semibold">يتم التواصل لتوضيح تفاصيل البرنامج</p>
                        </div>

                        {/* Third Column */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/public/vite.svg" // استبدل بمسار الأيقونة
                                alt="تسجيل بيانات"
                                className="w-16 h-16 mb-4"
                            />
                            <p className="text-lg font-semibold">سجل بياناتك واحصل على خصم</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="py-16">
                <div className="container mx-auto px-6">
                    {/* Title Section */}
                    <h2 className="text-3xl font-bold text-right text-red-600 mb-4">
                        اطلب البرنامج الآن
                    </h2>
                    <p className="text-right text-gray-600 mb-8">
                        أفضل شركة ببرمجيات لإدارة أنشطتك التجارية
                    </p>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-gray-700 mb-2">الاسم بالكامل</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500"
                                placeholder="الاسم بالكامل"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-gray-700 mb-2">البريد الإلكتروني</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500"
                                placeholder="البريد الإلكتروني"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="phone" className="text-gray-700 mb-2">رقم الهاتف</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500"
                                placeholder="رقم الهاتف / واتس أب"
                            />
                        </div>

                        {/* Country Field */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="country" className="text-gray-700 mb-2">الدولة</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500"
                                placeholder="الدولة"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="col-span-2 flex flex-col mb-4">
                            <label htmlFor="message" className="text-gray-700 mb-2">رسالتك</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-red-500"
                                placeholder="اكتب رسالتك"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition duration-300"
                            >
                                إرسال
                            </button>
                        </div>
                    </form>

                    {/* Rating Section */}
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600">93</span>
                            <span className="text-gray-600">4.6</span>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, idx) => (
                                    <span key={idx} className="text-yellow-500">★</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">شارك الصفحة</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-whatsapp"></i></a>
                            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
