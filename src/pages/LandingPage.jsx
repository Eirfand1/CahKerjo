import React, { useContext } from "react";
import { Card, Hero, Skeleton, Button } from "react-daisyui";
import HeroComponent from "../components/HeroComponent";
import { GlobalContext } from "../context/GlobalContext";

const LandingPage = () => {
  const { data, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <Hero className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-50 gap-8 p-10">
         <Skeleton className="h-96 w-full max-w-5xl" />
         <Skeleton className="h-12 w-48" />
         <Skeleton className="h-6 w-full max-w-4xl" />
         <Skeleton className="h-6 w-full max-w-4xl" />
         <Skeleton className="h-6 w-full max-w-4xl" />
      </Hero> 
    );
  }

  return (
    <div className="bg-base-100">
      <HeroComponent />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Bidang Gawe Populer</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.map((item) => (
              <Card key={item._id} className="bg-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Card.Body className="items-center text-center p-4">
                  <Card.Title tag="h2" className="text-lg font-semibold">
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Beragam Peluang", desc: "Temukan ribuan lowongan pekerjaan dari berbagai industri." },
              { title: "Mudah Digunakan", desc: "Interface yang user-friendly untuk pencarian kerja yang efisien." },
              { title: "Dukungan Karir", desc: "Dapatkan saran dan bimbingan untuk mengembangkan karir Anda." }
            ].map((feature, index) => (
              <Card key={index} className="bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Card.Body>
                  <Card.Title tag="h3" className="text-xl font-semibold mb-4">{feature.title}</Card.Title>
                  <p>{feature.desc}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Siap Untuk Memulai?</h2>
          <p className="mb-8 text-lg">Bergabunglah dengan ribuan pencari kerja dan perusahaan yang telah menemukan kesuksesan bersama kami.</p>
          <Button color="primary" size="lg">Daftar Sekarang</Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;