import { JSX } from 'react';

import style from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div
            className={style.container_h}
        >
            <div className={style.header_container_h }>
                <div className={style.video_container_h }>
                    <video autoPlay muted loop>
                        <source 
                            src='https://videos.ctfassets.net/6p328xbjc78k/61QjvcsCeBBbgWPDO1WVwJ/d0fae2dcd69720e8bd5f0952f17f57b4/Matic_Demo_GENERIC.mp4'
                            type='video/mp4'
                        />
                    </video>
                </div>

                <div className={style.content_h }>
                    <div className={style.content_container }>
                        <div className={style.head }>
                            <p>Introducing Matic</p>
                        </div>
                        <div className={style.description }>
                            <p>The world’s most advanced floor cleaner. Your home’s best helper.</p>
                        </div>
                        <div className={style.button }>
                            <button>RESERVE YOUR MATIC</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
