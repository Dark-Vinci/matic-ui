import { JSX } from 'react';

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={style.head}>
                <div className="head_container">
                    <div className="left">
                        <div className="left_container">
                            <div className="header">
                                Get the latest from Matic, right to your inbox
                            </div>
                            <div className="sadly">
                                <p>Sadly, it can't clean your junk folder.</p>
                            </div>
                            <div className="inputs">
                                <div className="input_container">
                                    <input type="text"/>
                                    <button>SUBMIT</button>
                                </div>
                            </div>

                            <div className="socials_icons"></div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="right_container">
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
                <div className="mid_container">
                    <img src="" alt="" />
                </div>
            </div>

            <div className={style.foot}>
                <div className={style.footer_container}>
                    <div className={style.left}>
                        <div className={style.left_container}>
                            <ul>
                                <li><a href=".">Terms of Service</a></li>
                                <li><a href=".">Privacy Policy</a></li>
                                <li><a href=".">Warranty</a></li>
                                <li><a href=".">Return Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={ style.right }>
                        <div className={style.right_container}>
                            <p>© 2023 Matic. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
