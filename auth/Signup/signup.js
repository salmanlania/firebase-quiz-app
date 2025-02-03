import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from "../../Firebase.js"

const signup = async () => {
    const fullName = document.querySelector('#fullName')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')
    const password = document.querySelector('#password')

    // alert()
    const signUpObj = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        type: "user",  //admin | user
        isBlock: false,
        isDeleted: false
    }

    if (!fullName.value || !email.value || !phone.value || !password.value) {
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
            const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
            if (user) {
                await setDoc(doc(db, "quizUsers", user.user.uid), signUpObj);
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "you have been signup successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                fullName.value = ""
                email.value = ""
                phone.value = ""
                password.value = ""
            }
        } catch (e) {
            console.log('e', e)
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: "something went wrong , Please try again later",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

window.signup = signup