import { Hero, Link } from "react-daisyui"
const NotFound = () => {
   return(
      <>
            <Hero >
               <Hero.Content className="text-center">
               <div className="max-w-md">
                  <h1 className="text-5xl font-bold"><span className="text-error">404 </span>NOT FOUND</h1>
                  <p className="py-6">
                     The page you looking for is not found
                  </p>
                  <p>
                     <Link href="/jobs" className="text-primary">go back to cari gawe</Link>
                  </p>
               </div>
               </Hero.Content>
            </Hero>
         
      </>
   )
}

export default NotFound