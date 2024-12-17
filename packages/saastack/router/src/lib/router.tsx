import styles from './router.module.css';

import { OneColumnLayout } from '@saastack/layouts';

export function Router() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Router!</h1>
      <OneColumnLayout />
    </div>
  );
}

export default Router;
