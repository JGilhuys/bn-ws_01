type userObject = {
    userId: number;
    userName: string;
    accessToken: string;
    email: string;
} 

export default class dummyAuthorizationApi {

    public getUserCredentials(loggedIn: boolean): userObject | undefined {
        if(loggedIn) {
            return {
                userId: 1,
                userName: "dummyUser",
                accessToken: "goanfonkyurself",
                email: "user@youradummy.com"
            };
        } else {
            return undefined;
        }
    }
}