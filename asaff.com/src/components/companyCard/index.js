import { h, Component } from "preact"
import style from './style.sass'

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
        return (
            <div class={
                isOpen ? `${style.companies__container} ${style.containerOpen}` : style.companies__container                
            }>
                <div class={
                    isOpen ? `${style.company__container} ${style.company__block}` : style.company__container
                }>
                    <div class={style.line__leftShort}></div>
                    <div class={
                        isOpen ? `${style.company__header} ${style.freightForwardingBg} ${style.headerOpen}` : `${style.company__header} ${style.freightForwardingBg}`
                    }>
                        <h4 class={style.company__title}>Abdul Saman Ahmad Freight Forwarding</h4>
                        <div onClick={this.toggleIsOpen} class={
                            isOpen ? `${style.company__viewButton} ${style.closeButton}`: style.company__viewButton }
                        >
                            <h4 class={style.viewButton__text}>{ isOpen ? 'close' : 'view' }</h4>
                        </div>
                    </div>
                    <div class={
                        isOpen ? `${style.company__content} ${style.contentShow}`: style.company__content
                    }>
                        <p class={style.company__description}>We offer Muara Container Terminal Operation, International Freight Forwarding Services, International Relocation Services, Warehousing Services.</p>
                        <div class={style.company__logosContainer}>
                            <h5 class={style.logos__title}>partners</h5>
                            <div class={`${style.logo} ${style.icts}`} />
                            <div class={`${style.logo} ${style.team}`} />
                        </div>
                        <div class={style.company__logosContainer}>
                            <h5 class={style.logos__title}>clients</h5>
                            <div class={`${style.logo} ${style.icts}`} />
                            <div class={`${style.logo} ${style.team}`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyCard