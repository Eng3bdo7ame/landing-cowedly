import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineClose } from "react-icons/md";

const JobApplicationForm = ({ onClose }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [resume, setResume] = useState(null);
    const [resumeName, setResumeName] = useState(''); // State to hold the file name
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setResume(file);
        setResumeName(file ? file.name : ''); // Update the file name state
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('contactNumber', contactNumber);
        formData.append('resume', resume);

        try {
            const response = await axios.post('https://dashboard.cowdly.com/api/employment/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setSubmissionStatus('تم إرسال طلبك بنجاح!');
                setFullName('');
                setEmail('');
                setContactNumber('');
                setResume(null);
                setResumeName('');
            } else {
                setSubmissionStatus('حدث خطأ أثناء إرسال الطلب.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('حدث خطأ أثناء إرسال الطلب.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-[50%] bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-gray-200 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-right">قدم الآن!</h2>
                <button
                    onClick={onClose}
                    className="text-2xl text-gray-500 hover:text-gray-700"
                >
                    <MdOutlineClose />
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-right font-medium text-gray-700 mb-2 text-lg">
                        اسمك الكامل
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                        placeholder="اكتب اسمك هنا"
                        required
                    />
                </div>

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="w-full sm:w-1/2">
                        <label className="block text-right font-medium text-gray-700 mb-2 text-lg">
                            الايميل
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                            placeholder="ادخل الايميل"
                            required
                        />
                    </div>

                    <div className="w-full sm:w-1/2">
                        <label className="block text-right font-medium text-gray-700 mb-2 text-lg">
                            رقم التواصل
                        </label>
                        <input
                            type="text"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                            placeholder="ادخل رقم التواصل"
                            required
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-right font-medium text-gray-700 mb-2 text-lg">
                        السيرة الذاتية
                    </label>
                    <div className="flex flex-col items-center w-full">
                        <label
                            htmlFor="resume-upload"
                            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer bg-purple-50 border-purple-300 hover:bg-purple-100"
                        >
                            <svg
                                className="w-12 h-12 mb-3 text-purple-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 7l5-5m0 0l5 5m-5-5v14m7-7H5"
                                />
                            </svg>
                            <span className="text-lg text-purple-500">
                                {resumeName ? resumeName : 'قم برفع سيرتك الذاتية'}
                            </span>
                            <input
                                id="resume-upload"
                                type="file"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:opacity-90 transition-opacity duration-300 text-lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
                </button>
            </form>

            {submissionStatus && (
                <div className={`mt-4 text-center text-lg font-semibold ${submissionStatus.includes('نجاح') ? 'text-green-500' : 'text-red-500'}`}>
                    {submissionStatus}
                </div>
            )}
        </div>
    );
};

export default JobApplicationForm;
