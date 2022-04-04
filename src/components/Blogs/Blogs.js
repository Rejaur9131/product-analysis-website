import React from 'react';

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4 mx-2">
      <div className="bg-emerald-600 text-white text-left p-4">
        <h2 className="text-2xl font-bold">Context:</h2>
        <p className="text-xl">It's a way to share states through the component tree without having props drilling(to pass props down manually at every level ). First, you need to create a context by using React.createContext and storing into variable. After this you need to export context to use it from other files. Then you will have to wrap the components with a Provider component that provides the state to it's children. Provider component accepts a value prop to be passed to the component that uses the provider. Lastly you can use context by importing it using useContext(VariblenameContext).</p>
      </div>
      <div className="bg-emerald-600 text-white text-left p-4">
        <h2 className="text-2xl font-bold">Semantic Tags:</h2>
        <p className="text-xl">Sematic tags makes html Elements more meaningful. It does not impact in display. It is useful for SEO purpose. Examples of Sematic Tags :a. header b. nav c. main d. section e. article f. footer</p>
      </div>
      <div className="bg-emerald-600 text-white text-left p-4">
        <h2 className="text-2xl font-bold">Block, InLine and InLine-Block:</h2>
        <p className="text-xl">a: InLine: Displays an element as an inline element. Inline element only takes the space it requires. Any height and width properties will have no effect. Inline elements: a, img, span, em, strong, small etc.</p>
        <p className="text-xl">b: Inline-block: It's essentially the same thing as inline, except that height and width can be set.</p>
        <p className="text-xl">c. Block: Starts on a new lineand takes up the full width available. Block elements:div, h1, p, li, section etc.</p>
      </div>
    </div>
  );
};

export default Blogs;
