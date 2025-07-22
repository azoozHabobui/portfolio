import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block shadow-xl backdrop-blur-sm">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="space-y-3">
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                                    Hello, Check This Out!
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                        {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am a  <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings: ['Full Stack Developer', 'Graphic Designer'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                        </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                                </div>
                            </motion.div>
                            <Link to='intro' spy={true} smooth={true} duration={500} offset={-50} className="button">Explore</Link>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <img className='absolute inset-0 w-full h-full object-contain animate-float' src="images/emoji.png" alt="emoji" />
                        </div>
                    </div>
                </div>

                {/* details with modern style and animation */}
                <div className="flex justify-center gap-8 items-center w-full px-4 xl:px-8 2xl:px-16 mt-6">

                    <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.7 }} 
                        className="flex items-center gap-x-1 bg-LightGray/20 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm transition-transform"
                    >
                        <span className='text-base md:text-lg text-Green font-bold'>3+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </motion.div>

                    <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        initial={{ opacity: 0, x: 30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.7 }} 
                        className="flex items-center gap-x-1 bg-LightGray/20 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm transition-transform"
                    >
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Opensource Projects</span>
                    </motion.div>

                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner;
