import React, { useState } from 'react';

const Button = ({ onProjectAdded }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resources, setResources] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        setResources({
          ...resources,
          [e.target.name]: e.target.value
        });
    };

    const fetchResources = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          console.log("Start fetching");
          const res = await fetch('/api/projects', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(resources)
          });
          
          const data = await res.json();
          console.log("Project added:", data);
          
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          
          // Notify parent component that a project was added
          if (onProjectAdded) {
            onProjectAdded();
          }
          
          // Clear form data
          setResources({});
          handleCloseModal();
        } catch (error) {
          console.error("Error adding project:", error);
        } finally {
          setIsSubmitting(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResources(e);
    };

    return(
        <div className="container mx-auto px-4 py-4">
            <button 
                type="button" 
                onClick={handleOpenModal} 
                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 rounded-lg text-sm px-10 py-2.5 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-black dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
                Add Project
            </button>
            
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-black">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Enter Your Project Details</h3>
                            <button
                                type='button'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCloseModal();
                                }} 
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        
                        {/* Modal Body */}
                        <div className="p-4">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="Pname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                                    <input 
                                        type="text" 
                                        id="Pname"
                                        name="Pname"
                                        value={resources.Pname || ''}
                                        onChange={handleChange}
                                        className="w-full p-2.5 text-sm rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-gray-900" 
                                        placeholder="Project name" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Pdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                                    <input 
                                        type="text" 
                                        id="Pdescription"
                                        name="Pdescription" 
                                        value={resources.Pdescription || ''}
                                        onChange={handleChange}
                                        className="w-full p-2.5 text-sm rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-gray-900" 
                                        placeholder="Description"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="PstartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Start Date</label>
                                    <input 
                                        type="date" 
                                        id="PstartDate"
                                        name="PstartDate"   
                                        value={resources.PstartDate || ''}
                                        onChange={handleChange}
                                        className="w-full p-2.5 text-sm rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-gray-900" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="PendDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project End Date</label>
                                    <input 
                                        type="date" 
                                        id="PendDate"
                                        name="PendDate" 
                                        value={resources.PendDate || ''}
                                        onChange={handleChange}
                                        className="w-full p-2.5 text-sm rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-gray-900" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Pbudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Budget</label>
                                    <input 
                                        type="number" 
                                        id="Pbudget"
                                        name="Pbudget" 
                                        min="0"
                                        value={resources.Pbudget || ''}
                                        onChange={handleChange}
                                        className="w-full p-2.5 text-sm rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-gray-900" 
                                        placeholder="Budget amount" 
                                        required 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Project'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Button;