import { reactive } from "vue";
export const store = reactive({
    infos: {
        logo: "image.png",
        hours: "Mon-Sat-9:00-18:00",
        side: "Main Avenue, 987",
        phoneNumber: "+1(305) 1234-5678",
        email: "hello@example.com"
    },
    menu: ["home", "about", "services", "process", "testimonials"],
    vehicles: [
        {
            image: "truck-1",
            type: "Light",
            caracteristique: "Max-Weight 1200 Kg"
        },
        {
            image: "truck-1",
            type: "Medium",
            caracteristique: "Max-Weight 6000 Kg"
        },
        {
            image: "truck-1",
            type: "Heavy",
            caracteristique: "Max-Weight 24000 Kg"
        }
    ],
    services: [
        {
            icon: "fa-solid fa-truck-ramp-box",
            name: "Tecnology",
            description: "We are continually focused on developing tecnology solutions adapted to our clients needs."
        },
        {
            icon: "fa-solid fa-temperature-low",
            name: "Reefer Cargo",
            description: "Regular and frequent monitoring from the receipt of the loaded container to final destination."
        },
        {
            icon: "fa-sharp fa-solid fa-boxes-stacked",
            name: "Dry Cargo",
            description: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care."
        }
    ],
    process: [
        {
            step: "01",
            stepName:  "Collection of information",
            description: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            step: "02",
            stepName:  "Service Invoice Sending",
            description: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            step: "03",
            stepName:  "Withdrawal of Cargo",
            description: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            step: "04",
            stepName:  "Transport Custoner Order",
            description: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            step: "05",
            stepName:  "Successful Delivery",
            description: "Lorem ipsum dolor sit amet consectetur"
        }
    ],
    results: [
        {
            title: "Certifications",
            quantity: 128
        },
        {
            title: "Employees",
            quantity: 230
        },
        {
            title: "Customers",
            quantity: 517
        },
        {
            title: "Countries seved",
            quantity: 94
        }
    ],
    feedbacks: [
        {
            entityImg: "logo-1",
            text: "Praesent volutpat justo sit amet elementum malesuada, Praesent sagittis augue justo, in accumsan ocsi rhoncus at pellentesque.Lorem ipsum dolor sit amet,consectetur adipiscing elit." 
        },
        {
            entityImg: "logo-2",
            text: "Praesent volutpat justo sit amet elementum malesuada, Praesent sagittis augue justo, in accumsan ocsi rhoncus at pellentesque.Lorem ipsum dolor sit amet,consectetur adipiscing elit." 
        },
        {
            entityImg: "logo-3",
            text: "Praesent volutpat justo sit amet elementum malesuada, Praesent sagittis augue justo, in accumsan ocsi rhoncus at pellentesque.Lorem ipsum dolor sit amet,consectetur adipiscing elit." 
        },
        {
            entityImg: "logo-4",
            text: "Praesent volutpat justo sit amet elementum malesuada, Praesent sagittis augue justo, in accumsan ocsi rhoncus at pellentesque.Lorem ipsum dolor sit amet,consectetur adipiscing elit." 
        },
        {
            entityImg: "logo-5",
            text: "Praesent volutpat justo sit amet elementum malesuada, Praesent sagittis augue justo, in accumsan ocsi rhoncus at pellentesque.Lorem ipsum dolor sit amet,consectetur adipiscing elit." 
        }
    ],
    footerlinks: [
        {
            title: "About",
            links: ["The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"]
        }, 
        {
            title: "Transport",
            links: ["Industrialized", "Chemicals", "Packaged Liquids", "Construction", "Laminated Wood", "And other"]
        },
        {
            title: "Support",
            links: ["Responsibility", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"]
        }
    ]
})