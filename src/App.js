import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
    useEffect(() => {
        // Redirect immediately after rendering
        window.location.href = "https://www.youtube.com/watch?v=twQ3kkeZ6Fk";
    }, []);

    return (
        <div>
            <p>Redirecting... If you are not redirected, <a href="https://www.youtube.com/watch?v=twQ3kkeZ6Fk">click here</a>.</p>
            <Analytics />
        </div>
    );
}

export default App;
