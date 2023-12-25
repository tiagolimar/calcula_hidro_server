import axios from 'axios';
import { useState } from "react";
import { style } from './style.js';
import { URL_POST } from './../Geral/url';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormPipe() {
    let [values, setValues] = useState({
        material:"PVC",
        dn_comercial_mm:0,
        dn_externo_mm:0,
        esp_mm:0,
        dn_interno_mm:0,
    })

    const updateValue = e=>{
        const id = e.target.id
        const value = e.target.value
        setValues({...values, [id]:value})
    }

    const sendValues = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(URL_POST, values);
            if (result.status === 200) {
                toast.success("Tubo cadastrado com sucesso!");
            } else {
                console.log('Erro na resposta:', result.status);
                toast.error("Erro ao cadastrar tubo. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            toast.error("Erro ao cadastrar tubo. Por favor, tente novamente.");
        }
    }
    

    return (
        <form className={style.form} onSubmit={sendValues}>
            <h3 className="text-center mt-2">CADASTRO DE TUBO</h3>
            <label className={style.label} htmlFor="material">Material do tubo</label>
            <input onChange={updateValue} value={values.material} id="material" name="material" className={style.input} type="text" />

            <label className={style.label} htmlFor="dn_comercial_mm">Diâmetro Comercial (mm)</label>
            <input onChange={updateValue} value={values.dn_comercial_mm} id="dn_comercial_mm" name="dn_comercial_mm" className={style.input} type="number" />

            <label className={style.label} htmlFor="dn_externo_mm">Diâmetro Externo (mm)</label>
            <input onChange={updateValue} value={values.dn_externo_mm} id="dn_externo_mm" name="dn_externo_mm" className={style.input} type="number" />

            <label className={style.label} htmlFor="esp_mm">Espessura do Tubo (mm)</label>
            <input onChange={updateValue} value={values.esp_mm} id="esp_mm" name="esp_mm" className={style.input} type="number" />

            <label className={style.label} htmlFor="dn_interno_mm">Diâmetro Interno (mm)</label>
            <input onChange={updateValue} value={values.dn_interno_mm} id="dn_interno_mm" name="dn_interno_mm" className={style.input} type="number" />

            <button className={style.btn_submit} type='submit'>Cadastrar</button>
            <ToastContainer />
        </form>
    );
}

export default FormPipe;
