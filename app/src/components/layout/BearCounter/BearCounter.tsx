'use client';

import { useBearStore } from '@/app/src/stores/bearStore';
import React from 'react';

const BearCounter: React.FC = () => {
  // Извлекаем состояние и действие из хранилища
  const { bears, increase } = useBearStore();

  return (
    <div>
      <h1>Bears: {bears}</h1>
      <button onClick={() => increase(1)}>Add a bear</button>
    </div>
  );
};

export default BearCounter;
