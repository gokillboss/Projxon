<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> 

  <h3 align="center">Best-README-Template</h3>
</div> -->


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#handover-notes">Handover Notes</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://projxon.com)

PROJXON is a leading business consulting firm helping medium-sized businesses achieve their full potential. This project aims to provide a comprehensive digital platform that enhances client engagement, streamlines communication, and showcases the firm's expertise through an intuitive and user-friendly website. By integrating modern design elements, responsive layouts, and optimized backend functionality, the project seeks to highlight PROJXON's services, share insightful research, and establish the firm as a trusted partner for business growth and innovation.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![Node][Node.js]][Node-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Create a .env in projxon-web and server directory
2. Get a service id, template id, and public_key id from https://www.emailjs.com
3. Download and setup for an account for LocalWP for local wordpress developement https://localwp.com
4. Create a LocalWP site, then get the URL, username, and password from "live link" to save into .env for server


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/gokillboss/Projxon.git
   ```
2. Navigate to the frontend and backend directory. Run the following in both directories
   ```sh
   npm install
   ```
3. Enter your API in frontend/projxon-web `.env`
   ```js
   REACT_APP_API_URL = 'http://localhost:4000'
   REACT_APP_SERVICE_ID = 'ENTER SERVICE ID KEY FOR EMAILJS FROM EMAIL SERVICE'
   REACT_APP_TEMPLATE_ID_1 = 'ENTER TEMPLATE ID KEY FOR EMAILJS FROM EMAIL TEMPLATE'
   REACT_APP_PUBLIC_KEY = 'ENTER PUBLIC KEY FOR EMAILJS FROM ACCOUNT'
   ```
4. Enter your API in server `.env`
   ```js
   PORT=4000
   WORDPRESS_API_URL='ENTER LOCAL WP LIVE SITE URL'
   WORDPRESS_API_USERNAME='ENTER LOCAL WP LIVE SITE USERNAME'
   WORDPRESS_API_PASSWORD='ENTER LOCAL WP LIVE SITE PASSWORD'

5. Start the frontend
   ```sh
   npm start
   ```

6. Run the backend
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- HANDOVER -->
## Handover Notes

<!-- - [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->


<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/gokillboss/Projxon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gokillboss/Projxon" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: projxon-web/src/assets/image.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
