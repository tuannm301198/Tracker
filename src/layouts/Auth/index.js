import React from 'react';

import styles from './index.less';
import { Redirect } from 'umi';

const Auth = props => {

  // React.useEffect(() => {
    const user = localStorage.getItem('user');
    if(user) return <Redirect to="/"/>
  // }, [])

  console.log('aaaaaaaaa')

  return (
    <div className={styles.layoutWrapper}>
      <img className={styles.bgImg} src="https://app.tookanapp.com/app/img/signup-bg.svg" alt="bgImg"/>
      {props.children}
    </div>
  )
}

export default Auth;
