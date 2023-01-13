function Cadastro() {

return(
<form>
    <fieldset>
        <label for="fname">Nome do produto:</label><br></br>
        <input type="text" id="fname" name="fname" /><br></br>
        <label for="preco">Preço do item:</label><br></br>
        <input type='number' id="preco" name="preco"></input>
        <button>Enviar</button>
       
    </fieldset>
    

</form>
)}

export default Cadastro