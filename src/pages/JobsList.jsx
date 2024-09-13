import { useState, useEffect, useContext } from "react"
import { Card,  Input, Form, Select } from "react-daisyui"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

const JobsList = () => {
   const {data, loading, setFilteredData, filteredData} = useContext(GlobalContext)
   const [searchTerm, setSearchTerm] = useState("")
   const [jobTypeFilter, setJobTypeFilter] = useState("all")
   const [jobCityFilter, setJobCityFilter] = useState("all")

   useEffect(() => {
      const results = data.filter(job =>
         (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         job.company_city.toLowerCase().includes(searchTerm.toLowerCase())) &&
         (jobTypeFilter === "all" || job.job_type.toLowerCase() === jobTypeFilter.toLowerCase()) && 
         (jobCityFilter === "all" || job.company_city.toLowerCase() === jobCityFilter.toLowerCase())
      )
      setFilteredData(results)
   }, [searchTerm, jobTypeFilter,jobCityFilter, data])

   const handleSearch = (e) => {
      setSearchTerm(e.target.value)
   }

   const handleJobTypeFilter = (e) => {
      setJobTypeFilter(e.target.value)
   }

   const handleJobCityFilter = (e) => {
      setJobCityFilter(e.target.value)
   }

   const calculateDaysAgo = (createdAt) => {
      const now = new Date()
      const created = new Date(createdAt)
      const diffTime = Math.abs(now - created)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`
   }

   return (
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Form className="flex md:flex-row justify-center items-center gap-4 mb-8">
            <Input 
              bordered 
              type="text" 
              placeholder="Search jobs, companies, or cities" 
              className="w-full md:w-96"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="flex flex-row flex-wrap gap-1">
               <Select 
               bordered
               className="md:w-40"
               value={jobTypeFilter}
               onChange={handleJobTypeFilter}
               >

                  <option value="all">All Job Types</option>
                     {data.map((item) => (
                        <option value={item.job_type}>{item.job_type}</option>
                     ))}
               </Select>
               <Select 
                  bordered
                  className="md:w-40"
                  value={jobCityFilter}
                  onChange={handleJobCityFilter}
                  >

                  <option value="all">All City</option>
                     {data.map((item) => (
                        <option value={item.company_city}>{item.company_city}</option>
                     ))}
               </Select>
            </div>
            
          </Form>        
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {loading ? (
              [...Array(6)].map((_, index) => (
                <Card key={index} className="bg-white rounded-lg shadow-md animate-pulse">
                  <Card.Body>
                     <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                           <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                           <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/6"></div>
                     </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              filteredData.map((item) => (
                <Link
                  to={item._id}
                  state={{jobDetail: item}}
                  key={item._id}
                  className="transform transition duration-300 ">
                  <Card className="bg-white shadow overflow-hidden border-2 border-white hover:border-blue-500">
                    <Card.Body className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img src={item.company_image_url} alt={item.company_name} className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2" />
                        <span className="text-sm text-gray-500">{calculateDaysAgo(item.createdAt)}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-md font-semibold text-primary mb-4">{item.job_tenure}</p>
                      <div className="space-y-2">
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {item.company_city}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Rp {item.salary_min.toLocaleString()} - {item.salary_max.toLocaleString()}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                          {item.company_name}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {item.job_type}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
   )
}

export default JobsList