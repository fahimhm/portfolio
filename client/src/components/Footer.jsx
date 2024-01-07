import { footerLinks } from "../constants"

const Footer = () =>  (
  <ul className="ml-1 mt-8 flex items-center">
		{footerLinks.map((nav, index) => (
			<li key={nav.id} className="mr-5 text-xs">
				<a href={`#${nav.link}`} className="block hover:text-slate-200">
					<span className="sr-only">
						{nav.id}
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={nav.viewBox} fill="currentColor" className="h-6 w-6">
						<path d={nav.pathTxt}></path>
					</svg>
				</a>
			</li>
		))}
	</ul>
)

export default Footer