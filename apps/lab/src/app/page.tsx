import { ViewWrapper } from './components';
import { Button } from '@1xdev/get-random-number';
import { CustomInput } from '@1xdev/luis';

import styles from './home.module.css';

export default function Page() {

  return (
    <ViewWrapper>
      <div className={styles.main}>
        <h1 className={styles.hero}>Tech lab</h1>
        <CustomInput label='My input' type='text' id='my-input' placeholder='Write here'/>
        <Button type='button' className={styles.btn}>Click Here</Button>
      </div>
    </ViewWrapper>
  );
}
