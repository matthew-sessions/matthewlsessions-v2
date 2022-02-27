import { useState, useEffect } from "react";
import validator from 'validator'

const provideEmail = (status, handleEmail, handle, searchTerm, alert) => {
    if (!status) {
        return (
            <div>
                <p className=" pb-2 m-auto max-w-[450px] text-slate-700 text-center">Please provide your email before deploying your store. We will only send emails for important notifications and updates. Thanks!</p>

                <div className=" mx-2 md:m-auto md:w-[400px]">
                    <input className=" w-full pl-4 h-10 rounded-md text-slate-700 bg-slate-50 shadow-md" type="text" placeholder="Email" name="Email" onChange={handle} value={searchTerm} />

                </div>
                <p className=" text-center text-red-900">{alert}</p>
                <div className=" mt-3 flex items-center justify-center ">
                    <button onClick={handleEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        👉 Access One Click Deploy 👈
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className=" m-auto">
                <p className=" m-auto text-slate-700 text-center max-w-[450px]">Thank you! Click the button below to go to One Click Deploy via Deta.sh 👇</p>
                <div className="flex items-center justify-center pt-3">
                    <a className=" m-auto" href="https://web.deta.sh/deploy?path=https://github.com/StartupUtils/NotionCommerceDeta" >
                        <button className=" m-auto bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
                            Go to Deta One click Deploy
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function OneClickDeploy() {
    const [searchTerm, setSearchTerm] = useState("");
    const [focus, setFocus] = useState(false)
    const [alert, setAlert] = useState(null);
    const handle = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleEmail = () => {
        if (validator.isEmail(searchTerm)) {
            setFocus(true)
            localStorage.setItem("providedEmail", true)
        } else {
            setAlert("Please provide a valid Email")
        }
    }
    useEffect(() => {
        let emailStatus = localStorage.getItem("providedEmail");
        if (emailStatus) {
            setFocus(true)
        }
    }, []);
    return (
        <div className=" h-[300px] w-full bg-gradient-to-b from-slate-100 to-slate-400">
            <div className=" max-w-[1300px] m-auto pt-12 pb-12">
                <p className=" pb-5 text-center text-slate-700 text-3xl font-semibold">One Click Deploy</p>
                <p></p>
                {provideEmail(focus, handleEmail, handle, searchTerm, alert)}

            </div>
        </div>
    )
};