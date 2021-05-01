import React, { useState } from 'react';
import { ButtonHeadless } from './Button-Headless';
import styles from './Button-PrimaryHead.module.scss';

export interface ButtonPrimaryHeadProps {
    caption: string;
}

export function ButtonPrimaryHead (props: ButtonPrimaryHeadProps) {
    const [working, setWorking] = useState(false);

    const simulateWork = () => {
        setWorking(true);
        setTimeout( () => setWorking(false), 500);
    }
  
    return ( 
            <ButtonHeadless working={working} onPress={simulateWork}>
                    {
                    (stateClassNames, spreadAttributes) => {
                        const className = stateClassNames.map( x => styles[x]).join(' ');
                        return (
                            <button className={`${className} ${styles['component']}`} {...spreadAttributes}>
                                <div className={styles['focus-ring']}>
                                    <div className={styles['text']}>{props.caption}</div>                                    
                                </div>
                            </button>
                        )
                    }
                }
                </ButtonHeadless>
            );
  }

