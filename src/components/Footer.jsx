import React from 'react';
import styles from '../style';

const Footer = () => {
    return (
        <footer className={`text-white bg-gray-900 ${styles.paddingY} `}>
            <div className="container px-8 mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full mb-4 lg:w-1/3 lg:mb-0">
                        <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                    <div className="w-full mb-4 lg:w-1/3 lg:mb-0">
                        <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
                        <ul className="flex">
                            <li className="mr-4"><a href="#" className="hover:text-gray-400">Facebook</a></li>
                            <li className="mr-4"><a href="#" className="hover:text-gray-400">Twitter</a></li>
                            <li className="mr-4"><a href="#" className="hover:text-gray-400">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3 className="mb-2 text-xl font-semibold">Newsletter</h3>
                        <form>
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 mb-2 text-white bg-gray-800 rounded" />
                            <button type="submit" className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
