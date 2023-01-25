import React, { useState } from 'react';
import './TodoListBasic.css';

const TodoListBasic = () => {
    
    const [tache,setTache] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [listeAFaire, setListeAFaire] = useState<string[]>([]);
    const [listeEnCours, setListeEnCours] = useState<string[]>([]);
    const [listeFait, setListeFait] = useState<string[]>([]);


    //Récupére le nom de la tache
    const handleAddTacheName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTache(e.target.value);
    }


    //Récupére la valeur du select
    const handleAddTacheType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    } 

    //Rajoute à la liste la tache en fonction du type
    const handleClickTache = () => {
        switch(type) { 
            case "aFaire" : { 
               //statements; 
               setListeAFaire(prev => [...prev, tache])
               break; 
            } 
            case "enCours": { 
               //statements; 
               setListeEnCours(prev => [...prev, tache])
               break; 
            }
            case "fait": { 
                //statements; 
                setListeFait(prev => [...prev, tache])
                break; 
             } 
            default: { 
               //statements; 
               console.log("");
               break; 
            } 
         } 
    };


    return (
        <div>
            <div>
                <input type="text" value={tache} onChange={handleAddTacheName} placeholder='Your Task' />
                <select onChange={handleAddTacheType}>
                    <option value="" selected>Choose your type of task</option>
                    <option value="aFaire" >To do</option>
                    <option value="enCours">Progress</option>
                    <option value="fait">Done</option>
                </select>
                <button  onClick={handleClickTache} >Add to list</button>
            </div>
            <div>
                <table id="tableau">
                    <tr>
                        <td> To do </td>
                        <td> Progress </td>
                        <td >Done </td>
                    </tr>
                    <tr>
                        <td>{listeAFaire.map((aFaire, index) => (<p key={index}>{aFaire}</p>))}</td>
                        <td>{listeEnCours.map((enCours, index) => (<p key={index}>{enCours}</p>))}</td>
                        <td>{listeFait.map((fait, index) => (<p key={index}>{fait}</p>))}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default TodoListBasic;
