import { JSX, useEffect, useState } from 'react';
import { MdArrowForward, MdArrowBack } from "react-icons/md";

import style from './Body.module.scss'
import { VideoCard } from './VideoCard';
import { MiniImageCard } from './MiniImageCard';
import { Numbered } from './Numbered';

const a = ['Playing hide-and-seek', 'Cooking meals together', 'Stargazing in the backyard', 'hosting game night'];
const color = ['#016759', '#692729', 'rgb(2, 0, 128)', '#3E5A25'];

// interface Anim {
//     readonly imgUrl: string;
//     readonly text: string;
//     readonly timing: string;
// }

// const bbbbb: Array<Anim> = [
//     {
//         imgUrl: 'https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2Fm7a9X1YnkC3imclsoMqzo%2F7aaf7c0dc44d208227571f8a569ab188%2FBlockQouteVector2.png&w=3840&q=75',
//         text: 'Dog back from walk.',
//         timing: '9:30AM, LIVING ROOM, VACUUM',
//     },

//     {
//         imgUrl: 'https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F5dwVaOwxnEIczD7N4Jjt8b%2Fa13302a9d39ab5e0b0882b044ceb56ee%2FBlocQouteVector1.png&w=3840&q=75',
//         text: 'After school snack.',
//         timing: '3:00PM, KITCHEN, MOP',
//     },

//     {
//         imgUrl: 'https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F1X1BA9kny15hBQRw6yrOyZ%2F172327fa7d5dd516d30a315022e76f1d%2FBlockQuoteVector3.png&w=3840&q=75',
//         text: 'Movie night.',
//         timing: '10:27PM, LIVING ROOM, VACUUM',
//     },

//     {
//         imgUrl: 'https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2FjFq3fROIGsRUs3lEayLtK%2Fdcc2a1e32afb2ebb3586f60d370604af%2FBlockQuoteVector4.png&w=3840&q=75',
//         text: 'Post dinner clean.',
//         timing: '9:38PM, DINING ROOM, BOOTH',
//     }
// ]

export function MiniCard(): JSX.Element {
    return (
        <div className="container" 
            style={{ width: '640px', height: '160px', borderRadius: '30px'}}
        >
            <div className="min_container">

            </div>
        </div>
    );
}


export function Body(): JSX.Element {
    let [toDisplay, setToDisplay] = useState(a[0]);
    let [animatedBackground, setToBackground] = useState(color[0]);

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
                <Numbered 
                    title='Mopping and vacuuming — Matic does it all' 
                    description='Matic’s state-of-the-art computer vision senses what’s around it, automatically switching between cleaning modes to get the job done.' 
                    button='01' 
                    buttonColor='#FFDFD0'
                />

                <div className={ style.mini_card_1 }>
                    <div className={ style.mini_card_1_container }>
                        <div className={ style.f }>
                            <MiniImageCard
                                url='https://videos.ctfassets.net/6p328xbjc78k/1laowUZiYMioYNcJ5sHudz/eb744ebba2e88202d49450360e2ca866/cutting-edge-mess-and-surface-detection-v1.mp4'
                                content='Cutting-edge mess and surface detection'
                                contentBackgroundColor='#FFDFD0'
                                length='480px'
                            />
                            fitst
                        </div>

                        <div className={[style.a, style.a_1].join()}></div>
                        <div className={style.a}></div>
                        <div className={style.a}></div>

                        <div className={ style.s }>
                            <MiniImageCard
                                url='https://videos.ctfassets.net/6p328xbjc78k/Bln7bJwlQC8rSbayqS00p/7d67623b67ed417ca6cdef4b5f712380/works-on-all-home-surfaces-v1.mp4'
                                content='Works on all floor surfaces'
                                contentBackgroundColor='#FFDFD0'
                                length='560px'
                            />
                        </div>

                        <div className={style.a}></div>
                        <div className={style.a}></div>
                        <div className={style.a}></div>

                        <div className={ style.l }>
                            <MiniImageCard
                                url='https://videos.ctfassets.net/6p328xbjc78k/50ZAQSwP8O9YwfahgtZxKV/885c8b31d7446fbee4c7f72cb7a86853/auto-toggles-between_mopping-and_vacuuming-video-v1.mp4'
                                content='Auto-toggles between mopping and vacuuming'
                                contentBackgroundColor='#FFDFD0'
                                length='560px'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={ style.w02 }>
                <Numbered 
                    title='Learns nonstop. Cleans nonstop. No supervision necessary.' 
                    description='Matic’s on patrol 24/7, quietly working around the clock for a continuous clean. Watch Matic because you want to, not because you have to.' 
                    button='02'
                    buttonColor='#9EACFD'
                />

                <div className={style.w02_cont }>
                    <div className={ style.one }>
                        <MiniImageCard 
                            url={'https://videos.ctfassets.net/6p328xbjc78k/2jPAxBXLu34oJUIAKWn3Vl/b2a329ca0286ab318a9edc701b29e996/patrols-your-home-with-3D-floor-mapping-v1.mp4'} 
                            content={'Patrols your home with 3D floor mapping'} 
                            contentBackgroundColor={'#9EACFD'} 
                            length={'560px'}
                        />
                    </div>

                    <div className={ style.two }>
                        <MiniImageCard 
                            url={'https://videos.ctfassets.net/6p328xbjc78k/3Dorxmxp9yjZOy3DBC0ncE/b2a935cde96e89d52602317e180d8ec4/Home_Matic_Is_Quiet.mp4'} 
                            content={'Knows what to clean (and what to avoid)'} 
                            contentBackgroundColor={'#9EACFD'} 
                            length={'480px'}
                        />
                    </div>

                    <div className={ style.three }>
                        <MiniImageCard 
                            url={'https://videos.ctfassets.net/6p328xbjc78k/7g7JcLcQ5vKfYqtkrm2HUN/8ebe08ec9ca2f27149b4c1985e280888/quiet-enough-for-work-time-and-nap-time-v1.mp4'} 
                            content={'Quiet enough for work time and nap time'} 
                            contentBackgroundColor={'#9EACFD'} 
                            length={'800px'}
                            width='800px'
                            height='560px'
                        />
                    </div>
                </div>
            </div>

            <div className={ style.w03 }>
                <Numbered 
                    title='“Hey Matic, clean this!”' 
                    description='Matic responds to your voice and gestures. Create a routine in the app or just point and tell Matic where to go. Your house, your rules.' 
                    button='03'
                    buttonColor='#FFE894'
                />

                <div className={ style.cont }>
                    <div className={ style.f }>
                        <MiniImageCard 
                            url={'https://videos.ctfassets.net/6p328xbjc78k/4XCRxMejxAffI87kyVsq0D/00b34906482037ac88589d506a54cbb5/listens-to-your-voice-and-recognizes-gestures-v1.mp4'} 
                            content={'Listens to your voice and recognizes gestures'} 
                            contentBackgroundColor={'#FFE894'} 
                            length={'640px'}
                        />
                    </div>

                    <div className={style.s}>
                        <MiniImageCard 
                            url={'https://videos.ctfassets.net/6p328xbjc78k/2jPAxBXLu34oJUIAKWn3Vl/b2a329ca0286ab318a9edc701b29e996/patrols-your-home-with-3D-floor-mapping-v1.mp4'} 
                            content={'Easy in-app scheduling'} 
                            contentBackgroundColor={'#FFE894'} 
                            length={'495px'} 
                        />
                    </div>

                    <div className="t">
                        <div className="t_container">
                            let see
                        </div>
                    </div>
                </div>
            </div>

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
                                <p className={style.last_container}>Matic saves the average family <span>an hour a day</span> on floor cleaning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ style.review }>
                <div className={ style.review_container }>
                    <div className={style.grid}>
                        {
                            Array(216).fill('G').map((el, i) => {
                                return (
                                    <div 
                                        className={style.grid_item} 
                                        key={i}
                                    >
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className={style.content}>
                        <div className={style.container}>
                            <div className={style.arrow}>
                                <MdArrowBack
                                    color='inherit'
                                    size='30px'
                                />
                            </div>

                            <div className={style.mid}>
                                <div className={ style.mid_container }>
                                    <div>
                                        <img 
                                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F1X1BA9kny15hBQRw6yrOyZ%2F172327fa7d5dd516d30a315022e76f1d%2FBlockQuoteVector3.png&w=3840&q=75" 
                                            alt="" 
                                        />
                                    </div>
                                    <div className={style.cont}>
                                        <p>"It stands out from other consumer option because of the privacy we offer."</p>
                                    </div>

                                    <div className={ style.logo }>
                                        <div className={ style.round }>
                                            ars
                                        </div>
                                        <p>TECHNICA</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.arrow}>
                                <MdArrowForward
                                    color='inherit'
                                    size='30px'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ style.future }>
                <div className={ style.review_container }>
                    <div className={style.content }>
                        <div className={ style.content_container }>
                            <div className={ style.title }>
                                <p>The future of robotics comes home.</p>
                            </div>
                            <div className={ style.description }>
                                Matic was founded by two busy fathers who love technology and hate cleaning. With decades of engineering experience, they’re on a mission to solve everyday problems with remarkable robotics.
                            </div>

                            <div className={style.link }>
                                <a href=".">Interested in Matic? Work with us</a>
                                <button>
                                    <MdArrowForward
                                        size={'20px'}
                                        color='white'
                                        // bac
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={ style.image_1 }>
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F2bl1gqGS3tCMZEzNhmlKOb%2F7804633279273a418ac39d58dcb13bf3%2Fme-2.webp&w=3840&q=75" 
                            alt="image_1" 
                        />
                    </div>

                    <div className={ style.image_2 }>
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F6t3qnMrakNUuBwUFZvUcpr%2Ff029991809a51831c884fb0521a84c6a%2Fcofounders.jpg&w=3840&q=75" 
                            alt="image_2" 
                        />
                    </div>

                    <div className={ style.image_3 }>
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F4vpkj2dmSoQbbhMl2Xw1kn%2F7ada7eca3e2ed2296bec4660a20f53b5%2Fapril.jpg&w=2048&q=75" 
                            alt="image_3" 
                        />
                    </div>

                    <div className={ style.image_4 }>
                        <img 
                            src="https://ds6fdpl176t97.cloudfront.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6p328xbjc78k%2F6HrfQS8yuRq8MAJC0I2xQ7%2F1bef7fbdd4658e3d3f55486563bfd2b2%2Fteam-photo.jpg&w=3840&q=75" 
                            alt="image_4" 
                        />
                    </div>
                </div>
            </div>

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
