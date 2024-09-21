import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobCard({ searchQuery, onApplyClick }) {
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get('https://dashboard.cowdly.com/api/job/', {
                    headers: {
                        'Authorization': `Bearer c33d03a98589bb9a93ad461779e151ed320126d1`
                    }
                });

                setJobDetails(response.data); // ضبط البيانات بناءً على الاستجابة
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, []);

    // تصفية الوظائف بناءً على عنوان الوظيفة
    const filteredJobs = jobDetails.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) // الفلترة باستخدام قيمة البحث
    );

    return (
        <div className="flex flex-wrap gap-6">
            {Array.isArray(filteredJobs) && filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                    <div key={index} className="w-full lg:w-[49%] p-6 bg-white rounded-3xl shadow-lg border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-400 text-sm">
                                {new Date(job.createdDate).toLocaleDateString()} {/* تحويل التاريخ */}
                            </span>
                            <button
                                onClick={onApplyClick}
                                className="bg-[#6357A5] text-white py-2 px-4 rounded-full text-sm hover:bg-[#6254a1]"
                            >
                                قدم الآن
                            </button>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                        <p className="text-gray-500 mb-4">{job.description}</p>
                    </div>
                ))
            ) : (
                <p>لا توجد وظائف متاحة تطابق كلمة البحث.</p>
            )}
        </div>
    );
}

export default JobCard;
