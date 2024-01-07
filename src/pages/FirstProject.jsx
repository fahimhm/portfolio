import { Layout } from "../layouts";
import { card_image, profiles } from "../assets";

const Card = () => {
  return (
    <div className="container w-[300px] h-[450px] overflow-hidden mx-auto my-auto bg-slate-100 rounded-lg hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition">
      <div className="overflow-hidden h-1/3 w-full">
        <img
          src={card_image}
          alt="for card component"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="mx-5 my-3">
        <ul className="mt-2 flex flex-wrap">
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-medium leading-5 text-white uppercase tracking-wider">
              Technology
            </div>
          </li>
        </ul>
        <div className="mt-2">
          <h1 className="font-bold text-slate-900">
            I built this Card Component using React JS and Tailwind CSS
          </h1>
          <p className="mt-2 text-slate-800 text-sm">
            If you need to, you can check my github account...
          </p>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-shrink-0 mr-4">
            <img src={profiles} alt="profile" className="rounded-full h-16 w-16" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-slate-800">
              Fahim Maula
            </h2>
            <p className="text-gray-600">
              Freelancer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstProject = () => {
  const titleName = "Dummy Project #1";
  const shortDesc = "Blog Card Component";
  const longDesc =
    "Welcome to my portfolio showcase featuring a captivating dummy project inspired by frontendpro.dev --a Blog Card Component created with the dynamic duo of React JS and Tailwind CSS. This immersive project not only serves as a testament to my proficiency in frontend development but also highlights my keen eye for design details and responsiveness.";
  const para01 =
    "In crafting this Card Component, my primary goal was to seamlessly capture the essence of the provided design while ensuring an optimal user experience. A key aspect of the project involved meticulously implementing the hover state for all elements, allowing users to interact with the component effortlessly. This attention to detail enhances the overall visual appeal and interactivity, creating a polished and engaging user interface.";
  const para02 =
    "I dedicated significant effort to ensuring the responsiveness of the Blog Card Component across various screen size. Leveraging the power of React JS and Tailwind CSS, I meticulously desgined and structured the layout to adapt gracefully to different devices, from desktops to smartphones.";

  return (
    <Layout
      titleName={titleName}
      shortDesc={shortDesc}
      longDesc={longDesc}
      para01={para01}
      para02={para02}
      customComponent={Card}
    />
  );
};

export default FirstProject;
