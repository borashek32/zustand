'use client';

import styles from './BearsCounter.module.css';
import { useBearStore } from '@/app/src/store/bearStore';
import React from 'react';

const BearCounter: React.FC = () => {
  const { bears, increase, decrease } = useBearStore();

  return (
    <div>
      <h1 className={styles.bears}>Bears: {bears}</h1>
      <button onClick={() => increase(1)}>Add a bear</button>
      <button onClick={() => decrease(1)}>Remove a bear</button>
    </div>
  );
};

export default BearCounter;
