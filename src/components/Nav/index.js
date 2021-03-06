const Nav = () => {
  const categories = [
    {
      name: "Commercial",
      description: "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "Portraits",
      description: "Portraits of people in my life",
    },
    {
      name: "Food",
      description: "Delicious delicacies",
    },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const categorySelected = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => {
            return (
            <li key={category.name} className="mx-1">
              <span onClick={() => {categorySelected(category.name)}}>{category.name}</span>
            </li>)
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;