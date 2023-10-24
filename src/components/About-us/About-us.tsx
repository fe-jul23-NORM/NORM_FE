import React from 'react';
import './About-us.scss';

const AboutUs: React.FC = () => {
  return (
    <body>
      <h1>About Us</h1>
      <p>Our E-Commerce Web Application is a cutting-edge platform designed to revolutionize the way you shop for smartphones, tablets, and related accessories. Using a powerful combination of modern technologies, we provide a seamless and secure online shopping experience for tech enthusiasts and gadget lovers.</p>
      <h2>Key Technologies:</h2>
      <div className="technologies">
        <h3>Client Side:</h3>
        <ul>
          <li>React: We employ the highly popular and responsive React library to create a dynamic and user-friendly interface.</li>
          <li>React-Router: With React-Router, we ensure smooth navigation within the application, allowing users to explore products effortlessly.</li>
          <li>Redux: State management becomes a breeze with Redux, enabling efficient data handling and consistent user experiences.</li>
          <li>TypeScript: For enhanced code reliability and maintainability, we use TypeScript, which brings static typing to JavaScript.</li>
          <li>Fetch: We utilize Fetch for making API requests, ensuring efficient communication between the client and server.</li>
          <li>HTML5/CSS3 (SASS): Our application is built on the solid foundation of HTML5 and CSS3, with SASS for cleaner and more maintainable styling.</li>
        </ul>
        <h3>Server Side:</h3>
        <ul>
          <li>REST API: We've designed a robust RESTful API to facilitate data retrieval, manipulation, and seamless integration with the front-end.</li>
          <li>Node.js: Our server-side logic is powered by Node.js, offering lightning-fast performance and scalability.</li>
          <li>Express: We use the Express framework to streamline the development of server-side features and routing.</li>
          <li>CORS: Cross-Origin Resource Sharing (CORS) support ensures secure data exchange between different domains and origins.</li>
          <li>PostgreSQL: Our choice of PostgreSQL as the database management system ensures data integrity, reliability, and efficient storage and retrieval.</li>
        </ul>
      </div>
      <h2>Key Features:</h2>
      <div className="features">
        <ul>
          <li>Product Catalog: Explore an extensive range of phones, tablets, and related accessories with detailed descriptions, high-quality images, and customer reviews.</li>
          <li>User Accounts: Create and manage your account, store favorite products, and track your order history effortlessly.</li>
          <li>Shopping Cart: Easily add and remove products from your cart and proceed to secure checkout with multiple payment options.</li>
          <li>Search and Filter: Quickly find the products you want using powerful search and filter options.</li>
          <li>User Reviews: Read and leave reviews and ratings for products, helping others make informed decisions.</li>
          <li>Responsive Design: Enjoy a consistent shopping experience across desktop and mobile devices, thanks to our responsive design.</li>
          <li>Secure Transactions: We prioritize security, ensuring that your personal and financial information is protected with the latest encryption technologies.</li>
          <li>Real-Time Updates: Stay informed about your order's status and receive real-time notifications on the latest deals and promotions.</li>
          <li>Order Tracking: Keep track of your orders from shipment to delivery, so you're always in the loop.</li>
        </ul>
      </div>
      <h2>Our Team:</h2>
      <div className="features">
        <ul>
          <li>Khutorovyi Ivan - ivankhutoroviy@gmail.com</li>
          <li>Shevchenko Oleksandr - taroleksandr13@gmail.com</li>
          <li>Antonenko Yuliia - yuliiia.antonenko@gmail.com</li>
          <li>Momot Olha - olhamomot.work@gmail.com</li>
          <li>Grygoruk Sergii - grygoruk.sergii.work@gmail.com</li>
          <li>Chernetska Tamara - chernetska.tamara.dev@gmail.com</li>
        </ul>
      </div>
      <p>Our E-Commerce Web Application for buying phones, tablets, and accessories is your one-stop destination for all things tech. Whether you're a tech guru or a casual shopper, our platform offers a seamless, secure, and enjoyable shopping experience. Shop with confidence and explore the world of technology with us!</p>
    </body>
  )
};

export default AboutUs;