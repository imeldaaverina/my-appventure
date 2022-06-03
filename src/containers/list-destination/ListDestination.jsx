import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationLayout } from "../../components/layout";
import Image from "next/image"

const ListDestinationContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
                method: 'get',
                params: {
                    page: 1,
                    size: 30,
                }
            });
            console.log("response > ", response.data);
            setData(response.data.data.content.reverse());
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthProvider>
            <ListDestinationLayout>
                <section>

                    
            </section>
        </ListDestinationLayout>
        </AuthProvider >
    );
};
export default ListDestinationContainer;
