import React from "react";
import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <Footer className="p-10 bg-neutral-800 text-neutral-content">
      <div className="footer max-w-6xl mx-auto">
        <div>
          <Footer.Title>Cah Kerjo</Footer.Title>
          <p className="max-w-xs mt-2">Platform penghubung pencari kerja dan perekrut terpercaya di Indonesia. Temukan peluang karir terbaik Anda bersama kami.</p>
        </div>
        <div>
          <Footer.Title>Layanan</Footer.Title>
          <Link to="/jobs">Cari Lowongan</Link>
          <a className="link link-hover">Pasang Lowongan</a>
          <a className="link link-hover">Tips Karir</a>
          <a className="link link-hover">Pelatihan Skill</a>
        </div>
        <div>
          <Footer.Title>Perusahaan</Footer.Title>
          <Link to="/about">Tentang Kami</Link>
          <a className="link link-hover">Hubungi Kami</a>
          <a className="link link-hover">Karir di Cah Kerjo</a>
          <a className="link link-hover">Kemitraan</a>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Syarat dan Ketentuan</a>
          <a className="link link-hover">Kebijakan Privasi</a>
          <a className="link link-hover">Kebijakan Cookie</a>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content mt-8">
        <div>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Cah Kerjo</p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;