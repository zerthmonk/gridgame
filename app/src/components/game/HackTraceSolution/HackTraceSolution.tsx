import React from 'react';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import { RandomizeText } from '_components/misc/RandomizeText/RandomizeText';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './styles.module.scss';


export const HackTraceSolution: React.FC = ({ className }: BaseComponentProps) => {
  const state = useContext(HackStateContext);
  const hexCode = (idx: number): string => {
    const pos = state.cells.selected[idx];
    return pos ? state.field[pos[0]][pos[1]] : '--';
  };

  return (
    <div className={classnames(styles.root, className)}>
      <RandomizeText value={'backtrace solution:'} className={styles.label}/>
      <div className={styles.backtrace}>
        {Array.from(Array(state.tries)).map((_, idx) => {
          return <div key={nanoid()} className={styles.cell}><span>{hexCode(idx)}</span></div>
        })}
      </div>
    </div>
  )
}
