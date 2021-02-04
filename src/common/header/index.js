import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
//这里是为了解决react严格模式下会报错：Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode
// 解决：https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst
const nodeRef = React.createRef(null)

// 将store中的state注入到组件的props中
const mapStateToProps = (state) => {
    // console.log('在header组件中打印的state=====>', state)
    return {
        isFocus: state.isFocus
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFocus() {
        dispatch({
            type: 'search_focus',
        })
    },
    handleBlur() {
        dispatch({
            type: 'search_blur',
        })
    }
})
const Header = (props) => {
    console.log('props====>', props)
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        nodeRef={nodeRef}
                        in={props.isFocus}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            ref={nodeRef}
                            className={props.isFocus ? 'focus' : ''}
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.isFocus ? 'iconfont focus' : 'iconfont'}>&#xe69d;</span>
                    <span >&#xe69d;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe708;</span>
                写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)