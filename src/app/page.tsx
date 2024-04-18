import Image from "next/image";



export default async function Home() {
    const response = await fetch('http://localhost:3000/api/clients');
    const json = await response.json();



    return (
        <main>

            
                {json.map((item) => {
                
                    return (

                        <>
                        <div className="a">
                            <div className="b">{item.name}</div>
                            <div className="b1">{item.address}</div>
                        </div>
                        </>
                    )
                })}
                    
            

        </main>
    );
};