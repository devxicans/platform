import { ViewWrapper } from './components';

import styles from './home.module.css';

export default function Page(){

  return (
    <ViewWrapper>
      <div className={styles.main}>
        <h1 className={styles.hero}>Tech lab</h1>
      </div>
    </ViewWrapper>
  );
}
