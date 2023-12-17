import { JSX } from 'react';

import style from './MiniImageCard.module.scss';

export function MiniImageCard(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className="card_container">
                Mini card;
            </div>
        </div>
    );
}
