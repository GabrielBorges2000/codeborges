interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <h1>Novo contato de {name}</h1>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensagem:</strong> {message}</p>
  </div>
);