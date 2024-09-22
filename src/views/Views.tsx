import Layout from "@/components/Layout"
import { appRoutes } from "@/config/route.config"
import { Navigate, Route, Routes } from "react-router-dom"

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {
                    appRoutes.map(({ index: isIndexRoute, path, component: Component, key }) => {
                        const props = {
                            index: isIndexRoute || false,
                            path: isIndexRoute ? undefined : path
                        }
                        return (
                            <Route {...props} element={<Component />} key={key} />
                        )
                    })
                }
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    )
}

export default Views