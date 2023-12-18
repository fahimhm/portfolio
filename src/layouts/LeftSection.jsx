import { Footer } from "../components";
import { TitleAndNav } from "../layouts";
import PropTypes from "prop-types";

const LeftSection = (props) => (
  <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <TitleAndNav
      titleName={props.titleName}
      shortDesc={props.shortDesc}
      longDesc={props.longDesc}
    />
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="/">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Home
            </span>
          </a>
        </li>
      </ul>
    </nav>
    <Footer />
  </header>
);

LeftSection.propTypes = {
  titleName: PropTypes.string,
  shortDesc: PropTypes.string,
  longDesc: PropTypes.string,
};

export default LeftSection;

