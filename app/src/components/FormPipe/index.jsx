function FormPipe() {
    const style_label = "mt-2 fw-bold"
    const style_input = "form-control border-primary-subtle"
    return (
        <form className="container col-md-6 border border-primary rounded mt-4 pb-4">
            <h3 className="text-center mt-2">CADASTRO DE TUBO</h3>
            <label className={style_label} htmlFor="material">Material do tubo</label>
            <input name="material" className={style_input} type="text" />

            <label className={style_label} htmlFor="dn_comercial_mm">Diâmetro Comercial (mm)</label>
            <input name="dn_comercial_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="dn_externo_mm">Diâmetro Externo (mm)</label>
            <input name="dn_externo_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="esp_mm">Espessura do Tubo (mm)</label>
            <input name="esp_mm" className={style_input} type="number" />

            <label className={style_label} htmlFor="dn_interno_mm">Diâmetro Interno (mm)</label>
            <input name="dn_interno_mm" className={style_input} type="number" />

            <div className="row d-flex justify-content-between mt-4 gap-3">
                <button className="btn btn-primary col ms-3">Cadastrar</button>
                <button className="btn btn-primary col me-3">Cancelar</button>
            </div>
        </form>
    );
}

export default FormPipe;
