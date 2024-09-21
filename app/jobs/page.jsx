"use client";
import { useState } from 'react';
import JobApplicationForm from './applyNow';
import JobCard from './jobsCard';

export default function Page() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // تخزين النص المدخل
    const [filteredQuery, setFilteredQuery] = useState(''); // تخزين النص المفلتر بعد البحث

    const handleApplyClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value); // تحديث حالة الإدخال
    };

    const handleSearch = () => {
        setFilteredQuery(searchQuery); // تعيين النص المدخل إلى النص المفلتر عند الضغط على البحث
    };

    return (
        <div className="mt-[150px] min-h-screen font-sans flex items-center justify-center" dir="rtl">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="text-right mb-4">
                    <span className="text-gray-500">الرئيسية / </span>
                    <span className="font-semibold">التوظيف</span>
                </div>

                <h1 className="text-4xl font-bold mb-8 text-right">التوظيف</h1>

                <div className="bg-[#5665AE] rounded-3xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="flex-grow bg-white rounded-full p-2 ml-2">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={searchQuery} // ربط البحث بحقل الإدخال
                                    onChange={handleSearchInputChange} // ميثود لتحديث الإدخال
                                    placeholder="ادخل كلمة البحث هنا..."
                                    className="text-[20px] font-medium bg-transparent p-2 border-none focus:outline-none flex-grow text-right text-black "
                                />
                            </div>
                        </div>
                        <button
                            className="bg-white text-black hover:bg-purple-100 rounded-full px-8 py-2 font-semibold"
                            onClick={handleSearch} // تعيين النص المفلتر عند الضغط
                        >
                            بحث
                        </button>
                    </div>

                    <div className="flex justify-between items-center space-x-4 rtl:space-x-reverse">
                        {/* باقي الخيارات */}
                        <select defaultValue="Question" className="select select-info w-full max-w-xs bg-white rounded-md p-3 ml-2 text-black">
                            <option disabled value="Question">عدد سنين الخبرة</option>
                            <option value="0:1"> 0 : 1 </option>
                            <option value="1:3">1 : 3</option>
                            <option value="3:5">3 : 5</option>
                            <option value="5:more">5 : أكثر</option>
                        </select>

                        <select defaultValue="Question" className="select select-info w-full max-w-xs bg-white rounded-md p-3 ml-2 text-black">
                            <option disabled value="Question">مدة العمل</option>
                            <option value="full">دوام كامل</option>
                            <option value="part">دوام جزئي</option>
                        </select>

                        <select defaultValue="Question" className="p-3 select select-info w-full max-w-xs bg-white rounded-lg ml-2 text-black">
                            <option disabled value="Question">نوع العمل</option>
                            <option value="office">في مقر الشركة</option>
                            <option value="remote">عن بعد</option>
                        </select>
                    </div>
                </div>

                <div className="mt-10">
                    <JobCard searchQuery={filteredQuery} onApplyClick={handleApplyClick} /> {/* تمرير النص المفلتر */}
                </div>
            </div>

            {isFormVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <JobApplicationForm onClose={handleCloseForm} />
                </div>
            )}
        </div>
    );
}
