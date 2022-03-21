export interface IRouteOptions {
    enableHealthCheck?: boolean;
    postEventRoute?: string;
}
declare const getRoutes: ({ enableHealthCheck, postEventRoute, }?: IRouteOptions) => import("express-serve-static-core").Router;
export default getRoutes;
