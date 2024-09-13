import { Hero, Button, Input } from "react-daisyui"
import {Link} from "react-router-dom"
const HeroComponent = () => {
  return(
    <Hero className=" min-h-96 bg-gray-50 ">
      <Hero.Content>
        <div className="">
          <h1 className="md:text-5xl text-3xl font-bold">Temukan Gawean Idamanmu</h1>
          <p className="py-6">
            CahKerjo adalah platform penghubung antar HRD dan para pencari kerja<br/>
            Dapatkan pekerjaan sesuai dengan profil Anda!
          </p>
          <Button className="bg-info rounded-lg font-bold md:text-xl border-info  text-white h-14">
            <Link to="/jobs" className="w-full h-full flex items-center">
              Cari Gawean idamanmu
            </Link>
          </Button>
        </div>
        <img src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-work-illustration-png-image_6942959.png" alt="" className="max-w-xs hidden md:block " />
      </Hero.Content>
    </Hero>
  )
}

export default HeroComponent 