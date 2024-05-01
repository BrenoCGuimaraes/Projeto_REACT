
function Letreiro() {
    const [text, setText] = useState("Meu Letreiro");
    
    useEffect(()=>{
        const interval = setInterval(() => {
            setText((textAnterior) =>{
                if(textAnterior == "Meu Letreiro") return "Primeira mensagem";
                else if (textAnterior === "Primeira mensagem") return "Segunda mensagem";
                else return "Meu Letreiro";
            });
        }, 2000);
        return () => clearInterval (interval);
    }, []);
    return (
        <>
            <h1>{text}</h1>
        </>
    );
  }
  export default Letreiro;
  
