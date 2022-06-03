import { useEffect, useState } from "react";
import axios from "axios";
import { callAPI } from "../../helpers/network";

const ButtonFollow = () => {

    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/user/detail/cariuser',
                method: 'get',
                params: {
                    page: 0,
                    size: 300,
                    nama: ''
                }
            });
            console.log("response > ", response.data.data.content);
            setData(response.data.data);
        } catch (error) {
            console.log("error > ", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);


    const [loading, setLoading] = useState(false);
    const [follow, setFollow] = useState();

    const handleOnFollow = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        await callAPI({
            url: '/follow/',
            method: "POST",
            params: {
                idFollower: user.id,
                idFollowing: data.content.id,
            },
            headers: {
                Authorization: `Bearer ${user.access_token}`,
            },

        });
        setFollow();
        setLoading(false);
    };

    return (
        <div>
            <button
                className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275] focus:bg-[#457275] focus:text-white"
                onClick={handleOnFollow}
            >
                {follow ? "Ikuti" : "Mengikuti"} {loading && "..."}
            </button>
        </div>

    )
}
export default ButtonFollow;