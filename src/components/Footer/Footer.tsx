import { JSX } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={style.head}>
                <div className={style.head_container}>
                    <div className={style.left}>
                        <div className={style.left_container}>
                            <div className={style.header}>
                                <p>Get the latest from Matic, right to your inbox</p>
                            </div>

                            <div className={style.sadly}>
                                <p>Sadly, it can't clean your junk folder.</p>
                            </div>

                            <div className={style.inputs}>
                                <div className={style.input_container}>
                                    <input 
                                        type="text"
                                        placeholder='Enter your email address'
                                        />
                                    <button>SUBMIT</button>
                                </div>
                            </div>

                            <div className={style.socials_icons}>
                                <div className={ style.socials_icons_container }>
                                    <div className="x">
                                        <FaXTwitter size={30} color={'white'}/>
                                    </div>
                                    <div className="insta">
                                        <AiFillInstagram size={30} color={'white'}/>
                                    </div>
                                    <div className="linkedin">
                                        <IoLogoLinkedin size={30} color={'white'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.right}>
                        <div className={style.right_container }>
                            <p>Frequently asked questions</p>
                            <ul>
                                <li><a href=".">Careers</a></li>
                                <li><a href=".">Blogs</a></li>
                                <li><a href=".">Press</a></li>
                                <li><a href=".">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.mid}>
                <div className={style.mid_container}>
                    <img 
                        src={require('../../assets/images/matic-img.webp')}
                        alt="matic"
                        loading='lazy'
                        />
                </div>
            </div>

            <div className={style.foot}>
                <div className={style.footer_container}>
                    <div className={style.left}>
                        <ul className={style.left_container}>
                            <li><a href=".">Terms of Service</a></li>
                            <li><a href=".">Privacy Policy</a></li>
                            <li><a href=".">Warranty</a></li>
                            <li><a href=".">Return Policy</a></li>
                        </ul>
                    </div>

                    <div className={ style.right }>
                        <div className={style.right_container}>
                            <p>© 2023 Matic. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
