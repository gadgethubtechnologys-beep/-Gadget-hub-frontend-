import { SocialNetworks } from "./footer.types";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LinksSection from "./LinksSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaYoutube />,
    url: "https://youtube.com/@gadgethubinnovationandtechnolo?si=r4UQ7ZdcicCbX_7H",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    url: "https://wa.me/918848276507",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-brand/10">
      <div className="pt-8 md:pt-[50px] bg-brand-light px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <Link href="/" className="mb-6">
                <Image
                  src="/images/gadget-logo.jpg"
                  alt="Gadget Hub"
                  width={160}
                  height={140}
                  className="object-contain h-16 w-auto"
                />
              </Link>
              <p className="text-black/70 text-sm mb-4">
                Gadget Hub CCTV Store provides premium CCTV, electrical, and computer solutions for homes and businesses. One store for all your security and technology needs.
              </p>
              <p className="text-black/70 text-sm font-medium mb-9">
                <a href="mailto:hello@gadgethub.in">hello@gadgethub.in</a>
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-black/5 hover:bg-brand hover:text-white text-black/70 transition-all mr-3 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center p-2"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/* LinksSection removed per request */}
          </nav>
          <hr className="h-[1px] border-t-brand/20 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/50 text-xs md:text-sm font-medium">
              Gadget Hub © 2024-2026. All Rights Reserved.
            </p>
            <p className="text-black/40 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
              One Store. All Solutions.
            </p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;