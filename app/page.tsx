import styles from './page.module.css';
import { Counter } from './src/components/layout/Counter/Counter';
import { CounterStoreProvider } from './src/providers/counter-store-provider';

export default function Home() {
  return (
    <CounterStoreProvider>
      <main className={styles.main}>
        <div className={styles.center}>
          <Counter />
        </div>
      </main>
    </CounterStoreProvider>
  );
}
