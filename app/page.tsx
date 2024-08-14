import styles from './page.module.css';
import BearCounter from './src/components/layout/BearCounter/BearCounter';
import { Counter } from './src/components/layout/Counter/Counter';
import { CounterStoreProvider } from './src/providers/counter-store-provider';

export default function Home() {
  return (
    <CounterStoreProvider>
      <main className={styles.main}>
        <div className={styles.columns}>
					<h1>Simple counter</h1>
       		<Counter />
				</div>
        <div>
					<h1>Bear counter</h1>
        	<BearCounter />
				</div>
      </main>
    </CounterStoreProvider>
  );
}
