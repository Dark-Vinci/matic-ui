import { JSX } from 'react';

import style from './VideoCard.module.scss';

interface VideoCardProps {
    readonly children: JSX.Element;
    readonly url: string;
    readonly type: string;
}

export function VideoCard({ url, type, children }: VideoCardProps): JSX.Element {
    return (
        <div className={ style.container}>
            <div className={ style.video_container }>
                <div className={ style.vid_container }>
                    <video 
                        muted 
                        controls={false} 
                        autoPlay 
                        loop
                    >
                        <source src={url} type={type} />
                    </video>
                </div>

                <div className={ style.children_container }>
                    { children }
                </div>
            </div>
        </div>
    );
}