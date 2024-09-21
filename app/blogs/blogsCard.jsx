import React from 'react'

export default function blogsCard() {
    return (
        <section class="py-24 ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                        <div class="flex items-center mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696244553.png" alt="Harsh image" class="rounded-lg w-full" />
                        </div>
                        <div class="block text-right">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">هذا النص يمكن استبداله بنص اخر</h4>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">بواسطه محمد هشام</h6>
                                <span class="text-sm text-indigo-600">منذ سنتين</span>
                            </div>
                        </div>
                    </div>
                    <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                        <div class="flex items-center mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696244579.png" alt="John image" class="rounded-lg w-full" />
                        </div>
                        <div class="block text-right">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">هذا النص يمكن استبداله بنص اخر</h4>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">بواسطه محمد هشام</h6>
                                <span class="text-sm text-indigo-600">منذ سنتين</span>
                            </div>
                        </div>
                    </div>
                    <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                        <div class="flex items-center mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696244619.png" alt="Alexa image" class="rounded-lg w-full" />
                        </div>
                        <div class="block text-right">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">هذا النص يمكن استبداله بنص اخر</h4>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">بواسطه محمد هشام</h6>
                                <span class="text-sm text-indigo-600">منذ سنتين</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" class="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</a>
            </div>
        </section>

    )
}
