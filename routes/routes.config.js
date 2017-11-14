import overall from "../src/pages/overall.vue"
import school from "../src/pages/school.vue"
import major from "../src/pages/major.vue"
var routes = [{
        path: "/",
        redirect: "/overall"
    },
    {
        name: "overall",
        path: "/overall",
        component: overall
    },
    {
        name: "college",
        path: "/college",
        component: school
    },
    {
        name: "major",
        path: "/major",
        component: major
    }
]
export default routes;