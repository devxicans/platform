import { ViewWrapper } from './components';
import { Header } from './_shared';

import styles from './home.module.css';

export default function Page() {
  return (
    <ViewWrapper>
      <div className={styles.main}>
        <Header />
      </div>
    </ViewWrapper>
  );
}
