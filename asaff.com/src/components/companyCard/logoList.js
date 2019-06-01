import { h } from "preact"
import style from "./style.sass"

const LogoList = ({ item }) => {
    let { title, logoClasses } = item
    let logo = logoClasses.map((className, key) => {
        let logoClass = style[`${className}`]
        return <div class={`${style.logo} ${logoClass}`} key={key} />
    })
    return (
        <div class={style.company__logosContainer}>
            <h5 class={style.logos__title}>{title}</h5>
            {logo}
        </div>
    )
}

export default LogoList