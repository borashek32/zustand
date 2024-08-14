import styles from './page.module.css';
import { Counter } from './src/components/layout/Counter/Counter';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Counter />
            </div>
        </main>
    );
}
