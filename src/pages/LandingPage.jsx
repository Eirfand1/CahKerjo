import {  Card, Hero, Skeleton } from "react-daisyui"
import HeroComponent from "../components/HeroComponent"
import {  useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const LandingPage = () => {

   const {data, loading } = useContext(GlobalContext)

   return (
      <>
         {loading ? (
            <Hero className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-50 gap-8 p-10">
               <Skeleton className="h-96 w-full max-w-5xl" />
               <Skeleton className="h-12 w-48" />
               <Skeleton className="h-6 w-full max-w-4xl" />
               <Skeleton className="h-6 w-full max-w-4xl" />
               <Skeleton className="h-6 w-full max-w-4xl" />
            </Hero>
         ) : (
            <>
               <HeroComponent />
               <div className="my-10">
                  <h1 className="md:text-4xl text-2xl text-center font-bold">Bidang Gawe Populer</h1>
                  <div className="flex flex-wrap my-10 gap-4 justify-center items-center">
                     {data.map((item) => (
                        <Card key={item._id} className="bg-accent  rounded-full">
                           <Card.Body className="md:p-5 p-3">
                              <p className="font-bold text-white">{item.title}</p>
                           </Card.Body>
                        </Card>
                     ))}
                  </div>
               </div>
            </>
         )}
      </>
   )
}

export default LandingPage
