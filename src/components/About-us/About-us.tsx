import React from 'react';
import './About-us.scss';
import { PageNavigation } from '../PageNavigation';

export const AboutUs: React.FC = () => {
  return (
    <body className='about'>
      <PageNavigation links={[{link: '/about', text: 'About us'}]} />
      <h1 className='page__title'>About Us</h1>
      <div className="about-container">
        <p className='section__text'>Welcome to Nice Gadgets, your ultimate destination for tech enthusiasts.
          <br />
          Nice Gadgets is an advanced E-Commerce Web Application designed for purchasing a wide range of products, including phones, tablets, and more.
          Our project was meticulously crafted by a team of talented developers, with a primary focus on utilizing cutting-edge technologies.
          On the client side, we&#39;ve harnessed the power of the React library, incorporating additional technologies like React-Router, Redux (Redux-Toolkit), TypeScript, LocalStorage, Fetch, and HTML5/CSS3 (SASS) to ensure a seamless and dynamic user experience.
          For the backend, we&#39;ve employed Node.js with Express, creating a robust foundation for our application&#39;s server-side functionality.
          In the client development process, we emphasize a component-based approach, coupled with strong typing via TypeScript, ensuring clean and maintainable code.
          On the server side, our architecture adheres to the Model-View-Controller (MVC) pattern, functioning in accordance with the principles of RESTful API design.
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
            <li>REST API: We`&lsquo;`ve designed a robust RESTful API to facilitate data retrieval, manipulation, and seamless integration with the front-end.</li>
            <li>Node.js: Our server-side logic is powered by Node.js, offering lightning-fast performance and scalability.</li>
            <li>Express: We use the Express framework to streamline the development of server-side features and routing.</li>
            <li>CORS: Cross-Origin Resource Sharing (CORS) support ensures secure data exchange between different domains and origins.</li>
            <li>PostgreSQL: Our choice of PostgreSQL as the database management system ensures data integrity, reliability, and efficient storage and retrieval.</li>
          </ul>
        </div>
        <h2 className='section-title'>Key Features:</h2>
        <div className="features">
          <ul className='section__text'>
            <li>Product Catalog: Explore an extensive range of phones, tablets, and related accessories with detailed descriptions, high-quality images, and customer reviews.</li>
            <li>User Accounts: Create and manage your account, store favorite products, and track your order history effortlessly.</li>
            <li>Shopping Cart: Easily add and remove products from your cart and proceed to secure checkout with multiple payment options.</li>
            <li>Search and Filter: Quickly find the products you want using powerful search and filter options.</li>
            <li>User Reviews: Read and leave reviews and ratings for products, helping others make informed decisions.</li>
            <li>Responsive Design: Enjoy a consistent shopping experience across desktop and mobile devices, thanks to our responsive design.</li>
            <li>Secure Transactions: We prioritize security, ensuring that your personal and financial information is protected with the latest encryption technologies.</li>
            <li>Real-Time Updates: Stay informed about your order`&lsquo;`s status and receive real-time notifications on the latest deals and promotions.</li>
            <li>Order Tracking: Keep track of your orders from shipment to delivery, so you`&lsquo;`re always in the loop.</li>
          </ul>
        </div>
      </div>
      <div className="team-container">
        <h2 className='section-title'>Our Team:</h2>
        <ul className='team__list section__text'>
          <li>Khutorovyi Ivan - ivankhutoroviy@gmail.com</li>
          <li>Shevchenko Oleksandr - taroleksandr13@gmail.com</li>
          <li>Antonenko Yuliia - yuliiia.antonenko@gmail.com</li>
          <li>Momot Olha - olhamomot.work@gmail.com</li>
          <li>Grygoruk Sergii - grygoruk.sergii.work@gmail.com</li>
          <li>Chernetska Tamara - chernetska.tamara.dev@gmail.com</li>
        </ul>
      </div>
    </body>
  )
};
