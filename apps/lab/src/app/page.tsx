import { ViewWrapper } from './components';
import { Button } from '@1xdev/get-random-number';

import styles from './home.module.css';

export default function Page() {

  return (
    <ViewWrapper>
      <div className={styles.main}>
        <h1 className={styles.hero}>Tech lab</h1>
        <Button type='button' className={styles.btn}>Click Here</Button>
      </div>
    </ViewWrapper>
  );
}
