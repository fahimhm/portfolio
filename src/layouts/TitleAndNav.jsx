import PropTypes from "prop-types";

const TitleAndNav = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        {props.titleName}
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {props.shortDesc}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">{props.longDesc}</p>
      <nav className="nav hidden lg:block">
        <ul className=""></ul>
      </nav>
    </div>
  );
};

TitleAndNav.propTypes = {
  titleName: PropTypes.string,
  shortDesc: PropTypes.string,
  longDesc: PropTypes.string,
};

export default TitleAndNav;
