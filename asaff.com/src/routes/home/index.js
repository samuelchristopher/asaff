import { h } from 'preact';
import style from './style.sass';
import CompanyCard from '../../components/companyCard'
import ContactSection from '../../components/contactSection'

const Home = () => (
	<div class={style.mobile__container}>
		<div class={style.asaffGroupContainer}>
			<div class={style.companies__asaffGroup}>
				<h3 class={style.asaffGroup__title}>ASAFF Group</h3>
			</div>
			<div class={style.line__downShort}></div>
			<div class={style.line__leftLong}></div>
			<div class={style.line__downLong}></div>
		</div>
		<CompanyCard 
			companyName="Abdul Saman Ahmad Freight Forwarding"
			bgClass="freightForwardingBg"
			desc="We offer Muara Container Terminal Operation, International Freight Forwarding Services, International Relocation Services, Warehousing Services."
			logos={[
				{
					title: 'partners',
					logoClasses: [ 'icts', 'team', 'santafe' ]
				},
				{
					title: 'clients',
					logoClasses: ['shell', 'bsm', 'lng', 'bstbgc', 'mindef', 'mmw']
				}
			]}
			/>
		<CompanyCard 
			companyName="ASAFF Mutiara Marine"
			bgClass="mutiaraMarineBg"
			desc="We offer Shipping Services, Shipping Routing Services, Marine Services – Oil &amp; Gas."
			logos={[
				{
					title: 'partners',
					logoClasses: [ 'simatech', 'mmv', 'asiangeos' ]
				}
			]}
			/>
		<CompanyCard 
			companyName="ASAFF Solutions"
			bgClass="solutionsBg"
			desc="We offer training & seminar on ICT & Telecommunication, telecommunication Solution & ICT, Telecommunication Equipment"
			logos={[
				{
					title: 'partners',
					logoClasses: [ 'dst', 'progresif', 'telbru', 'ibm' ]
				},
				{
					title: 'accredited by',
					logoClasses: ['aiti']
				}
			]}
			/>
		<ContactSection />
	</div>
);

export default Home;
