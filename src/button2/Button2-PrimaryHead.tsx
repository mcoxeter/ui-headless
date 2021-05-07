import React, { useRef } from 'react';
import { ButtonHeadless } from './Button2-Headless';
import styles from './Button2-PrimaryHead.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Inline } from '../inline/Inline';
import { ButtonProps } from './Button2-Interfaces';

export function Button2PrimaryHead (props: ButtonProps) {
  const myRef = useRef<HTMLButtonElement>(null);

    return ( 
      <ButtonHeadless {...props} buttonRef={myRef} >
        {
          (classes, spreadAttributes) => {
            const className = toClassName(classes.concat('button-component'));
            return (
              <button ref={myRef} type="button" className={className} {...spreadAttributes}>
                <Ring {...props}>
                  <Inline spacing={'08du'} align={'center'}><Caption {...props}/><Icon {...props}/></Inline>                  
                </Ring>
              </button>
              );
            }
          }
          </ButtonHeadless>
    );
  }


function Ring(props: React.PropsWithChildren<ButtonProps> ) {
  return (<div className={styles['button-ring']}>
      {props.children}
    </div>);
}

function Caption(props: React.PropsWithChildren<ButtonProps>): JSX.Element | null {
  return props.caption 
    ? (<div className={styles['button-caption']}>{props.caption}</div>)
    : null;
}

function Icon(props: React.PropsWithChildren<ButtonProps>): JSX.Element | null {
  return props.iconName 
    ? <FontAwesomeIcon className={styles['button-icon']} icon={['fas', props.iconName]}/>
    : null;
}

function toClassName( classes: string[] ): string {
  const mapped = classes.map( x => styles[x]);
  return mapped.join(' ');
}