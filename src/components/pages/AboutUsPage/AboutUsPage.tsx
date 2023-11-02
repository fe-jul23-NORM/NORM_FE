import React from 'react';
import './AboutUsPage.scss';
import { PageNavigation } from '../../PageNavigation';
import { BackButton } from '../../BackButton';

export const AboutUsPage: React.FC = () => {
  return (
    <body className='about'>
      <PageNavigation links={[{ link: '/about', text: 'About us' }]} />
      <div className="item-card__back-wrapper">
          <BackButton />
        </div>
      <h1 className='page__title'>About Us</h1>
      <div className="about-container">
        <p className='section__text'>
          <h3 className='section-title--secondary'>
            Welcome to Nice Gadgets, your ultimate destination for tech enthusiasts!
          </h3>
          <p>
            Nice Gadgets is an advanced E-Commerce Web Application designed for purchasing a wide range of products, including phones, tablets, and more.
            Our project was meticulously crafted by a team of talented developers, with a primary focus on utilizing cutting-edge technologies.
          </p>
          <br />
          <p>
            On the client side, we&#x27;ve harnessed the power of the React library, incorporating additional technologies like React-Router, Redux (Redux-Toolkit), TypeScript, LocalStorage, Fetch, and HTML5/CSS3 (SASS) to ensure a seamless and dynamic user experience.
            For the backend, we&#x27;ve employed Node.js with Express, creating a robust foundation for our application&#x27;s server-side functionality.
          </p>
          <br />
          <p>
            In the client development process, we emphasize a component-based approach, coupled with strong typing via TypeScript, ensuring clean and maintainable code.
            On the server side, our architecture adheres to the Model-View-Controller (MVC) pattern, functioning in accordance with the principles of RESTful API design.
          </p>
        </p>
      </div>
      <div className="tecnologies-container">
        <h2 className='section-title'>Key Technologies:</h2>
        <div className="technologies">
          <h3 className='section-title--secondary'>Client Side:</h3>
          <ul className='section__text'>
            <li>React: We employ the highly popular and responsive React library to create a dynamic and user-friendly interface.</li>
            <li>React-Router: With React-Router, we ensure smooth navigation within the application, allowing users to explore products effortlessly.</li>
            <li>Redux: State management becomes a breeze with Redux, enabling efficient data handling and consistent user experiences.</li>
            <li>TypeScript: For enhanced code reliability and maintainability, we use TypeScript, which brings static typing to JavaScript.</li>
            <li>Fetch: We utilize Fetch for making API requests, ensuring efficient communication between the client and server.</li>
            <li>HTML5/CSS3 (SASS): Our application is built on the solid foundation of HTML5 and CSS3, with SASS for cleaner and more maintainable styling.</li>
          </ul>
          <h3 className='section-title--secondary'>Server Side:</h3>
          <ul className='section__text'>
            <li>REST API: We&lsquo;ve designed a robust RESTful API to facilitate data retrieval, manipulation, and seamless integration with the front-end.</li>
            <li>Node.js: Our server-side logic is powered by Node.js, offering lightning-fast performance and scalability.</li>
            <li>Express: We use the Express framework to streamline the development of server-side features and routing.</li>
            <li>CORS: Cross-Origin Resource Sharing (CORS) support ensures secure data exchange between different domains and origins.</li>
            <li>PostgreSQL: Our choice of PostgreSQL as the database management system ensures data integrity, reliability, and efficient storage and retrieval.</li>
          </ul>
        </div>
      </div>
      <div className="features-container">
        <h2 className='section-title'>Key Features:</h2>
        <ul className='section__text'>
          <li>Product Catalog: Explore an extensive range of phones, tablets, and related accessories with detailed descriptions, high-quality images, and customer reviews.</li>
          <li>User Accounts: Create and manage your account, store favorite products, and track your order history effortlessly.</li>
          <li>Shopping Cart: Easily add and remove products from your cart and proceed to secure checkout with multiple payment options.</li>
          <li>Search and Filter: Quickly find the products you want using powerful search and filter options.</li>
          <li>Responsive Design: Enjoy a consistent shopping experience across desktop and mobile devices, thanks to our responsive design.</li>
        </ul>
      </div>
      <div className="team-container">
        <h2 className='section-title section-title--team'>Our Team:</h2>
        <ul className='team__list section__text'>
          <li>- Khutorovyi Ivan -
            <a
              href="mailto:ivankhutoroviy@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Vannnkof"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
          <li>- Shevchenko Oleksandr -
            <a
              href="mailto:taroleksandr13@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Vayts"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
          <li>- Antonenko Yuliia -
            <a
              href="mailto:yuliiia.antonenko@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/yuliiaant"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
          <li>- Momot Olha -
            <a
              href="mailto:olhamomot.work@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/OlhaMomot"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
          <li>- Grygoruk Sergii -
            <a
              href="mailto:grygoruk.sergii.work@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/serkrops"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
          <li>- Chernetska Tamara -
            <a
              href="mailto:chernetska.tamara.dev@gmail.com"
              className='team__list--links'> <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/cty2802"
              className='team__list--links'> <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </body>
  )
};
