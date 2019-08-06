import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { changeModalVisibility } from "../store/actions/modal-actions"

const Header = ({ siteTitle, modal, changeModalVisibility }) => {

  const showBlur = Object.values(modal).some(v => v)

  return (
    <header className={showBlur ? 'blur' : null}>
      <div className={'title'}>Rh Inteligente</div>
      <div className={'opcoes'}>
        <button className={'experimente-gratis'} onClick={()=> changeModalVisibility('cadastro', true)}>Experimente Gratis</button>
        <button className={'solicite-demonstracao'}>Solicitar Demonstracao</button>
        <div className={'entrar'}>Entrar</div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


const mapStateToProps = ({modal}) => ({
  modal,
})

const mapDispatchToProps = dispatch => ({
  changeModalVisibility: (target, value) => dispatch(changeModalVisibility(target, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
