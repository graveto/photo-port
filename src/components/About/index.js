import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} />
    </section>
  );
};

export default About;