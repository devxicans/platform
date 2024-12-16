import { ViewWrapper } from './components';
import { CustomInput } from '@1xdev/luis';

import styles from './home.module.css';

export default function Page() {

  return (
    <ViewWrapper>
      <div className={styles.main}>
        <h1 className={styles.hero}>Tech lab</h1>
        <CustomInput label='My input' type='text' id='my-input' placeholder='Write here' name='My input'/>
      </div>
    </ViewWrapper>
  );
}
