import { useState } from "react";
import SuccessAlert from './../SuccessAlert';

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

    const style_label = "mt-2 fw-bold"
    const style_input = "form-control border-primary-subtle"
    return (
        <form className="container col-md-6 border border-primary-subtle rounded mt-4 pb-4">
            <h3 className="text-center mt-2">CADASTRO DE TUBO</h3>
            <label className={style_label} htmlFor="material">Material do tubo</label>
            <input onChange={updateValue} value={values.material} id="material" name="material" className={style_input} type="text" />

            <label className={style_label} htmlFor="dn_comercial_mm">Diâmetro Comercial (mm)</label>
            <input onChange={updateValue} value={values.dn_comercial_mm} id="dn_comercial_mm" name="dn_comercial_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="dn_externo_mm">Diâmetro Externo (mm)</label>
            <input onChange={updateValue} value={values.dn_externo_mm} id="dn_externo_mm" name="dn_externo_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="esp_mm">Espessura do Tubo (mm)</label>
            <input onChange={updateValue} value={values.esp_mm} id="esp_mm" name="esp_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="dn_interno_mm">Diâmetro Interno (mm)</label>
            <input onChange={updateValue} value={values.dn_interno_mm} id="dn_interno_mm" name="dn_interno_mm" className={style_input} type="number" />

            <div className="row d-flex justify-content-between mt-4 gap-3">
                <button className="btn btn-outline-primary col ms-3">Cadastrar</button>
                <button className="btn btn-outline-danger col me-3">Cancelar</button>
            </div>
            <SuccessAlert message={"A tubulação foi adicionada com sucesso"}/>
        </form>
    );
}

export default FormPipe;
