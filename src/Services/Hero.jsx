import React from "react";
import { ServiceImg, herooImg } from "../assets";
import {
  Check,
  ExitToApp,
  Hail,
  LocalLaundryService,
  RocketLaunch,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="  sm:py-[100px]">
      <div className=" w-[95%] mx-auto ">
        {/* container  */}
        <div>
          {/* sections  */}

          <section className="flex sm:flex-row flex-col sm:gap-0 gap-[50px]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              className=" flex flex-1 relative ">
              <img
                src={ServiceImg}
                className=" w-[70%]  rounded-tl-[50px] rounded-bl-[50px] sm:h-[400px] h-[300px] object-cover object-left"
                alt=""
              />
              <img
                src={herooImg}
                className="w-[200px]  h-[200px]  rounded-full  drop-shadow-2xl   object-cover absolute top-1/2  right-0 border-5 border-white"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              className=" flex flex-1">
              <section className="sm:w-[80%] mx-auto flex flex-col justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className=" sm:text-[22px] text-[16px] sm:px-0 px-[10px] text-gray-700 sm:pt-0 pt-[10px] sm:font-normal font-light">
                    <b className=" font-extrabold">Our Services: </b>
                    We are committed to delivering excellence, ensuring a
                    cleaner, safer, and healthier environment for our clients.
                    Trust us to handle your cleaning needs with efficiency and
                    care.
                    <b className="text-blue-700 italic underline">
                      Our services include:
                    </b>
                  </p>
                  <ul className="   text-[14px] flex flex-col gap-[10px] sm:pb-0 pb-[20px]">
                    <li className=" flex items-center gap-[10px]">
                      <span className=" border-2 bg-blue-700 border-blue-700 text-white rounded-full p-1 flex items-center justify-center">
                        <Check fontSize="" />
                      </span>{" "}
                      Residential & Commercial Cleaning
                    </li>
                    <li className=" flex items-center gap-[10px]">
                      <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                        <Check fontSize="" />
                      </span>{" "}
                      Fumigation & Pest Control
                    </li>
                    <li className=" flex items-center gap-[10px]">
                      <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                        <Check fontSize="" />
                      </span>{" "}
                      Decontamination & Disinfection
                    </li>
                    <li className=" flex items-center gap-[10px]">
                      <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                        <Check fontSize="" />
                      </span>{" "}
                      Post-Construction Cleaning
                    </li>
                    <li className=" flex items-center gap-[10px]">
                      <span className=" border-2 rounded-full p-1 flex items-center justify-center">
                        <Check fontSize="" />
                      </span>{" "}
                      Office & Industrial Cleaning
                    </li>
                  </ul>
                </div>
                <div className="flex items-center sm:gap-[50px] gap-[20px]">
                  <button className=" bg-blue-700 py-4 rounded-full font-bold text-[16px] text-white w-[50%]">
                    Book now
                  </button>
                </div>
              </section>
            </motion.div>
          </section>
          {/* sections 2  */}
          <section className=" flex sm:flex-row flex-col gap-[10px] pt-[50px] sm:pb-0 pb-[50px]  items-center justify-between sm:w-[70%] w-full mx-auto">
            {/* each box */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              className="border-2 rounded-[20px] flex sm:flex-col p-[20px]  flex-row sm:items-start items-center gap-[20px] flex-1 border-blue-700 text-blue-700">
              <span className=" border-2 rounded-full p-3 w-fit  text-blue-700">
                <Hail />
              </span>
              <article>
                <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px] ">
                  HIGHLY-TRAINED STAFF
                </h2>
              </article>
            </motion.div>
            {/* each box */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 1 }}
              viewport={{ once: true }}
              className="border-2 rounded-[20px] flex sm:flex-col p-[20px]  flex-row sm:items-start items-center gap-[20px] flex-1 border-blue-700 text-blue-700">
              <span className=" border-2 rounded-full p-3 w-fit  text-blue-700">
                <LocalLaundryService />
              </span>
              <article>
                <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px] ">
                  QUALITY CLEANING TOOLS
                </h2>
              </article>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="border-2 rounded-[20px] flex sm:flex-col p-[20px]  flex-row sm:items-start items-center gap-[20px] flex-1 border-blue-700 text-blue-700">
              <span className=" border-2 rounded-full p-3 w-fit  text-blue-700">
                <RocketLaunch />
              </span>
              <article>
                <h2 className="  text-[16px] sm:font-bold font-extrabold sm:leading-[20px] ">
                  FAST & EFFECTIVE SERVICE
                </h2>
              </article>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
