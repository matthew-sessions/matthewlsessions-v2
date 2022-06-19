
import baseUrl from '../utils/baseUrl';
export async function getServerSideProps() {
    const res = await fetch(`${baseUrl}/api/stream`);
    const data = await res.json();
    let info = {
        url: data.url
    };

    return {
        props: {
            info
        }
    }
}

export default function Wedding({ info }) {
    const url = info.url;
    if (!url) {
        return (
            <div className=" h-screen bg-cyan-900">
                <div
                    className="relative w-full z-30 h-full 0"
                >
                    <div className="flex items-center justify-center h-full">
                        <div className=" text-center p-4 rounded-xl ">
                            <p className=" text-cyan-50 font-bold text-5xl">Hey There!</p>
                            <p className="text-cyan-50 font-bold text-2xl">Our wedding will stream on:</p>
                            <p className="text-cyan-50 text-3xl italic">July 18, 4:30pm (HST)</p>
                            <p className="text-cyan-50 text-l mt-4 ">a link to the live stream will appear</p>
                            <p className="text-cyan-50 text-l">here a few hours before the wedding. Thanks!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=" h-screen bg-cyan-900">
            <div
                className="relative w-full z-30 h-full 0"
            >
                <div className="flex items-center justify-center h-full">
                    <div className=" text-center p-4 rounded-xl ">
                        <p className="text-cyan-50 font-bold text-2xl">Thanks for joining us virtually!</p>

                        <div>
                            <a href={url} className="mr-1">
                                <button className="mt-3 bg-cyan-100 hover:bg-cyan-200 font-bold py-2 px-4 rounded">
                                    🤵 Stream Now 👰
                                </button>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}