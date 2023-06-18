import Image from 'next/image';
import { Inter } from '@next/font/google';
import './../Footer/footer.css'

import { XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className='align'>
    <footer className="footer mt-auto p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 bottom-0">
    <span className="text-sm sm:text-center">
        
        © 2023 <a href="#" className="hover:underline" target="_blank">Haidertech™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
            <a href="#" className="mr-4 foter text-sm ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 foter text-sm ">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 foter text-sm ">Licensing</a>
        </li>
        <li>
            <a href="#" className="text-sm foter hover:underline ">Contact</a>
        </li>
    </ul>
</footer>
</div>
    )}
