import React from 'react';
import DateIcon from '../../assets/icons8-date-1-48.png'
import budgetIcon from '../../assets/icons8-money-100.png'
import ViewIcon from '../../assets/icons8-view-50.png'

const TaskCard = () => {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="p-4">
                <h1 className='flex justify-center mb-4 bg-slate-600 text-white font-bold text-3xl'>Project Details</h1>
                <h1 className="flex justify-center bg-gray-100 mb-1 text-slate-800 text-xl font-semibold">
                    Title
                </h1>
                <p className="flex justify-center mb-2 text-slate-600 leading-normal font-light">
                </p>
                    description
                <h1 className='flex mb-2'>
                <img src={DateIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                    Start Date
                </h1>
                <h1 className='flex mb-2'>
                <img src={DateIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                    End Date
                </h1>
                <h1 className='flex mb-2'>
                <img src={budgetIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                    Budget
                </h1>
                <div className='flex justify-center gap-9'>
                <button className="flex rounded-md bg-orange-600 py-2 px-10 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-orange-700  active:bg-orange-700 hover:bg-orange-700 ">
                    <img src={ViewIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                        view task
                </button>
                <button className="flex rounded-md bg-orange-600 py-2 px-10 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-orange-700  active:bg-orange-700 hover:bg-orange-700 ">
                <img src={ViewIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                    view task
                </button>
                </div>
                <div className='flex justify-center'>
                    <button className="flex rounded-md bg-orange-600 py-2 px-10 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-orange-700  active:bg-orange-700 hover:bg-orange-700 ">
                    <img src={ViewIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                        view task
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TaskCard;