import React from 'react';
import { HackContainer } from '_containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';
import { HackHeader } from '_components/game/HackHeader/HackHeader';
import { HackControls } from '_components/game/HackControls/HackControls';
import { ContainGameInfo } from '_components/game/ContainGameInfo/ContainGameInfo';
import { ContainField } from '_components/game/ContainField/ContainField';
import styles from './styles.module.scss';
import classnames from 'classnames';


export function HackPage(): React.ReactElement {

  return (
    <HackContainer>
      <Layout className={styles.root}
        header={<HackHeader/>}
        main={<ContainField className={classnames(styles.dotted, styles.field)}/>}
        aside={<ContainGameInfo className={styles.backtrace}/>}
        footer={<HackControls/>}
        background={<Background/>}
      />
    </HackContainer>
  )
}
