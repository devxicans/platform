import { ViewWrapper } from './components';
import { CardCustom } from '@1xdev/pablo'

import styles from './home.module.css';

export default function Page({ children }: {children: React.ReactNode }) {

  return (
    <ViewWrapper>
      <div className={styles.main}>
        <h1 className={styles.hero}>Tech lab</h1>
        <CardCustom className="custom-class">
          My package
        </CardCustom>
      </div>
    </ViewWrapper>
  );
}
