import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade1 from "./Components/atividade01/atividade1";
import Atividade2 from "./Components/atividade02/atividade2";

export default function MinhasRotas() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atividade01" element={<Atividade1 />} />
                <Route path="/atividade02" element={<Atividade2 />} />
            </Routes>
        </BrowserRouter>
    </>)
}