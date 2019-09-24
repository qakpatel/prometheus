export default {
    API_BASE_URL : "http://10.0.17.180/api/v1/",
    CLIENT_ID : 2,
    CLIENT_SECRET : "lCMBZyVNcQq2nhJ2pHz7zxxbJ0TenqhMceox8fZ7",//"wj9clx4iZtMbenoC6c8tSLmV08FzkxxujwK39ArU",
    ENDPOINTS : {
        LOGIN : "oauth/token",
        REFRESH_TOKEN : "oauth/token",
        USERINFO : "user",
        LEADS : "leads",
        LEAD_FORM : "leads/create",
        UNITPLAN : "unit-plan",
    },
    METHODS : {
        GET: 'GET',
        POST : 'POST',
        PUT : 'PUT',
        DELETE : 'DELETE',
        PATCH : 'PATCH'
    },
    ERROR_CODES : {

    },
    ERROR_MESSAGES : {
        DEFAULT : 'Some error occured.'
    }
}