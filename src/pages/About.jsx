import React from 'react';
import { Card } from 'react-daisyui';

const About = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-10">
      <Card className="w-11/12 max-w-4xl mx-auto bg-base-100 shadow-xl">
        <Card.Body>
          <Card.Title tag="h1" className="text-3xl font-bold text-center mb-6">
            Tentang Kami
          </Card.Title>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Tentang Saya
            </h2>
            <p className="text-base-content">
              Mahasiswa Aktif Politeknik Negeri Cilacap prodi Teknik Informatika, Lulusan SMK Negeri 1 Binangun jurusan Teknik Komputer dan jaringan. Memiliki ketertarikan terhadap dunia pengembangan perangkat lunak dan server. Aktif mengikuti Unit Kegiatan Mahasiswa (UKM) Protic (Programming Teknik Informatika Club).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              Tentang Website
            </h2>
            <p className="text-base-content">
              Cah kerjo adalah Website penghubung antara Pencari kerja dan perekrut kerja. Cah kerjo dibangun pada tahun 2024 bulan September. Disini Anda akan bisa menemukan pekerjaan idaman Anda atau mencari pekerja yang sesuai dengan kebutuhan yang ada.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Teknologi
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'Daisy UI', 'Node.js', 'MongoDB', 'Laravel', 'MySQL'].map((tech, index) => (
                <span key={index} className="badge badge-primary badge-outline">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;