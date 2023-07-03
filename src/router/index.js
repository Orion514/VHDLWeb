import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../layout'),
        redirect: "/upload/main",
        children:[
            {
                path: '/upload/main',
                name: '/upload/main',
                component: () => import('../view/upload/MainController')
            },
            {
                path: '/upload/sub',
                name: '/upload/sub',
                component: () => import('../view/upload/SubController')
            },
            {
                path: '/upload/atomic',
                name: '/upload/atomic',
                component: () => import('../view/upload/Atomic')
            },
            {
                path: '/generate/main',
                name: '/generate/main',
                component: () => import('../view/generate/MainController')
            },
            {
                path: '/generate/atom',
                name: '/generate/atom',
                component: () => import('../view/generate/Atom')
            },
            {
                path: '/generate/sub',
                name: '/generate/sub',
                component: () => import('../view/generate/SubController')
            },
            {
                path: '/help',
                name: '/help',
                component: () => import('../view/help')
            },
            {
                path: '/assemble',
                name: '/assemble',
                component: () => import('../view/assemble')
            }

        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
