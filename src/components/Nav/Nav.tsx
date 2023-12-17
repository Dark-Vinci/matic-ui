import { JSX } from 'react';

import style from './Nav.module.scss';

// before scroll -> transparent
// after scroll -> black;

interface  BaseProps {}

interface NavProps extends BaseProps {
    readonly scrollHeight: number;
}

export function Nav({scrollHeight}: NavProps): JSX.Element {
    return (
        <div 
            className={style.container} 
            style={{backgroundColor: scrollHeight > 54 ?  'white' : 'transparent'}}
        >
            <div className={style.matic}>
                <div className={style.matic_container}>
                    <p style={{color: scrollHeight > 54 ? 'black':'white'}}>Shop Matic</p>
                </div>
            </div>

            <div className={style.logo}>
                <div 
                    className={ style.logo_container }
                >
                    <svg width="110" height="32" fill="black" viewBox="0 0 110 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.107 13.795c-.846 0-1.532.696-1.532 1.555v7.016c0 .86.686 1.556 1.532 1.556h7.455v7.77h-7.455c-5.075 0-9.189-4.175-9.189-9.326v-7.239c0-5.15 4.114-9.404 9.19-9.404h.583c8.742 0 15.829 7.27 15.829 16.143v9.808h-7.657v-9.585c0-4.58-3.659-8.294-8.172-8.294h-.584Z" fill={scrollHeight > 54 ? 'black':'white'}></path>
                        <path d="M61.824 0v23.568c0 4.657 3.72 8.432 8.308 8.432 4.588 0 8.307-3.775 8.307-8.432v-8.45h-7.656v8.45a.656.656 0 0 1-.651.661.656.656 0 0 1-.651-.66v-9.787h8.963V6.05H69.48V0h-7.657Z" fill={scrollHeight > 54 ? 'black':'white'}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M79.758 31.694V6.05h7.657v25.644h-7.657v-.001Z" fill={scrollHeight > 54 ?  'black':'white'}></path>
                        <path d="M78.879 0c.006 2.597 2.081 4.698 4.64 4.698 2.56 0 4.635-2.102 4.642-4.698h-9.282Z" fill={scrollHeight > 54 ? 'black':'white'}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M96.192 22.489c0 .848.686 1.535 1.532 1.535h12.274v7.668H97.724c-5.075 0-9.189-4.12-9.189-9.203v-.585c0-8.755 7.085-15.853 15.828-15.853h5.636v7.727h-5.636c-4.512 0-8.171 3.606-8.171 8.126v.585Z" fill={scrollHeight > 54 ? 'black':'white'}></path>
                        <path d="M12.977 19.822c0-3.16-2.317-5.645-5.32-6.051v17.924H0v-19.16C0 8.705 2.95 5.71 7.277 5.71c3.715 0 6.112 1.343 8.327 2.88 1.357-1.433 2.54-2.823 5.53-2.88 5.859-.112 12.478 5.44 12.478 13.89v12.095h-7.657V19.822c0-3.16-2.317-5.645-5.32-6.051v17.924h-7.657V19.823h-.001Z" fill={scrollHeight > 54 ? 'black':'white'}></path>
                    </svg>
                </div>
            </div>

            <div className={style.cart}>
                <div className={ style.cart_container }>
                    <div>
                        <p style={{color: scrollHeight > 54 ? 'black':'white'}}> Cart</p>
                        <div>
                            <span
                                style={{
                                    backgroundColor: scrollHeight > 54 ?  'black' : 'white', 
                                    color: scrollHeight > 54 ?  'white' : 'black', 
                                }}
                            >0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
