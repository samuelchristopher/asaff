import { h, Component } from "preact"
import style from "./style.sass"
import LogoList from "./logoList";

class CompanyCard extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }

        this.toggleIsOpen = this.toggleIsOpen.bind(this)
    }

    toggleIsOpen() {
        let { isOpen } = this.state
        this.setState({
            isOpen: !isOpen 
        })
    }

    render() {
        let { isOpen } = this.state
        let { companyName, desc, logos, bgClass, blockClass, isConstruction } = this.props
        let backgroundClass = style[`${bgClass}`]
        let companyBlock = style[`${blockClass}`]
        let logosComponents
        let extraClass
        if (logos) {
            logosComponents = logos.map((item, key) => {
                return <LogoList item={item} key={key}/>
            })
        }

        if (isConstruction) {
            extraClass = style.constructionNoBorder
        } else {
            isConstruction = false
        }
        return (
            <div>
                <div class={
                    (isOpen && !isConstruction) ? style.topLine : ''
                }/>
                <div class={
                    bgClass === 'constructionBg' ? style.constructionLine : ''
                }/>
                
                <div class={
                    isOpen ? `${style.companies__container} ${style.containerOpen}` : style.companies__container                
                }>
                    <div class={
                        isOpen ? `${style.company__container} ${companyBlock}` : `${style.company__container} ${extraClass}`
                    }>
                        <div class={style.line__leftShort}></div>
                        <div class={
                            isOpen ? `${style.company__header} ${backgroundClass} ${style.headerOpen}` : `${style.company__header} ${backgroundClass}`
                        }>
                            <h4 class={style.company__title}>{ companyName }</h4>
                            <div onClick={this.toggleIsOpen} class={
                                isOpen ? `${style.company__viewButton} ${style.closeButton}`: style.company__viewButton }
                            >
                                <h4 class={style.viewButton__text}>{ isOpen ? 'close' : 'view' }</h4>
                            </div>
                        </div>
                        <div class={
                            isOpen ? `${style.company__content} ${style.contentShow}`: style.company__content
                        }>
                            <p class={style.company__description}>{ desc }</p>
                            { logosComponents }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyCard