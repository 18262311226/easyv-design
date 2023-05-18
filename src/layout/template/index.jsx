import { useEffect } from 'react'
import styles from './index.module.less'

import Header from './header/index'
import Left from './left/index'
import Container from './container/index'
import Right from './right/index'

function Template () {
    return (
        <div>
            <Header></Header>
            <Left></Left>
            <Container></Container>
            <Right></Right>
        </div>
    )
}

export default Template