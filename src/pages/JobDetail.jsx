import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Button, Badge } from 'react-daisyui';
import { GlobalContext } from '../context/GlobalContext';

const JobDetail = () => {
   const location = useLocation();
   const { id } = useParams();
   const [jobDetail, setJobDetail] = useState(location.state?.jobDetail || null);
   const {url} = useContext(GlobalContext)

   useEffect(() => {
      if (!jobDetail) {
         const fetchJobDetails = async () => {
            try {
               const response = await axios.get(`${url}/${id}`);
               setJobDetail(response.data);
            } catch (error) {
               console.error("Error fetching job details:", error);
            }
         };
         fetchJobDetails();
      }
   }, [id, jobDetail, url]);

   if (!jobDetail) {
      return (
         <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
         </div>
      );
   }

   return (
      <div className="bg-gray-100 min-h-screen py-5 px-4 sm:px-6 lg:px-8">
         <div className="max-w-5xl mx-auto">
            <Card className="bg-gray-50 shadow p-4 sm:p-6 md:p-10 rounded-lg overflow-hidden">
               <div className="md:flex md:items-start">
                  <div className="md:flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                     <img
                        className="w-full h-48 sm:h-80 md:h-auto object-contain rounded-lg"
                        src={jobDetail.company_image_url}
                        alt={jobDetail.company_name}
                     />
                  </div>
                  <div className="flex-grow">
                     <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">
                        {jobDetail.job_tenure} • {jobDetail.job_type}
                     </div>
                     <h1 className="text-2xl sm:text-3xl leading-tight font-bold text-gray-900 mb-2">
                        {jobDetail.title}
                     </h1>
                     <p className="mt-2 text-xl text-gray-700 font-semibold">{jobDetail.company_name}</p>
                     <p className="mt-2 text-gray-600">
                        <span className="font-semibold">Location:</span> {jobDetail.company_city}
                     </p>
                     <p className="mt-2 text-gray-600">
                        <span className="font-semibold">Salary:</span> Rp {jobDetail.salary_min.toLocaleString()} - {jobDetail.salary_max.toLocaleString()}
                     </p>
                     <div className="mt-4">
                        <Badge color={jobDetail.job_status === 1 ? "success" : "error"} className="text-xs font-semibold">
                           {jobDetail.job_status === 1 ? "Open for hiring" : "Closed"}
                        </Badge>
                     </div>
                  </div>
               </div>
               <div className="py-6 border-t border-gray-200 mt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <p className="text-gray-700 whitespace-pre-line">{jobDetail.job_description}</p>
               </div>
               <div className="py-6 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifications</h2>
                  <p className="text-gray-700 whitespace-pre-line">{jobDetail.job_qualification}</p>
               </div>
               <div className="py-6">
                  <Button color="primary" className="w-full md:w-auto text-white font-bold py-3 px-6 rounded-full hover:bg-primary-focus transition duration-300">
                     Apply Now
                  </Button>
               </div>
            </Card>
         </div>
      </div>
   );
};

export default JobDetail;