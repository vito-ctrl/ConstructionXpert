import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const Cards = ({ refreshTrigger }) => {
  const [resourceData, setResourceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch resources on component mount and when refreshTrigger changes
  useEffect(() => {
    getResources();
  }, [refreshTrigger]);

  const getResources = async () => {
    try {
      const res = await fetch('/api/projects', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log("Fetched data:", data);
      setResourceData(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to safely format dates
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (error) {
      return dateString;
    }
  };

  if (isLoading) return <div className="text-center p-8">Loading projects...</div>;
  
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Projects</h2>
      
      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resourceData && resourceData.length > 0 ? (
          resourceData.map((item, index) => (
            <Card
              key={item._id || index}
              shadow={false}
              className="relative grid h-[20rem] w-full max-w-[18rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-${1552960562}-daf630e9278b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80')` }}
              >
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography variant="h2" color="white" className="mb-6 font-medium leading-[1.5] text-ellipsis overflow-hidden">
                  {item.Pname || "Unnamed Project"}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400 line-clamp-2">
                  {item.Pdescription || "No description"}
                </Typography>
                <Typography variant="paragraph" className="text-gray-400">
                  Start: {formatDate(item.PstartDate)}
                </Typography>
                <Typography variant="paragraph" className="text-gray-400">
                  End: {formatDate(item.PendDate)}
                </Typography>
                <Typography variant="paragraph" className="text-gray-400">
                  Budget: ${Number(item.Pbudget).toLocaleString() || "0"}
                </Typography>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="col-span-4 text-center p-8 dark:text-white">No projects found. Add some projects to get started!</div>
        )}
      </div>
    </div>
  );
};

export default Cards;