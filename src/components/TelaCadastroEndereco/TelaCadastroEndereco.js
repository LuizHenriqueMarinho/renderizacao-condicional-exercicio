import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Informações pessoais</h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número da residência:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Confirmar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(2)}>Voltar</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
