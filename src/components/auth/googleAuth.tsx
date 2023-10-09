

export const googleAuthenticate = async (state : string , code: string) => {

    if (state && code) {
      


        const details: { state: string; code: string } = {
            state: state,
            code: code,
        };
        const formBody = Object.keys(details)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(details[key as keyof typeof details]))
            .join("&");
        console.log(formBody);

        try {
            const res = await fetch(
                `https://nasa-hackathon.tnbswap.com/auth/o/google-oauth2/?${formBody}/`,{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    },
                }
            )
            console.log(res);

            // dispatch(
            //     setInitialCredentials({
            //         accessToken : data.access,
            //         refreshToken : data.refresh,
            //         username : values.username,
            //     })   
            // )

        } catch (err) {
            console.log(err);
        }
    }
};