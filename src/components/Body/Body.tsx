import { JSX, useEffect, useState } from 'react';

import style from './Body.module.scss'
import { VideoCard } from './VideoCard';

const a = ['Playing hide-and-seek', 'Cooking meals together', 'Stargazing in the backyard', 'hosting game night'];
const color = ['#016759', '#692729', 'rgb(2, 0, 128)', '#3E5A25']


export function Body(): JSX.Element {
    let [toDisplay, setToDisplay] = useState(a[0]);
    let [animatedBackground, setToBackground] = useState(color[0]);
    // let toDisplay = a[0];
    // let i = 1;

    useEffect(() => {
        let i = 1;

        setInterval(() => {
            setToDisplay(a[i]);
            setToBackground(color[i])

            if (i === a.length - 1) {
                i = 0
            } else {
                i++;
            }
        }, 3000);
    }, []);

    return (
        <div className={ style.container }>
            <div className={ style.first }>
                <div className={ style.first_container }>
                    <VideoCard
                        // url=''
                        url='https://videos.ctfassets.net/6p328xbjc78k/56yrc3uDa1u9R4lwfl7sp1/0498e907f71e453935c9b49f1ee39c7c/meet-the-first-truly-smart-home-robot-v1.mp4'
                        type='video/mp4'
                    >
                        <div className={style.content}>
                            <div className={ style.content_container }>
                                <p>Meet the first truly smart home robot.</p>
                                <p>Matic senses and solves dry and wet messes — no babysitting required.</p>
                            </div>
                        </div>
                    </VideoCard>
                </div>
            </div>

            <div className={ style.w01 }>
                <div className={style.w01_container }>
                    {/* <div className={style.top }>hdjdm</div> */}
                    <div className={style.button }>
                        <p>01</p>
                    </div>
                    <div className={style.title }>
                        <p>Mopping and vacuuming — Matic does it all.</p>
                    </div>
                    <div className={style.description }>
                        <p>Matic’s state-of-the-art computer vision senses what’s around it, automatically switching between cleaning modes to get the job done.</p>
                    </div>
                </div>
            </div>

            <div className={ style.mini_card_1 }>
                <div className={ style.mini_card_1_container }>
                    the center;
                </div>
            </div>

            <div className={ style.w02 }>02</div>
            <div className={ style.w03 }>03</div>

            <div className={ style.real_mess}>
                <div className={ style.real_mess_container}>
                    <div className="img">
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F2dGz4N6BaSZhbhRImtSBvv%2F9d79bc41756db6f5fbb238bf82b1b53d%2FMATIC.png&w=256&q=75" 
                            alt=""
                        />
                    </div>
                    <div className={style.word_content}>
                        <p>Messes happen. Matic rolls into action.</p>
                    </div>
                    <div className="button">
                        <button>RESERVE YOUR MATIC</button>
                    </div>
                </div>
            </div>
            
            <div className={ style.mess }>
                <div className={style.message_container}>
                    <div className={style.left}>
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F119zGg2x3rHPBBSwLwRQyn%2F0e0f4a021112b5cdf782408be09d999a%2FMATIC_LIVINGROOM_DESKTOP.webp&w=3840&q=75" 
                            alt="" 
                            loading='lazy' 
                        />
                    </div>

                    <div className={style.right} style={{ backgroundColor: animatedBackground }}>
                        <div className={style.right_container}>
                            <div className={style.top}>
                                <p>Less time cleaning, more time</p>
                            </div>
                            <div className={style.mid}><p>{ toDisplay }</p></div>
                            <div className={style.last}>
                                {/* <div className={style.last_container}> */}
                                    <p className={style.last_container}>Matic saves the average family <span>an hour a day</span> on floor cleaning.</p>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ style.review }>review</div>
            <div className={ style.future }>future</div>

            <div className={ style.last }>
                <div className={ style.last_container }>
                    <VideoCard
                            url='https://videos.ctfassets.net/6p328xbjc78k/4v44jM4FvvXhiuNKCpc9k/256e1a800d644cf802690d8d738a8d9e/finally-a-floor-cleaning-innovation-v1.mp4'
                            type='video/mp4'
                        >
                        <div className= { style.content }>
                            <div className={ style.content_container }>
                                <p>Finally, a floor-cleaning innovation worth celebrating.</p>
                                <button>RESERVE YOUR MATIC</button>
                            </div>
                        </div>
                    </VideoCard>
                </div>
            </div>
        </div>
    );
}
