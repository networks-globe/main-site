import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useRazorpay from "react-razorpay";
export default function Payment() {
    var router = useRouter()
    const Razorpay = useRazorpay();
    async function getData() {
    }
    useEffect(() => {
        getData()
    }, [])
    const initPayment = (data) => {
        const options = {
            key: "rzp_test_kJFCr5jnzPYy9s",
            amount: localStorage.getItem("amount")*100,
            currency: "INR",
            order_id: data._id,
            "prefill": {
                "name": localStorage.getItem("name"),
                "phone": localStorage.getItem("phone"),
                "email": localStorage.getItem("email")
            },
            handler: async (response) => {
                try {
                    var item = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        checkid: localStorage.getItem("orderid")
                    }
                    var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/online-registration/verify", {
                        method: "put",
                        headers: {
                            "content-type": "application/json",
                            "authorization": localStorage.getItem("token")
                        },
                        body: JSON.stringify(item)
                    });
                    response = await response.json()
                    if (response.result === "Done")
                    router.push("/confirmation")
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/online-registration/orders", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: localStorage.getItem("amount") })
            });
            response = await response.json()
            initPayment(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5">
                <button onClick={handlePayment} className="btn pdf-background w-100 m-auto">
                    Pay With Razorpay
                </button>
            </div>
        </>
    )
}
