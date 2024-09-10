import { useEffect } from "react";
import type { AppType } from "../../../server/src/index";
import { hc } from "hono/client";

const client = hc<AppType>("http://localhost:8080/");

export default function Home() {
    const getApiReq = async () => {
        const res = await client.index.$get();
        console.log(await res.text);
    };

    useEffect(() => {
        getApiReq();
    }, []);

    return (
        <div>
            <p>hello</p>
        </div>
    );
}
