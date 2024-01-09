import PropTypes from "prop-types";

const RightSection = (props) => {
  const { customComponent: CustomComponent } = props;

  return (
    <main id="firstproject" className="pt-24 lg:w-1/2 lg:py-24">
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <a href="/" className="group flex items-center py-3 active">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Home
            </h2>
          </a>
        </div>
        <div>
          <p className="mb-4">{props.para01}</p>
          <p className="mb-4">{props.para02}</p>
        </div>
      </section>
      <section>{CustomComponent && <CustomComponent />}</section>
    </main>
  );
};

RightSection.propTypes = {
  para01: PropTypes.string,
  para02: PropTypes.string,
  customComponent: PropTypes.elementType,
};

export default RightSection;

