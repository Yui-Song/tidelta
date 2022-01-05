import apiRequest from "@/api/api-config";

interface GetDashboardsParam {
    query?: string | null,
    starred?: boolean | null,
    skipRecent?: boolean | null,
    skipStarred?: boolean | null,
    folderIds?: number | null,
    layout?: string | null,
    prevSort?:string | null,
    type?: string | null,
};

/** Get Dashboards list */
export function getDashboardsList(host: string, cookie: string, params?: GetDashboardsParam | undefined) {
    return apiRequest(host).get("api/search", {
        params: params,
        headers: {
            "Cookie": cookie,
            "Content-Type": 'text/plain',
            'Test-Cors': 'abc',
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": "http://localhost"
        }
    });
}