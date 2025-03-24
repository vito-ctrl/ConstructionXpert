// import { useState } from 'react'
import DeleteIcon from '../../assets/icons8-delete-48.png'

const DeleteResources = ({ deletedResources }) => {
    const DeleteResource = async() => {
        const res = await fetch(`http://localhost:3000/api/resources/${deletedResources}`, {
            method: 'DELETE',
            'Content-Type': 'application/json'
        })
        const data = JSON.stringify(res) 
        location.reload();
    }
    return (
        <button 
            onClick={DeleteResource}
            className="flex mb-4 rounded-md bg-red-600 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 " 
            type="button"
        >
            <img src={DeleteIcon} className='w-5 h-5 mr-2 mt-0.5'/>
            Delete
        </button>
    )
}

export default DeleteResources