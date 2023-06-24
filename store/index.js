import { v4 as uuidv4 } from "uuid";
import { defineStore } from 'pinia'
export const useAppStore = defineStore('appStore', () => {
  const projectsHeading = "Projects Portfolio"
  const projectsDescription = "Some of the projects I have successfully completed"
  const projects = ref([
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Ariadezh",
      category: "Web Application",
      img: "images/projects/ariadezh/2.png",
      publishDate: "Jun 14, 2023",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "demo",
      objectivesDetails:
        "https://youtu.be/lHSBS0C8WJY",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      // socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/projects/ariadezh/1.png",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/projects/ariadezh/2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Dezhafzarnet Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Firewall and security softwares",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://dezhafzar.com",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js 3",
        "Figma",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This project was a legacy php project "
        },
        {
          id: uuidv4(),
          details:
            "Login page and menu redesigned and refactored"
        },
        {
          id: uuidv4(),
          details:
            "Also it converted to be like SPA ."
        },
      ],
      // socialSharings: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: "twitter",
      //     url: "https://twitter.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/in/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com",
      //   },
      // ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Peda",
      category: "Web Application and PWA",
      img: "images/projects/peda/1.png",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      // objectivesTitle: "Objective",
      // objectivesDetails:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      // socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/peda/1.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/peda/2.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/peda/3.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/peda/4.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Peda Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Trading ",
        },
        // {
        //   id: uuidv4(),
        //   title: "Website",
        //   details: "https://pedaint.com",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "xxx xxxx xxx",
        // },
      ],
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "Nuxt.js",
        "TailwindCSS",
        "Figma",
        "GraphQl",
        "Property Decorators",
        "Daisy UI",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Strapi is used for backend"
        }
      ],
      // socialSharings: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: "twitter",
      //     url: "https://twitter.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/in/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com",
      //   },
      // ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccde",
      title: "Keyvan",
      category: "Web Application",
      img: "images/projects/keyvan/4.png",
      publishDate: "Dec 04, 2022",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "demo",
      objectivesDetails:
        "https://youtu.be/HcLSjz1kaK8",
      techTitle: "Security & Technologies",
      detailsTitle: "Challenge",
      // socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/keyvan/3.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/keyvan/4.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/keyvan/5.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/keyvan/6.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Dezhafzarnet Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Security Software and Firewall ",
        },
        // {
        //   id: uuidv4(),
        //   title: "Website",
        //   details: "https://pedaint.com",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "xxx xxxx xxx",
        // },
      ],
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "Vue.js 3",
        "Element-plus UI",
        "Figma",
        "RestApi",
        "Highchart",
      ],
      // projectDetails: [
      //   {
      //     id: uuidv4(),
      //     details:
      //       "Strapi is used for backend"
      //   }
      // ],
      // socialSharings: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: "twitter",
      //     url: "https://twitter.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/in/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com",
      //   },
      // ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdf",
      title: "Avayab",
      category: "Web Application",
      img: "images/projects/avayab/7.png",
      publishDate: "Jun 15, 2022",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "demo",
      objectivesDetails:
        "https://youtu.be/doGCKHJXkUk",
      techTitle: "Security & Technologies",
      detailsTitle: "Challenge",
      // socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/avayab/7.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/avayab/8.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../images/projects/avayab/9.png",
        },

      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Dezhafzarnet Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Security Software and Firewall ",
        },
        // {
        //   id: uuidv4(),
        //   title: "Website",
        //   details: "https://pedaint.com",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "xxx xxxx xxx",
        // },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "Bootstrap-vue",
        "Figma",
        "RestApi",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This project include Landing page and panel."
        }
      ],
      // socialSharings: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: "twitter",
      //     url: "https://twitter.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/in/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com",
      //   },
      // ],
    },
  ])
  const clientsHeading = "Some of the Projects I've done"
  const clients = [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ]
  const aboutMe = [
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    },
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    },
  ]
  const copyrightDate = new Date().getFullYear()
  const socialProfiles = [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/morteza-mortezai",
    },
    // {
    //   id: uuidv4(),
    //   name: "Twitter",
    //   icon: "twitter",
    //   url: "https://twitter.com/morteza-mortezai",
    // },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/s-mrtz-mrtzi",
    },
    {
      id: uuidv4(),
      name: "Youtube",
      icon: "youtube",
      url: "https://youtube.com/c/mrtzmrtzi524",
    },
  ]
  const categories = [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "api",
      name: "Web Service",
    },
  ]
  function getProjectById(id) {
    return projects.value.find((project) => project.id == id)
  }

  return { projectsHeading, projectsDescription, projects, clientsHeading, clients, aboutMe, copyrightDate, socialProfiles, categories, getProjectById }
})