import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Blooger</title>
        {/* Font Awesome Icons */}
        <link rel="stylesheet" href="/css/all.module.css" />
        {/* Owl Carousel */}
        <link rel="stylesheet" href="/css/owl.carousel.min.module.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.module.css" />
        {/* AOS Library */}
        <link rel="stylesheet" href="/css/aos.module.css" />
        {/* Custom Style */}
        <link rel="stylesheet" href="/css/Style.module.css" />
      </Head>

      <nav className="nav">
        <div className="nav-menu flex-row">
          <div className="nav-brand">
            <a href="#" className="text-gray">
              TrAveL Blooger
            </a>
          </div>
          <div className="toggle-collapse">
            <div className="toggle-icons">
              <i className="fas fa-bars" />
            </div>
          </div>
          <div>
            <ul className="nav-items">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">Category</a>
              </li>
              <li className="nav-link">
                <a href="#">Archive</a>
              </li>
              <li className="nav-link">
                <a href="#">Pages</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="social text-gray">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="site-title">
          <div
            className="site-background"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>Tours &amp; Travels</h3>
            <h1>Amazing Place on Earth</h1>
            <button className="btn">Explore</button>
          </div>
        </section>

        <section>
          <div className="blog">
            <div className="container">
              <div className="owl-carousel owl-theme blog-post">
                <div
                  className="blog-content"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <Image
                    src="/assets/Blog-post/post-1.jpg"
                    alt="post-1"
                    width={600}
                    height={400}
                  />
                  <div className="blog-title">
                    <h3>Steaks the new game</h3>
                    <button className="btn btn-blog">Food</button>
                    <span>2 minutes</span>
                  </div>
                </div>
                {/* Repeat for other blog posts */}
              </div>
              <div className="owl-navigation">
                <span className="owl-nav-prev">
                  <i className="fas fa-long-arrow-alt-left" />
                </span>
                <span className="owl-nav-next">
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="site-content">
            <div className="posts">
              <div
                className="post-content"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="post-image">
                  <Image
                    src="/assets/Blog-post/blog1.png"
                    className="img"
                    alt="blog1"
                    width={600}
                    height={400}
                  />
                  <div className="post-info flex-row">
                    <span>
                      <i className="fas fa-user text-gray" />
                      &nbsp;&nbsp;Admin
                    </span>
                    <span>
                      <i className="fas fa-calendar-alt text-gray" />
                      &nbsp;&nbsp;January 14, 2024
                    </span>
                    <span>2 Comments</span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">
                    thinking on where to travel next ? We got you covered!!
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque voluptas deserunt beatae adipisci iusto totam placeat
                    corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem
                    ipsam ducimus minus magni illum similique veniam tempore
                    unde?
                  </p>
                  <button className="btn post-btn">
                    Read More &nbsp; <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
              {/* Repeat for other posts */}
            </div>
            <aside className="sidebar">
              {/* Categories and Popular Posts */}
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="about-us" data-aos="fade-right" data-aos-delay={200}>
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia atque nemo ad modi officiis iure, autem nulla
              tenetur repellendus.
            </p>
          </div>
          <div
            className="newsletter"
            data-aos="fade-right"
            data-aos-delay={200}
          >
            <h2>Newsletter</h2>
            <p>Stay updated with our latest</p>
            <div className="form-element">
              <input type="text" placeholder="Email" />
              <span>
                <i className="fas fa-chevron-right" />
              </span>
            </div>
          </div>
          <div className="instagram" data-aos="fade-left" data-aos-delay={200}>
            <h2>Instagram</h2>
            <div className="flex-row">
              <Image
                src="/assets/Blog-post/post-1.jpg"
                alt="post-1"
                width={100}
                height={100}
              />
              <Image
                src="/assets/Blog-post/post-2.jpg"
                alt="post-2"
                width={100}
                height={100}
              />
              <Image
                src="/assets/Blog-post/post-3.jpg"
                alt="post-3"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="follow" data-aos="fade-left" data-aos-delay={200}>
            <h2>Follow us</h2>
            <p>Let us be social</p>
            <div>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="rights flex-row">
          <h4 className="text-gray">©2024 All rights reserved</h4>
        </div>
      </footer>

      <Script src="/js/Jquery3.4.1.min.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/aos.js" />
      <Script src="/js/main.js" />
    </>
  );
}
