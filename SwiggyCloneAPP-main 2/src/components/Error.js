import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const errorInfo = useRouteError()
    console.log(errorInfo)
    return (
        <div>
            <h1>Error Page</h1>
            <h3>{errorInfo.status} : {errorInfo.statusText}</h3>
        </div>
    )
}

export default ErrorPage