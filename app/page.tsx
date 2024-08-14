import styles from './page.module.css';
import BearCounter from './src/components/layout/BearCounter/BearCounter';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Bear counter</h1>
        <BearCounter />
      </div>
    </main>
  );
}
