import { h } from "preact"
import style from './style.sass'

const ContactSection = () => (
    <section class={style.contact__section}>
        <h5 class={style.section__title}>Contact Us</h5>
        <p>enquiries@asaff.com</p>
        <p>673 2440959/2454959</p>
    </section>
)

export default ContactSection