import ToDo from "../Assets/Img/ToDoList.png";
import Form from "./FormIsi";
import Data from "./GetData";

export default function Home(){
    return(
        <div className="flex items-center font-medium justify-center">
        <div className="z-50 p-5 md:w-auto w-full flex flex-col items-center">
            <img src={ToDo} alt="Img" className="md:cursor-pointer" />
            <Form />
            <Data />
        </div>
        </div>
    )
}