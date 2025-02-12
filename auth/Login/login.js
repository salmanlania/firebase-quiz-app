import { signInWithEmailAndPassword, auth } from '../../Firebase.js'

const loginHandler = async () => {
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    if (!email.value || !password.value) {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Please Fill all the fields",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        try {
            const user = await signInWithEmailAndPassword(auth, email.value, password.value)
            if (user) {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "You've been Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                email.value = ""
                password.value = ""
                window.location.replace('./admin/dasboard/dasboard.html')
            }
        } catch (e) {
            console.log(e.code)
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: e.code || "something went wrong , Please try again later",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

window.loginHandler = loginHandler