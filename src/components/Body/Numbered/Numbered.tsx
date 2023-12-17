import { JSX } from 'react';

import style from './Numbered.module.scss';

interface NumberedProps {
    readonly title: string;
    readonly description: string;
    readonly button: string;
    readonly buttonColor: string;
}

export function Numbered({description, title, button, buttonColor }: NumberedProps): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.w_container }>
                <div className={style.button }>
                    <p  style={{ backgroundColor: buttonColor }}>{ button }</p>
                </div>
                <div className={style.title }>
                    <p>{ title }</p>
                </div>
                <div className={style.description }>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    );
}
