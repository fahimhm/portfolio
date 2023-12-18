import { Layout } from "../layouts";

const FirstProject = () => {
  const titleName = "Dummy Project #1";
  const shortDesc = "Blog Card Component";
	const longDesc = "This dummy project comes from frontendpro.dev that made me build a Blog Card. This is perfect to strengthen my ability on React JS and Tailwind CSS.";

  return (
    <Layout
      titleName={titleName}
      shortDesc={shortDesc}
      longDesc={longDesc}
    />
  );
};

export default FirstProject;
