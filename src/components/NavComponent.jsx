import { list } from "postcss"
import { Navbar, Button, Menu } from "react-daisyui"
import { Link } from "react-router-dom"
import '../App.css'

const NavComponent = () => {
   return(
      <Navbar className="shadow-2xl bg-neutral-content text-white">
         <div className="flex-1">
            <Link to="/">
               <Button tag="a" color="ghost" className="normal-case font-bold text-primary text-2xl">
                  CahKerjo
               </Button>
            </Link>
         </div>
         <div className="flex-none">
            <Menu horizontal={true} className="px-1 z-50">
               <Menu.Item className="hidden sm:block">
                  <Link to="/jobs" className="font-semibold text-gray-700">CARI GAWE</Link>
               </Menu.Item>
               <Menu.Item className="hidden sm:block">
                  <Link to="/about" className="font-semibold text-gray-700">ABOUT</Link>
               </Menu.Item>
               <Menu.Item>
                  <Link to="/" className="font-semibold text-gray-700">HOME</Link>
               </Menu.Item>
               <Menu.Item className="block text-gray-700 sm:hidden">
                  <div className="dropdown bg-neutral-content h-9 m-0 w-12 flex items-center justify-center p-0">
                     <Button className="bg-neutral-content border-none shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                           <path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </Button> 
                     <ul
                        tabIndex={0}
                        className="menu relative right-1 top-5 menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-10 w-48 shadow">
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/jobs">Jobs</Link>
                        </li>
                        <li>
                           <Link to="/about">About</Link>
                        </li>
                     </ul>
                  </div>
               </Menu.Item>
            </Menu>
         </div>
      </Navbar>
   )
}

export default NavComponent