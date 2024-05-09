# Planos de Testes de Software

## Qualidade de Software

Para garantir o sucesso e a qualidade do site desenvolvido, a equipe escolheu categorias e subcategorias da norma ISO/IEC 25010 para avaliar a qualidade do software:

- Funcionalidade (Adequação funcional e Precisão)
- Confiabilidade (Recuperabilidade)
- Eficiência (Comportamento em relação ao desempenho e Utilização de recursos)
- Usabilidade (Compreensibilidade, Atratividade e Conformidade)
- Manutenibilidade (Modificabilidade e Testabilidade)
- Portabilidade (Adaptabilidade)
- Segurança (Integridade, Autenticidade e Responsabilidade)
- Compatibilidade (Coexistência)

As métricas incluem taxas de sucesso na conclusão de desafios, tempo de resposta, consumo de recursos, taxa de retenção de usuários, conformidade com diretrizes, facilidade de modificação, cobertura de testes, compatibilidade com diferentes dispositivos e sistemas, segurança de dados, e conformidade com regulamentações de proteção de dados. Essas métricas ajudarão a equipe a avaliar e melhorar continuamente a qualidade da aplicação, permitindo que ela promova eficazmente hábitos sustentáveis e contribua para a preservação ambiental.

## Cenários de Testes

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Evidências de Testes de Software

### Acessibilidade e boas práticas
Para testar os requisitos de acessibilidade, utilizamos features nativas da ferramenta _Storybook_ e a extensão _Lighthouse_. Optamos por incluir evidências de um grupo seleto de componentes, considerando o número alto de componentes utilizados no projeto. Os testes na íntegra podem ser visualizados ao rodar localmente o Storybook na máquina. Os testes do Lighthouse são executados através da extensão, fornecida para o navegador Google Chrome.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/1ee7bfba-26ed-401a-b862-841a8e28c2ae)
Por exemplo, na imagem acima, o componente de botão atende com sucesso os requisitos de três testes de acessibilidade, que checam se o componente possui texto discernível, suficiente contraste, e controles interativos não aninhados (requisito para um bom funcionamento com leitores de tela).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/cb671ad1-21d1-42ee-9fce-97461e54b54e)
Na imagem acima, o componente `ProductBanner` atende de forma satisfatória os requisitos de 6 testes.

Mais evidências:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/849e404b-6567-48ab-b420-dff3640e1cbb)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/1add8667-50d0-412d-9bfd-f7f348edf4c6)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/28a38d33-720b-46c2-9a85-912f07beb529)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/72a83ee7-ad2e-463d-b990-00e1c475e2b9)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/b60802ea-3911-4cfe-b2bc-e69e65bc2d97)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/f0739bbb-715f-4a70-958a-05ce1d304f14)

Para reproduzir os testes de acessibilidade do Storybook para todos os componentes utilizados no projeto, navegar até a pasta `frontend` e rodar o comando `npm run storybook`. Esse comando vai iniciar a UI do storybook no localhost do computador.

Realizamos também testes utilizando o Lighthouse, cujos resultados estão abaixo:
- Resultados do Lighthouse para um componente
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/cb440036-dd82-4055-bef1-d00154257c77)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/2f8e7282-97e6-4520-8baf-885e4b7bbb46)

- Resultados do Lighthouse para a página inteira, rodando localmente
- ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/502d7115-e515-4bc2-a55b-c3ff4d96574a)
- ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/cd84ea6b-b40c-4b82-9601-d0ed4efd2123)


## Evidências de Testes de Software (Etapa 3)
Para a terceira etapa, que teve foco na integração entre o Contentful e o Frontend, optamos por realizar a avaliação (local) do desempenho, de acessibilidade, de práticas recomendadas, do SEO e de App Web Progressivos com a extensão _Lighthouse_ nas páginas que refletem essa integração. A página FAQ também foi contemplada. Um novo teste será realizado quando o site estiver hospedado na plataforma vercel.

### Página inicial - Integração com o Contentful
![home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/78b3e59e-4238-4d2e-ad43-18a46728f2ed)

### Produtos - Integração com o Contentful
![produtos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/266d2021-53d6-471a-ab49-b0c1cd06175c)

### Página de Produto - Integração com o Contentful
![produto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/f53c8961-3c52-45ec-96e6-ec1e6cfc9bc3)

### Blog - Integração com o Contentful
![blog](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/ccbe809e-ae70-4d9e-a1dd-9ac23fe4e8a3)

### Artigo do Blog - Integração com o Contentful
![article](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/a1755865-d422-451b-a9a9-bb808066ca04)

### FAQ - Sem integração com o Contentful
![faq](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/08565b54-6cfe-4c9a-aac1-512922ac8391)

