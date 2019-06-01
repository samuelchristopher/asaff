import { h } from "preact"
import style from './style.sass'

const Footer = () => (
    <footer>
        <div class={style.footer__block}></div>
        <p class={style.footer__copyright}>Copyright ASAFF Group. <br /> All rights reserved.</p>
        <div class={style.swoosh}></div>
    </footer>
)

export default Footer