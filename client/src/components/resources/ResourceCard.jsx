import React from 'react';
import DateIcon from '../../assets/icons8-date-1-48.png'
import budgetIcon from '../../assets/icons8-money-100.png'
import ViewIcon from '../../assets/icons8-view-50.png'
// import Deleteproject from './Deleteproject';
// import UpdateProject from './Updateproject';
import { useNavigate } from 'react-router-dom'

const ResourceCard = ({e}) => {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="p-4" key={e.id}>
                <h1 className='flex justify-center mb-4 bg-slate-600 text-white font-bold text-3xl'>Resources Name</h1>
                <h1 className="flex justify-center bg-gray-100 mb-1 text-slate-800 text-xl font-semibold">
                    Name : {e.Rname}
                </h1>
                <h1 className='flex justify-center mb-4 bg-slate-600 text-white font-bold text-3xl'>Resources Type</h1>
                <h1 className="flex justify-center bg-gray-100 mb-1 text-slate-800 text-xl font-semibold">
                    Type : {e.Rtype}
                </h1>
                <h1 className='flex justify-center mb-4 bg-slate-600 text-white font-bold text-3xl'>Resources Quantity</h1>
                <h1>
                <img src={budgetIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                    Quantity: {e.Rquantity}
                </h1>
                <h1 className='flex justify-center mb-4 bg-slate-600 text-white font-bold text-3xl'>Resources Supplier</h1>
                <h1 className="flex justify-center bg-gray-100 mb-1 text-slate-800 text-xl font-semibold">
                    Supplier : {e.Rsupplier}
                </h1>
                <div className='flex justify-center gap-9'>
                    <UpdateProject updateProject={e._id}/>
                    <Deleteproject deleteProject={e._id}/>
                </div>
                <div className='flex justify-center'>
                    <button 
                    onClick={Navigate}
                    className="flex rounded-md bg-orange-600 py-2 px-10 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-orange-700  active:bg-orange-700 hover:bg-orange-700 ">
                    <img src={ViewIcon} className='w-5 h-5 mr-2 mt-0.5'/>
                        view task
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ResourceCard;