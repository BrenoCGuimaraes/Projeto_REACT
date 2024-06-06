import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade1 from "./Components/atividade01/atividade1";
import Atividade2 from "./Components/atividade02/atividade2";
import Atividade3 from "./Components/atividade03/atividade3";
import Atividade4 from "./Components/atividade04/atividade4";
import Atividade5 from "./Components/atividade05/atividade5";
// import Atividade6 from "./Components/atividade06/atividade6";

export default function MinhasRotas() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atividade01" element={<Atividade1 />} />
                <Route path="/atividade02" element={<Atividade2 />} />
                <Route path="/atividade03" element={<Atividade3 />} />
                <Route path="/atividade04" element={<Atividade4 />} />
                <Route path="/atividade05" element={<Atividade5 />} />
                {/* <Route path="/atividade06" element={<Atividade6 />} /> */}
            </Routes>
        </BrowserRouter>
    </>)
}