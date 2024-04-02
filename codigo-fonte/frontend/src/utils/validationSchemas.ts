import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup.string().matches(/^[A-Za-z]+$/, 'Por favor, insira apenas letras no nome').required('Por favor, insira seu nome'),
  email: yup.string().email('Por favor, insira um email válido').required('Por favor, insira seu email'),
  subject: yup.string().required('Por favor, selecione um assunto'),
  message: yup.string().required('Por favor, insira sua mensagem'),
});
