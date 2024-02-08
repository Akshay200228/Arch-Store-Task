import { motion } from 'framer-motion';
import Ricky from "../../assets/ricky2.png";
import styles from '../../style';
import { useNavigate } from 'react-router-dom';
import { statistics } from '../../constant/index';
import CountUp from "react-countup";

const Hero = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const fadeInLeftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const fadeInRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.section
            className={`${styles.paddingX} lg:h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16 text-white bg-gradient-to-b from-gray-900 to-gray-800`} variants={containerVariants} initial="hidden" animate="visible"
        >
            <motion.div className="w-full lg:w-1/2 md:pr-8" variants={itemVariants}>
                <motion.h1 className="mb-8 text-4xl font-bold leading-tight text-center md:text-6xl md:text-left text-coral-red" variants={fadeInUpVariants}>Welcome to the <br /> <span className="text-green-500">Rick and Morty</span> <br /> Universe</motion.h1>
                <motion.p className="mb-8 text-lg text-center md:text-xl md:text-left" variants={fadeInUpVariants}>Embark on an extraordinary journey through space and time with Rick Sanchez and Morty Smith!</motion.p>
                <motion.button
                    className="block px-8 py-3 mx-auto font-bold text-white transition-colors duration-300 bg-green-500 rounded-full shadow-lg md:px-10 md:py-4 hover:bg-green-600 md:mx-0"
                    onClick={() => navigate('/characters')}
                    variants={fadeInUpVariants}
                >
                    Start Exploring
                </motion.button>
                {/* Countup */}
                <motion.div className='flex flex-wrap items-start justify-start w-full gap-16 mt-20' variants={fadeInUpVariants}>
                    {statistics.map(({ label, value }, index) => (
                        <motion.div
                            key={label}
                            initial="hidden"
                            animate="visible"
                            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 1, ease: "easeOut" } } }}
                        >
                            {/* Value */}
                            <CountUp
                                start={0} end={value} duration={4}
                                className={`text-4xl font-bold font-palanquin text-coral-red`}
                            /> <span className='text-[38px] font-semibold font-palanquin text-gray-400'>+</span>
                            {/* Label */}
                            <p className={`leading-7 font-montserrat text-slate-gray`}>{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>


            <motion.div className="w-full lg:w-1/2 lg:pl-8" variants={itemVariants}>
                <motion.img
                    src={Ricky}
                    alt="Rick and Morty"
                    className="object-cover w-full h-auto"
                    variants={fadeInRightVariants}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
