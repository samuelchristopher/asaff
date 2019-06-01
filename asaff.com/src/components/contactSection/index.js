import { h } from "preact"
import style from './style.sass'

const ContactSection = () => (
    <section class={style.contact__section}>
        <h5 class={style.section__title}>Contact Us</h5>
        <p>inquiries@asaff.com</p>
        <p>(673) 2220293</p>
    </section>
)

export default ContactSection