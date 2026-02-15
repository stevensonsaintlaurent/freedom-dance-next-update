export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Freedom Dance Studio
        </h1>

        <div className="space-y-8">
          <p>
            At Freedom Dance Studio, we are dedicated to fostering a passion for
            the arts in a welcoming and inclusive environment. Located in Las
            Vegas, our studio offers a diverse range of dance classes—including
            ballet, hip-hop, bachata,salsa ,kizomba,konpa, and more—alongside
            music lessons for various instruments.
          </p>
          <p>
            Beyond education, we serve as a vibrant event center, hosting
            recitals, performances, and community gatherings that celebrate
            creativity and artistic expression. Our experienced instructors are
            committed to nurturing talent and building confidence in every
            student.
          </p>
          <p>
            Join us at Freedom Dance Studio, where the love for dance and music
            comes alive! Whether you&apos;re a beginner or an experienced
            dancer, we have something for everyone. We can&apos;t wait to
            welcome you to our community and share the joy of dance and music
            together!
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <img
          src="/about-1.jpg"
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="col-span-2">
        <img src="/about-2.jpg" alt="Family that manages The Wild Oasis" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Our mission is to inspire and empower people of all ages and
            backgrounds through the art of dance. We aim to cultivate a vibrant
            and inclusive community where everyone feels welcome to explore the
            world of dance, express themselves, and connect with others who
            share their love for movement.
          </p>
          <p>
            At Freedom Dance, we take pride in our team of experienced and
            passionate dance instructors. Each instructor brings a unique style
            and expertise to our classes, ensuring a diverse and enriching
            experience for our students. We are committed to providing
            high-quality dance education in a supportive and encouraging
            environment.
          </p>

          <div>
            <a
              href="/classes"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury classes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
