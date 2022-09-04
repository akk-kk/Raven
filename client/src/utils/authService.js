export const Login = async (username, password) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            username,password
        })
    })


    if (res.status === 200) {
        const result = await res.json();
        console.log(result)
    }
}

export const Register = async (username, password) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            username,password
        })
    })


    if (res.status === 200) {
        const result = await res.json();
        console.log(result)
    }
}