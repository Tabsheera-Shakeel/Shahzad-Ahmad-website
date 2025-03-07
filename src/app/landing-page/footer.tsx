"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="flex flex-col items-start">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <p className="text-gray-400">Empowering your digital presence with creative solutions.</p>
                </div>


                <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-3">Address</h3>
                    <p className="text-gray-300">
                        7 Nargis Block, Hafeez Taaib Road, <br /> Allama Iqbal Town, Lahore
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-3">Contact</h3>
                    <p className="text-gray-300">Phone: <a href="tel:+923214293070" className="hover:text-orange-400">+92 321 429-3070</a></p>
                    <p className="text-gray-300">Email: <a href="mailto:designsvalley@yahoo.com" className="hover:text-orange-400">designsvalley@yahoo.com</a></p>
                </div>


                <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-3">Follow Me</h3>
                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/shahzad.ahmad.mirza1" className="text-gray-300 hover:text-orange-400 transition">
                            <FaFacebookF size={22} />
                        </Link>

                        <Link href="https://x.com/AskShahzadMirza/status/1876929294984740963" className="text-gray-300 hover:text-orange-400 transition">
                            <FaTwitter size={22} />
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCqDgg_vvXmaBEORzvhgiGJQ" className="text-gray-300 hover:text-orange-400 transition">
                            <FaYoutube size={22} />
                        </Link>
                        <Link href="https://x.com/AskShahzadMirza/status/1876929294984740963" className="text-gray-300 hover:text-orange-400 transition">
                            <FaTiktok size={22} />
                        </Link>
                    </div>
                </div>
            </div>


            <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-5">
                <p>Copyright © 2025 Shahzad Ahmad</p>
            </div>
        </footer>
    );
};

export default Footer;
