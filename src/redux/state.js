
import React from 'react';
import WorkPlacesList from "../workplaces/WorkPlacesList";


 let render = () => {
     console.log("not render")
 };


let state = {
    isUserLoggedIn: !!localStorage.getItem("access_token"),
    workplacesList: [],
    admin:{
        sidebar:{
            accounts: <WorkPlacesList/>
        }
    },
    user: {
        last_was_at: "14:30",
        registeredAt: "2019.11.12 10:5:33",
        lastOnlineAt: "2019.11.12 10:5:33",
        isBlocked: false,
        id: 23,
        userName: "testaccount",
        normalizedUserName: "TESTACCOUNT",
        email: "magomedovgh@yandex.ru",
        normalizedEmail: "MAGOMEDOVGH@YANDEX.RU",
        emailConfirmed: false,
        passwordHash: "AQAAAAEAACcQAAAAELZGHUP/odGfXb/UGwI0W2fMP0S8r9ujRWLIKJW51yZI4IqJZzMTpkyS0c7sYKqKlg==",
        securityStamp: "UXSKC5B26K4SQBPUCXOTK4USOWPRPMGM",
        concurrencyStamp: "368f9164-0019-4a62-a925-fa5bcb7ce463",
        phoneNumber: "88005553535",
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
    },
    organizations:{
        id: 999,
        name:"Nadezhda",
        logo:"data:image/jpeg;base64,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iTbEtHSqbBbj0gprB58lJBIx06qPhGjoielW2jsy1dpIo1PZois/C1lweuolchSqBV5nHXwli3ZTPQ4KOxTS6XT1ZDAiw8XFYAfvLxLz6jB6c5OMSsaOiH67QtWbxUjLU1mnVgiu3GoXisfC+k+SyqxHMgHzl3R6IOK9PwMa+NtTbxVNVXjmErRG6AthuHnyUk9RJViVxGk9UG04vqFJrrcOund1Q1WMrPdbx9kxGBXjhAyTyBmZfpNQ72Hol2sqBXgbiCVdnlg/FhUPZH7vPPXnJbGI0dUIB1DU31BHK3G/PFW6NUbNQFQKx9cdmxPIeiF6zKvLdpZVwW5fW02EhH4VrQVcJ4sYwTWBy8TnvktlMRpHVEt7xmzhsVmqdaq6+FWZQ7X4uLKo9bs8Fc/ixzngUEdmL6rG05bUOtXA1nDl17BHQA8uAuQDyGR0IGJXfplfh4hngYOvM8mAIB5depl3EaOvlDPquqSvK5DU6PhwytYWZ2c9mhDDLKK0GefUSmr2czB9My2l8U0UFe0FaViusO5YeiCG7TPFzOFHPlJrEaOiglYiSuREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==",
        address: " г Махачкала"
    },
    subscribe(observer){
        render = observer
    },
    workplaceListPage: {
        logOutButtonIsPressed : false,

        pressLogoutButton(){
            localStorage.clear();
            this.isUserLoggedIn = false;
            render();
        },
    },
    authenticationPage:{

    },
    object:{
        profile:{
            id	:	23,
            userName	:	"testaccount",
            avatar	:	null,
            rating	:	0,
            canSeeAllExpertRequests	:	false,
            isCurator	:	false,
            foundation: 4,
            speciality	:	null,
            firstname	:	null,
            middlename	:	null,
            lastname	:	null,
            birthDate	:	"01.01.2001" ,
phoneNumber	:	null,
email	:	null,
passSeries	:	null,
passNumber	:	null,
snils	:	null,
insuranceNumber	:	null,
placeOfWork	:	null,
age	:	2018

}
    }



};

export default state