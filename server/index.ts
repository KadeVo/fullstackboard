import server from './server.ts'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes/router.tsx'


const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port', PORT)
})


// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <RouterProvider router={ router } />
//   )
// })