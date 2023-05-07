//tripguru
import m_Beaches from "../Aseests/ProjectsSnaps/Tripguru/Beaches.png"
import m_singapore from "../Aseests/ProjectsSnaps/Tripguru/singapore.png"
import m_singal_package from "../Aseests/ProjectsSnaps/Tripguru/singal_package.png"
import m_payment from "../Aseests/ProjectsSnaps/Tripguru/payment_page.png"
import m_mountains from "../Aseests/ProjectsSnaps/Tripguru/mountains_page.png"
import m_login_page from "../Aseests/ProjectsSnaps/Tripguru/login_page.png"
import m_homepage from "../Aseests/ProjectsSnaps/Tripguru/homepage.png"
import m_packages from "../Aseests/ProjectsSnaps/Tripguru/packages_page.png"
import a_dashboard from "../Aseests/ProjectsSnaps/Tripguru/Dashboard.png"
import a_packages from "../Aseests/ProjectsSnaps/Tripguru/Packages.png"
import a_Customers from "../Aseests/ProjectsSnaps/Tripguru/Customers.png"
import a_Account from "../Aseests/ProjectsSnaps/Tripguru/Account.png"
import a_search from "../Aseests/ProjectsSnaps/Tripguru/Search_fuctionality.png"
import a_login from "../Aseests/ProjectsSnaps/Tripguru/Login.png"
//airbnb
import HomePage from "../Aseests/ProjectsSnaps/Airbnb/HomePage.png";
import Filters from "../Aseests/ProjectsSnaps/Airbnb/Filters.png"; 
import Listings from "../Aseests/ProjectsSnaps/Airbnb/Listing.gif"; 
import MyProperties from "../Aseests/ProjectsSnaps/Airbnb/MyProperties.png"; 
import MyTrips from "../Aseests/ProjectsSnaps/Airbnb/MyTrips.png"; 
import PictureUpdation from "../Aseests/ProjectsSnaps/Airbnb/PictureUpdation.png"; 
import SinglePage from "../Aseests/ProjectsSnaps/Airbnb/SinglePage.png"; 
import SinglePage_2 from "../Aseests/ProjectsSnaps/Airbnb/SinglePage2.png"; 
//easywork
import img1 from "../Aseests/ProjectsSnaps/Easywork/img1.png"
import img2 from "../Aseests/ProjectsSnaps/Easywork/img2.png"
import img3 from "../Aseests/ProjectsSnaps/Easywork/img3.png"
import img4 from "../Aseests/ProjectsSnaps/Easywork/img4.png"
import img5 from "../Aseests/ProjectsSnaps/Easywork/img5.png"
import img6 from "../Aseests/ProjectsSnaps/Easywork/img6.png"
import img7 from "../Aseests/ProjectsSnaps/Easywork/img7.png"
import img8 from "../Aseests/ProjectsSnaps/Easywork/img8.png"
//Day2Day
import d_homepage_1 from "../Aseests/ProjectsSnaps/Day2Day/homepage1.png" 
import d_homepage_2 from "../Aseests/ProjectsSnaps/Day2Day/homepage2.png" 
import d_product_1 from "../Aseests/ProjectsSnaps/Day2Day/product_page_1.png"
import d_product_2 from "../Aseests/ProjectsSnaps/Day2Day/product_page_2.png"
import d_sproduct_1 from "../Aseests/ProjectsSnaps/Day2Day/single_product_page_1.png"
import d_sproduct_2 from "../Aseests/ProjectsSnaps/Day2Day/single_product_page_2.png"
import d_cart from "../Aseests/ProjectsSnaps/Day2Day/cart_page.png"
import d_checkout from "../Aseests/ProjectsSnaps/Day2Day/checkoutpage.png"
import d_account from "../Aseests/ProjectsSnaps/Day2Day/account_page.png"
import d_a_dashboard from "../Aseests/ProjectsSnaps/Day2Day/admin_dashboard.png"
import d_a_darkmode from "../Aseests/ProjectsSnaps/Day2Day/admin_darkmode.png"
import d_a_products from "../Aseests/ProjectsSnaps/Day2Day/admin_products.png"
import d_a_userpage from "../Aseests/ProjectsSnaps/Day2Day/admin_userpage.png"
//formalclick
import f_homepage_1 from "../Aseests/ProjectsSnaps/TataCliq/homepage_1.png"
import f_homepage_2 from "../Aseests/ProjectsSnaps/TataCliq/homepage_2.png"
import f_productp_1 from "../Aseests/ProjectsSnaps/TataCliq/product_page_1.png"
import f_productp_2 from "../Aseests/ProjectsSnaps/TataCliq/product_page_2.png"
import f_sp from "../Aseests/ProjectsSnaps/TataCliq/singleproductpage_1.png"


const projectsData = [
  { 
    id:1,
    title: "Day2Day",
    description: "Daily Objects is a E-commerce website which provides users to buy different types of products.",
    subdescription:"A collaborative project of 5 members built in a span of 5 days",
    techStack: ["JavaScript", "React","Redux","MongoDB","Mongoose","Express"],
    deployedURL: "https://showy-animal-7694-git-day5saikh-fullstack-crud.vercel.app/",
    githubURL: "https://github.com/saikhmirsat/showy-animal-7694/tree/master",
    images: [d_homepage_1,d_homepage_2,d_product_1,d_product_2,d_sproduct_1,d_sproduct_2,d_cart,d_checkout,d_account,d_a_dashboard,d_a_darkmode,d_a_products,d_a_userpage],
  },
  { 
    id:2,
    title: "Tripguru",
    description: "It is a travel planning and booking application that helps users plan and book their dream vacations.",
    subdescription:"A collaborative project of 5 members built in a span of 5 days",
    techStack: ["HTML", "CSS","JavaScript", "JSON server"],
    deployedURL: "https://prismatic-taffy-e918f9.netlify.app/",
    githubURL: "https://github.com/piyush2205/wiry-measure-2833",
    images: [m_homepage,m_Beaches,m_mountains,m_singapore,m_packages,m_singal_package,m_login_page,m_payment,a_login,a_dashboard,a_search,a_packages,a_Customers,a_Account
    ],
  },
  { 
    id:3,
    title: "Airbnb",
    description: "It is a company that operates an online marketplace for short-term homestays and experiences.",
    subdescription:"A collaborative project of 2 members built in a span of 20 days",
    techStack: ["CSS3","Tailwind","Next.js","Prisma", "MongoDB"],
    deployedURL: "https://airbnd-clone-ba.vercel.app/",
    githubURL: "https://github.com/Bipin579/AirBnb_clone",
    images: [HomePage,Filters,Listings,MyProperties,MyTrips,SinglePage,SinglePage_2,PictureUpdation]
  },
  {
    id:4,
    title: "Easywork",
    description: "It is a clone of Wrike website which I named as Easywork. Wrike, Inc. is an American project management application service provider and we have cloned it with the use of various techstacks.",
    subdescription:"A individual project built in a span of 4 days",
    techStack: ["ReactJs","JavaScript", "CSS", "Chakra UI","Firebase"],
    deployedURL: "https://crooked-van-1224-vwst.vercel.app/",
    githubURL: "https://github.com/blackcode1996/crooked-van-1224",
    images: [img1,img2,img3,img4,img5,img6,img7,img8],
  },
  {
    id:5,
    title: "Formal Click",
    description: "It is a clone of Tata Cliq website which we named as Formal Click. Tata Cliq is an Indian e-commerce company based in Mumbai, India.",
    techStack: ["HTML", "JavaScript", "CSS","React","Redux","JSON server"],
    deployedURL: "https://tata-cliq-clone.vercel.app/",
    githubURL: "https://github.com/blackcode1996/Tata-Cliq-clone",
    images: [f_homepage_1,f_homepage_2,f_productp_1,f_productp_2,f_sp],
  },
];

export default projectsData;