import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade1 from "./Components/atividade01/atividade1";
import Atividade2 from "./Components/atividade02/atividade2";
import Atividade3 from "./Components/atividade03/atividade3";
import Atividade4 from "./Components/atividade04/atividade4";

export default function MinhasRotas() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atividade01" element={<Atividade1 />} />
                <Route path="/atividade02" element={<Atividade2 />} />
                <Route path="/atividade03" element={<Atividade3 />} />
                <Route path="/atividade04" element={<Atividade4 />} />
            </Routes>
        </BrowserRouter>
    </>)
}