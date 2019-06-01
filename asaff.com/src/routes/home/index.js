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
			blockClass="freightBlock"
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
			blockClass="mutiaraBlock"
			pushDown="30px"
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
			blockClass="solutionsBlock"
			pushDown="30px"
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
		<CompanyCard 
			companyName="Circle Freight International"
			bgClass="circleBg"
			blockClass="circleBlock"
			pushDown="30px"
			desc="CIRCLE is the appointed agent for CEVA Worldwide for handling goods of Multi-National Companies Shipments via Air & Sea for Oil & Gas and other Industry. In 2011 & 2013, CIRCLE has been appointed by Royal Brunei Technical Services (RBTS) to handle all the Incoming & Outgoing shipment for the international Exhibitors who participated in the Brunei Darussalam International Defense Exhibition & Conference"
			logos={[
				{
					title: 'partners',
					logoClasses: [ 'ceva' ]
				},
				{
					title: 'clients',
					logoClasses: ['rbts']
				}
			]}
			/>
		<CompanyCard 
			companyName="Maruni United Industries"
			bgClass="maruniBg"
			blockClass="maruniBlock"
			pushDown="30px"
			desc="Maruni United Industries Sdn Bhd., is a Bumiputra Company established in the year 2012 & focusing in the Oil & Gas as its core business activities. Namely, Pipeline Equipment & Accessories, Estate maintenance and Facilities Services, Personal Protective Equipment Suppliers"
			/>
		<CompanyCard 
			companyName="Harbour Link Lines (B) Sdn Bhd"
			bgClass="harbourBg"
			blockClass="harbourBlock"
			pushDown="30px"
			desc="We provide Shipping Routing Services and we are partners with Harbour Link Group Berhad"
			logos={[
				{
					title: 'partners',
					logoClasses: ['harbour']
				}
			]}
			/>
		<CompanyCard 
			companyName="Nurasa Construction & Maintenance"
			bgClass="constructionBg"
			blockClass="constructionBlock"
			pushDown="30px"
			desc="We provide Building and Road Constructions, Civil Works in Landscaping, Roads and Earthworks"
			logos={[
				{
					title: 'partners',
					logoClasses: ['pbd']
				},
				{
					title: 'accredited by',
					logoClasses: ['mindev']
				}
			]}
			/>
		<ContactSection />
	</div>
);

export default Home;
