import { JSX } from 'react';

import style from './MiniImageCard.module.scss';

interface MiniImageCardProps {
    readonly url: string;
    readonly content: string;
    readonly contentBackgroundColor: string;
    readonly length: string;
    readonly width?: string;
    readonly height?: string;
}

export function MiniImageCard({ 
    url, 
    content, 
    contentBackgroundColor, 
    length, 
    width,
    height,
}: MiniImageCardProps): JSX.Element {
    return (
        <div className={ style.container }>
            <div 
                className={ style.card_container }
            >
                <div className={style.video_container }>
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        style={{ width: width ?? length, height: height ?? length }}
                    >
                        <source src={url} type="video/mp4" />
                    </video>
                </div>

                <div className={style.content }>
                    <div 
                        className={style.content_container }
                        style={{ backgroundColor: contentBackgroundColor }}
                    >
                        <p>{ content }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
